import { useCallback, useEffect, useMemo, useState } from 'react';

type OutfitScore = {
  total: number;
  items: {
    itemId: string;
    tempScore: number;
    precipPenalty: number;
    windPenalty: number;
    protection: number;
    trendBoost: number;
    userBoost?: number;
    total: number;
  }[];
};

type UserSettings = {
  homeLocation: string;
  timezone: string;
  dailyDigestEnabled: boolean;
  dailyDigestHour: number;
  emailDigestEnabled: boolean;
  lastDigestSentAt?: string | null;
};

type ChatResult = {
  message: string;
  interpretedPreferences?: {
    occasion?: string;
    activity?: string;
    styleTags?: string[];
    avoidTags?: string[];
  };
  recommendation?: {
    outfit: any;
    score: OutfitScore;
  };
};

type ChatMessage = {
  role: 'user' | 'assistant';
  text: string;
  at: string;
};

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000/api';

async function api<T>(
  path: string,
  options: RequestInit = {},
  token?: string,
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

function App() {
  const CHAT_HISTORY_KEY = 'sf_chat_history';
  const [email, setEmail] = useState('you@example.com');
  const [password, setPassword] = useState('Password123!');
  const [token, setToken] = useState<string | null>(null);
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  const [showAuth, setShowAuth] = useState(false);
  const [showOutfitModal, setShowOutfitModal] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    outfit: any;
    score: OutfitScore;
  } | null>(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('');
  const [climate, setClimate] = useState<any | null>(null);
  const [recImages, setRecImages] = useState<string[]>([]);
  const [imgLoadStart, setImgLoadStart] = useState<number | null>(null);
  const [imgElapsed, setImgElapsed] = useState<number>(0);
  const [loadingRec, setLoadingRec] = useState(false);
  const [savingOutfit, setSavingOutfit] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatDraft, setChatDraft] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [loadingChat, setLoadingChat] = useState(false);
  const [settings, setSettings] = useState<UserSettings>({
    homeLocation: 'Leeds',
    timezone: 'Europe/London',
    dailyDigestEnabled: false,
    dailyDigestHour: 7,
    emailDigestEnabled: false,
    lastDigestSentAt: null,
  });
  const getCookie = (name: string) => {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('sf_theme') as 'light' | 'dark' | null;
    const cookie = getCookie('sf_theme') as 'light' | 'dark' | null;
    return stored || cookie || 'light';
  });
  const authed = useMemo(() => !!token, [token]);

  // persist token
  useEffect(() => {
    const stored = localStorage.getItem('sf_token');
    if (stored) setToken(stored);
    const storedChat = localStorage.getItem(CHAT_HISTORY_KEY);
    if (storedChat) {
      try {
        const parsed = JSON.parse(storedChat) as ChatMessage[];
        if (Array.isArray(parsed)) setChatMessages(parsed.slice(-30));
      } catch {
        // ignore malformed local cache
      }
    }
  }, []);
  useEffect(() => {
    if (token) localStorage.setItem('sf_token', token);
    else localStorage.removeItem('sf_token');
  }, [token]);

  useEffect(() => {
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(chatMessages.slice(-30)));
  }, [chatMessages]);

  useEffect(() => {
    if (!token) return;
    api<UserSettings>('/users/me/settings', {}, token)
      .then((res) => setSettings(res))
      .catch(() => {
        // Keep defaults if settings fetch fails.
      });
  }, [token]);

  // theme persist
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('sf_theme', theme);
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `sf_theme=${theme}; expires=${expires.toUTCString()}; path=/`;
  }, [theme]);

  const handle = useCallback(async (action: () => Promise<void>) => {
    try {
      await action();
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  }, []);

  const statusKind = useMemo(() => {
    if (!status) return 'neutral';
    const s = status.toLowerCase();
    if (s.startsWith('error')) return 'error';
    return 'info';
  }, [status]);

  const useGeo = () => {
    if (!navigator.geolocation) {
      setStatus('Error: geolocation not available');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `${pos.coords.latitude.toFixed(4)},${pos.coords.longitude.toFixed(4)}`;
        setLocation(coords);
        setStatus(`Done: location set to ${coords}`);
      },
      (err) => setStatus(`Error: ${err.message}`),
      { enableHighAccuracy: false, timeout: 5000 },
    );
  };

  const parseTags = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 8);
  };

  const styleSummary = (tags?: string[]) => {
    if (!tags || tags.length === 0) return 'clean, versatile basics';
    const readable = tags.slice(0, 3).join(', ');
    return `Trending tags: ${readable}`;
  };


  const summariseNext12h = (c: any | null) => {
    if (!c) return '';
    const temp = c.temperatureC ?? '–';
    const precip = c.precipProb ?? 0;
    const wind = c.windKph ?? 0;
    const windDesc = wind > 40 ? 'strong wind' : wind > 25 ? 'breezy' : 'light wind';
    const precipText = precipWords(precip, c.conditions);
    const extreme = extremeWeatherNotice(c);
    return `Next 12h: around ${temp}°C • ${precipText} • ${windDesc}${extreme ? ' • ' + extreme : ''}`;
  };

  const windWords = (windKph?: number) => {
    if (windKph === undefined || windKph === null) return 'light wind';
    if (windKph > 40) return 'strong wind';
    if (windKph > 25) return 'breezy';
    return 'light wind';
  };

  const precipWords = (prob?: number, conditions?: string) => {
    const p = prob ?? 0;
    const cond = (conditions || '').toLowerCase();
    const snow = cond.includes('snow');
    const hail = cond.includes('hail');
    const sleet = cond.includes('sleet');
    const thunder = cond.includes('thunder') || cond.includes('storm');
    if (snow) {
      if (p > 60) return 'snow likely later';
      if (p > 30) return 'chance of light snow';
      return 'unlikely to snow';
    }
    if (hail) return 'hail possible; use a waterproof hood';
    if (sleet) return 'sleet possible; waterproofs recommended';
    if (thunder) return 'thunder risk; stay covered during showers';
    if (p > 70) return 'heavy rain likely; bring a waterproof';
    if (p > 40) return 'light rain possible';
    if (p > 20) return 'small chance of drizzle';
    return 'staying mostly dry';
  };

  const extremeWeatherNotice = (c: any | null) => {
    if (!c) return '';
    const cond = (c.conditions || '').toLowerCase();
    const wind = c.windKph ?? 0;
    const flood = cond.includes('flood');
    const hurricane = cond.includes('hurricane') || cond.includes('cyclone');
    const storm = cond.includes('storm') || cond.includes('gale') || wind > 70;
    if (hurricane) return 'Severe advisory: avoid travel, seek sturdy shelter.';
    if (flood) return 'Flood risk: avoid low areas, use waterproof boots.';
    if (storm) return 'High wind/storm risk: avoid exposed areas, secure outer layers.';
    return '';
  };

  const seasonForDate = (iso?: string) => {
    const d = iso ? new Date(iso) : new Date();
    const month = d.getUTCMonth(); // 0-11
    const year = d.getUTCFullYear();
    const season =
      month >= 2 && month <= 4
        ? 'spring'
        : month >= 5 && month <= 7
        ? 'summer'
        : month >= 8 && month <= 10
        ? 'autumn'
        : 'winter';
    return { season, year };
  };

  const imageTiles = (tags?: string[]) => {
    const baseTags = tags && tags.length ? tags : ['everyday outfit', 'layered look', 'commute wear', 'casual street'];
    const { season, year } = seasonForDate(datetime);
    return Array.from(new Set(baseTags))
      .slice(0, 4)
      .map((tag) => ({
        tag,
        url: '',
        link: `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(tag + ' outfit inspiration ' + season + ' ' + year)}`,
      }));
  };

  const shuffle = (arr: string[]) =>
    arr
      .map((v) => ({ v, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map(({ v }) => v);

  const fetchImagesForTags = async (tags: string[], season: string, year: number) => {
    const want = tags.length ? tags.slice(0, 2) : ['puffer', 'casual'];
    const queries = want.map((tag) => `${tag} outfit inspiration ${season} ${year}`);
    const results = await Promise.all(
      queries.map(async (query) => {
        try {
          const res = await api<{ images: { url: string }[] }>(`/trends/pinterest?q=${encodeURIComponent(query)}`);
          return (res.images || []).map((i) => i.url);
        } catch {
          return [] as string[];
        }
      }),
    );
    const pooled = results.flat().filter((u) => {
      const lower = (u || '').toLowerCase();
      if (!lower.includes('pinimg.com')) return false;
      if (!(lower.includes('/736x/') || lower.includes('/original'))) return false;
      if (/(bag|handbag|purse|jewellery|ring|bracelet)/i.test(lower)) return false;
      return /\.(jpe?g|png|webp)$/i.test(lower);
    });
    const shuffled = shuffle(pooled);
    const seenFiles = new Set<string>();
    const deduped: string[] = [];
    for (const url of shuffled) {
      const clean = url.split('?')[0];
      const parts = clean.split('/');
      const file = parts.pop() || clean;
      const stem = file.toLowerCase();
      if (seenFiles.has(stem)) continue;
      seenFiles.add(stem);
      deduped.push(url);
      if (deduped.length >= 4) break;
    }
    return deduped.slice(0, 4);
  };

  // track elapsed load time
  useEffect(() => {
    if (!imgLoadStart) return;
    const id = setInterval(() => {
      setImgElapsed(Math.round((Date.now() - imgLoadStart) / 1000));
    }, 500);
    return () => clearInterval(id);
  }, [imgLoadStart]);

  const accessoryAdvice = (c: any | null) => {
    if (!c) return '';
    const t = c.temperatureC ?? 12;
    const p = c.precipProb ?? 0;
    const w = c.windKph ?? 0;
    const mild = t >= 15 && t <= 24;
    const drizzle = p > 20 && p <= 60;
    if (mild && drizzle) {
      return 'Extras: light jacket or shirt-jacket; carry a packable rain shell if you will be out for long.';
    }
    const needsUmbrella = p > 40;
    const needsCoat = t < 14 || (t < 16 && w > 25);
    const needsScarf = t < 14 || (t < 16 && w > 15);
    const needsGloves = t < 10;
    const bits: string[] = [];
    if (needsUmbrella) bits.push('Pack an umbrella or hood');
    if (needsCoat) bits.push('Grab a warm coat');
    if (needsScarf) bits.push('Add a scarf');
    if (needsGloves) bits.push('Consider gloves');
    if (!bits.length) return 'Extras: a light coat or jacket should be enough; no umbrella needed.';
    return `Extras: ${bits.join(' • ')}.`;
  };

  const outfitGuidance = (c: any | null) => {
    if (!c) {
      return {
        fit: 'mid-weight warmth, waterproof not needed',
        avoid: 'Skip suede or airy knits. If rain starts, add a light waterproof layer.',
      };
    }
    const t = c.temperatureC ?? 0;
    const p = c.precipProb ?? 0;
    const mild = t >= 15 && t <= 24;
    const drizzle = p > 20 && p <= 60;
    if (mild && drizzle) {
      return {
        fit: 'breathable layers; water-resistant optional',
        avoid: 'Avoid suede or airy knits if a shower passes; add a light shell if rain starts.',
      };
    }
    return {
      fit: 'mid-weight warmth, waterproof not needed',
      avoid: 'Skip suede or airy knits. If rain starts, add a light waterproof layer.',
    };
  };

  const tzForLocation = (loc: string) => {
    const l = (loc || '').toLowerCase();
    if (l.includes('sydney')) return 'Australia/Sydney';
    if (l.includes('tokyo')) return 'Asia/Tokyo';
    if (l.includes('paris')) return 'Europe/Paris';
    if (l.includes('berlin')) return 'Europe/Berlin';
    if (l.includes('london') || l.includes('leeds')) return 'Europe/London';
    if (l.includes('new york')) return 'America/New_York';
    if (l.includes('toronto')) return 'America/Toronto';
    if (l.includes('los angeles')) return 'America/Los_Angeles';
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  const formatLocalHuman = (iso: string | undefined, loc: string) => {
    if (!iso) return '';
    const tz = tzForLocation(loc);
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: tz,
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(iso));
  };

  return (
    <>
    <div className="page">
      <nav className="nav">
        <div className="brand">
          <img src="/style-forecast-logo.svg" alt="Style Forecast" className="brand-logo" />
        </div>
        <div className="auth">
          <button
            className="btn ghost"
            onClick={() => {
              setAuthView('login');
              setShowAuth((v) => authView !== 'login' || !v);
            }}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => {
              setAuthView('register');
              setShowAuth((v) => authView !== 'register' || !v);
            }}
          >
            Register
          </button>
          <button
            className="btn outline"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </button>
        </div>
      </nav>

      {showAuth && (
        <div className="auth-panel">
          <div className="panel-head">
            <strong>{authView === 'login' ? 'Login' : 'Create account'}</strong>
            <button className="close" onClick={() => setShowAuth(false)}>
              ×
            </button>
          </div>
          <div className="row">
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button
              className="btn"
              onClick={() =>
                handle(async () => {
                  if (authView === 'register') {
                    await api('/auth/register', {
                      method: 'POST',
                      body: JSON.stringify({
                        email,
                        password,
                        cityLat: 53.8,
                        cityLon: -1.55,
                      }),
                    });
                  }
                  const res = await api<{ tokens: { accessToken: string } }>(
                    '/auth/login',
                    {
                      method: 'POST',
                      body: JSON.stringify({ email, password }),
                    },
                  );
                  setToken(res.tokens.accessToken);
                  setShowAuth(false);
                  setStatus('Done: authenticated');
                })
              }
            >
              {authView === 'login' ? 'Login' : 'Register & Login'}
            </button>
            <button
              className="btn ghost"
              onClick={() => {
                setToken(null);
                setRecommendation(null);
                setStatus('Session cleared');
              }}
            >
              Logout
            </button>
          </div>
          <p className="hint">{authed ? 'Token set' : 'Not authenticated'}</p>
          {authed && (
            <div className="settings-panel">
              <strong>Account settings</strong>
              <div className="row" style={{ marginTop: '0.5rem' }}>
                <input
                  className="input"
                  value={settings.homeLocation}
                  onChange={(e) => setSettings((s) => ({ ...s, homeLocation: e.target.value }))}
                  placeholder="Home location"
                />
                <input
                  className="input"
                  value={settings.timezone}
                  onChange={(e) => setSettings((s) => ({ ...s, timezone: e.target.value }))}
                  placeholder="Timezone (e.g. Australia/Sydney)"
                />
              </div>
              <div className="row">
                <label className="hint">
                  <input
                    type="checkbox"
                    checked={settings.dailyDigestEnabled}
                    onChange={(e) => setSettings((s) => ({ ...s, dailyDigestEnabled: e.target.checked }))}
                  />
                  &nbsp;Enable daily morning recommendation
                </label>
                <label className="hint">
                  Hour:&nbsp;
                  <input
                    className="input"
                    style={{ width: '84px' }}
                    type="number"
                    min={0}
                    max={23}
                    value={settings.dailyDigestHour}
                    onChange={(e) =>
                      setSettings((s) => ({
                        ...s,
                        dailyDigestHour: Number(e.target.value || 0),
                      }))
                    }
                  />
                </label>
                <label className="hint">
                  <input
                    type="checkbox"
                    checked={settings.emailDigestEnabled}
                    onChange={(e) => setSettings((s) => ({ ...s, emailDigestEnabled: e.target.checked }))}
                  />
                  &nbsp;Email delivery (when configured)
                </label>
              </div>
              <div className="row">
                <button
                  className="btn outline"
                  onClick={() =>
                    handle(async () => {
                      const res = await api<UserSettings>(
                        '/users/me/settings',
                        {
                          method: 'PATCH',
                          body: JSON.stringify(settings),
                        },
                        token || undefined,
                      );
                      setSettings(res);
                      setStatus('Done: account settings saved');
                    })
                  }
                >
                  Save settings
                </button>
                {settings.lastDigestSentAt && (
                  <span className="hint">Last digest: {new Date(settings.lastDigestSentAt).toLocaleString('en-GB')}</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <header className="hero">
        <div className="hero-text">
          <h1>Outfits tuned for weather and trends.</h1>
          <p className="sub">
            We analyse news trends to see what's in style, and combine that with weather data to recommend outfits you'll love.
          </p>
        </div>
      </header>

      {status && statusKind === 'error' && (
        <div className={`banner ${statusKind}`}>
          <span>{status}</span>
          <button className="close" onClick={() => setStatus('')}>
            ×
          </button>
        </div>
      )}

      <main className="grid single">
        <section className="card recommend-card">
          <div className="card-head">
            <div>
              <p className="eyebrow">Weather + trend aware</p>
              <h2>Get a Recommendation</h2>
              <p className="sub">Tell us where and when, and we'll suggest what to wear for the weather coming your way.</p>
            </div>
          </div>
          <div className="row row-split">
            <select
              className="input grow"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ color: location ? 'var(--ink)' : 'var(--muted)' }}
            >
              <option value="" disabled>
                Enter location
              </option>
              <option value="Leeds">Leeds</option>
              <option value="London">London</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Paris">Paris</option>
              <option value="Sydney">Sydney</option>
              <option value="Toronto">Toronto</option>
              <option value="Berlin">Berlin</option>
              {location && <option value={location}>Custom: {location}</option>}
            </select>
            <button className="btn outline" onClick={useGeo}>Use my location</button>
            <div className="divider" />
            <input
              className="input grow"
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
              placeholder="Select time"
              style={{ color: datetime ? 'var(--ink)' : 'var(--muted)' }}
            />
            <button
              className="btn outline"
              onClick={() =>
                handle(async () => {
                  if (!location) {
                    setStatus('Error: please choose or input a location first');
                    return;
                  }
                  const nowRes = await api<{ timezone: string; localNow: string }>(
                    `/climate/local-now?location=${encodeURIComponent(location)}`,
                    { method: 'POST' },
                  );
                  setDatetime(nowRes.localNow);
                })
              }
            >
              Use time now
            </button>
            
          </div>

          <div className="row" style={{ marginTop: '0.8rem' }}>
            <button
              className="btn"
              onClick={() =>
                handle(async () => {
                  if (!location) {
                    setStatus('Error: please choose or input a location first');
                    return;
                  }
                  setLoadingRec(true);
                  setRecImages([]);
                  setImgElapsed(0);
                  setImgLoadStart(Date.now());
                  try {
                    let effectiveDt = datetime;
                    if (!effectiveDt) {
                      const nowRes = await api<{ timezone: string; localNow: string }>(
                        `/climate/local-now?location=${encodeURIComponent(location)}`,
                        { method: 'POST' },
                      );
                      effectiveDt = nowRes.localNow;
                      setDatetime(effectiveDt);
                    }
                    // Backend resolves timezone from selected location/geocode.
                    let snapshot: any = await api(`/climate/latest?location=${encodeURIComponent(location)}&datetime=${encodeURIComponent(effectiveDt)}&force_live=true`, {
                      method: 'POST',
                    }).catch(() => null);
                    if (!snapshot) {
                      throw new Error('Could not fetch live weather for that location/time');
                    }
                    setClimate(snapshot);
                    const res = await api<{ outfit: any; score: OutfitScore }>(
                      `/recommendations/outfit?location=${encodeURIComponent(
                        location,
                      )}&datetime=${encodeURIComponent(effectiveDt)}`,
                      {},
                      token || undefined,
                    );
                    setRecommendation(res);
                    const tags = res.outfit?.items?.[0]?.item?.styleTags || [];
                    const { season, year } = seasonForDate(datetime);
                    const images = await fetchImagesForTags(tags, season, year);
                    setRecImages(images);
                    setStatus('Done: ready');
                  } finally {
                    setLoadingRec(false);
                  }
                })
              }
            >
              Get Recommendation
            </button>
            {authed && recommendation && (
              <button
                className="btn outline"
                disabled={savingOutfit}
                onClick={() =>
                  handle(async () => {
                    setSavingOutfit(true);
                    try {
                      const tags: string[] =
                        recommendation.outfit?.styleTags?.length
                          ? recommendation.outfit.styleTags
                          : recommendation.outfit?.items?.[0]?.item?.styleTags ?? [];
                      await api(
                        '/outfits',
                        {
                          method: 'POST',
                          body: JSON.stringify({
                            name: `Saved look ${new Date().toLocaleDateString('en-GB')}`,
                            occasion: 'daily recommendation',
                            styleTags: tags,
                            itemIds: [],
                          }),
                        },
                        token || undefined,
                      );
                      setStatus('Done: recommendation saved to your outfits');
                    } finally {
                      setSavingOutfit(false);
                    }
                  })
                }
              >
                {savingOutfit ? 'Saving…' : 'Save this recommendation'}
              </button>
            )}
          </div>

          {recommendation && !loadingRec && (
            <div className="chat-box" style={{ marginTop: '1rem' }}>
              <p className="hint" style={{ marginBottom: '0.4rem' }}>
                Need extra help? Use the help chat in the bottom-right for detailed outfit guidance.
              </p>
            </div>
          )}

          {loadingRec && (
            <div className="tile-loading" style={{ marginTop: '1rem', textAlign: 'center' }}>
              <div className="loader" aria-label="Loading recommendation"></div>
              <div>Gathering weather, trends, and looks<span className="ellipsis"></span></div>
            </div>
          )}

          {recommendation && !loadingRec && (
            <div className="score inline-score">
              <div className="rec-list">
                {(recommendation?.outfit?.items ?? []).map((entry: any) => {
                  const hasImages = recImages.length > 0;
                  const guidance = outfitGuidance(climate);
                  return (
                    <div key={entry.itemId} className="rec-item">
                    <div className="rec-top">
                      <div className="rec-left">
                        <div className="rec-title">Our recommendation</div>
                        <div className="rec-body-lines">
                      <div><span className="pill pill-soft">In style</span><span className="line-text">{styleSummary(entry.item?.styleTags)}</span></div>
                      <div><span className="pill pill-soft">Weather fit</span><span className="line-text">{guidance.fit}</span></div>
                          <div><span className="pill pill-warn">Avoid</span><span className="line-text">{guidance.avoid}</span></div>
                        </div>
                      </div>
                      {climate && (
                        <div className="rec-forecast align-right">
                          <div className="rec-forecast-now">
                            Forecast for {formatLocalHuman(climate.validFor, location)}: {climate.temperatureC ?? '–'}°C • {precipWords(climate.precipProb, climate.conditions)} • {windWords(climate.windKph)} • {climate.conditions ?? '—'}
                          </div>
                          <div className="rec-forecast-sub">{summariseNext12h(climate)}</div>
                          <div className="rec-forecast-sub">{accessoryAdvice(climate)}</div>
                        </div>
                      )}
                    </div>
                    {hasImages ? (
                      <>
                        <div className="tile-row">
                          {recImages.slice(0, 4).map((imgUrl, iidx) => (
                            <a
                              key={`${imgUrl}-${iidx}`}
                              className="tile"
                              href={imageTiles(entry.item?.styleTags)[0].link}
                              target="_blank"
                              rel="noreferrer"
                              title="Outfit ideas"
                            >
                              <img
                                src={`${API_BASE}/trends/pinterest/proxy?url=${encodeURIComponent(imgUrl)}`}
                                alt="outfit idea"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  const tileEl = e.currentTarget.closest('.tile') as HTMLElement | null;
                                  if (tileEl) tileEl.style.display = 'none';
                                }}
                              />
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="tile-loading">
                        Fetching looks… {imgLoadStart ? `${Math.max(imgElapsed, 0)}s` : ''}
                      </p>
                    )}
                  </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </main>

    </div>
    <footer className="footer-panel">
      <div className="footer-inner">
        <div className="footer-col">
          <p className="foot-label">Data Use</p>
          <p className="foot-text">
            Outfits and weather snapshots you add stay in your account. Trends come from curated news feeds. Used only to suggest outfits and tune recommendations.
          </p>
        </div>
        <div className="footer-col">
          <p className="foot-label">Privacy</p>
          <p className="foot-text">
            Your rights (GDPR):&nbsp;
            <a href="https://gdpr-info.eu/" target="_blank" rel="noreferrer">gdpr-info.eu</a>
          </p>
        </div>
        <div className="footer-col">
          <p className="foot-label">Contact</p>
          <p className="foot-text">
            <a href="mailto:sc22pe@leeds.ac.uk">sc22pe@leeds.ac.uk</a><br />
            <a href="https://www.linkedin.com/in/poppyeedwards/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
    {!chatOpen && recommendation && !loadingRec && (
      <button className="chat-launcher" onClick={() => setChatOpen(true)} type="button" aria-label="Open help chat">
        <i className="fa-solid fa-message"></i>
        <span>Help chat</span>
      </button>
    )}
    {chatOpen && recommendation && !loadingRec && (
      <div className="chat-widget">
        <div className="chat-widget-head">
          <div>
            <strong>Style Forecast Assistant</strong>
            <div className="chat-sub">Online • personalised outfit help</div>
          </div>
          <div className="chat-head-actions">
            <button
              className="btn ghost chat-head-btn"
              type="button"
              onClick={() => setChatMessages([])}
            >
              Clear chat
            </button>
            <button className="close" onClick={() => setChatOpen(false)} aria-label="Close help chat">
              ×
            </button>
          </div>
        </div>
        <div className="chat-widget-context">
          {location || 'No location selected'} {datetime ? `• ${datetime}` : '• current local time'}
        </div>
        <div className="chat-widget-controls">
          <input
            className="input"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            className="input"
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
          <button
            className="btn ghost"
            type="button"
            onClick={() =>
              handle(async () => {
                if (!location) {
                  setStatus('Error: choose location first');
                  return;
                }
                const nowRes = await api<{ timezone: string; localNow: string }>(
                  `/climate/local-now?location=${encodeURIComponent(location)}`,
                  { method: 'POST' },
                );
                setDatetime(nowRes.localNow);
              })
            }
          >
            Use time now
          </button>
        </div>
        <div className="chat-widget-chips">
          {['Work', 'School', 'Gym', 'Dinner', 'Commute'].map((chip) => (
            <button
              key={chip}
              className="btn ghost"
              onClick={() => setChatDraft((v) => (v ? `${v} ${chip}` : chip))}
              type="button"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="chat-thread">
          {chatMessages.length === 0 && (
            <div className="chat-bubble assistant">
              Tell me what you are doing today and I will suggest outfit pieces, colours, patterns, and materials.
            </div>
          )}
          {chatMessages.map((m, idx) => (
            <div key={`${m.at}-${idx}`} className={`chat-bubble ${m.role}`}>
              {m.text}
            </div>
          ))}
          {loadingChat && <div className="chat-bubble assistant">Thinking…</div>}
        </div>
        <div className="chat-widget-compose">
          <textarea
            className="input"
            placeholder="Type your message..."
            value={chatDraft}
            onChange={(e) => setChatDraft(e.target.value)}
          />
          <button
            className="btn"
            disabled={!chatDraft.trim() || !location || loadingChat}
            onClick={() =>
              handle(async () => {
                if (!location) {
                  setStatus('Error: choose location first');
                  return;
                }
                const userMsg = chatDraft.trim();
                const nowIso = new Date().toISOString();
                setChatMessages((prev) => [...prev, { role: 'user', text: userMsg, at: nowIso }]);
                setChatDraft('');
                setLoadingChat(true);
                try {
                  const res = await api<ChatResult>(
                    '/chat/recommendation',
                    {
                      method: 'POST',
                      body: JSON.stringify({
                        location,
                        datetime: datetime || undefined,
                        message: userMsg,
                        context: chatMessages
                          .filter((m) => m.role === 'user')
                          .slice(-3)
                          .map((m) => m.text)
                          .join(' | '),
                      }),
                    },
                    token || undefined,
                  );
                  const assistantText = res.message || 'Here is a tailored recommendation for your plan.';
                  setChatMessages((prev) => [
                    ...prev,
                    { role: 'assistant', text: assistantText, at: new Date().toISOString() },
                  ]);
                } finally {
                  setLoadingChat(false);
                }
              })
            }
          >
            Send
          </button>
        </div>
      </div>
    )}
    {showOutfitModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="panel-head">
              <strong>Add Outfit</strong>
              <button className="close" onClick={() => setShowOutfitModal(false)}>
                ×
              </button>
            </div>
            <p className="hint">Requires login. Optional: describe your go-to outfit to be saved and reused.</p>
            <div className="row">
              <textarea
                className="input"
                style={{ minHeight: '90px', flex: 1 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                className="btn"
                disabled={!authed}
                onClick={() =>
                  handle(async () => {
                    const tags = parseTags(description);
                    const baseItemId = (
                      await api<{ id: string }>(
                        '/items',
                        {
                          method: 'POST',
                          body: JSON.stringify({
                            category: 'TOP',
                            sizeLabel: 'M',
                            material: 'cotton blend',
                            condition: 4,
                            styleEmbedding: [0.1, 0.2, 0.3, 0.4],
                            insulation: 0.6,
                            waterproof: description.toLowerCase().includes('waterproof') ? 0.8 : 0.2,
                            styleTags: tags.length ? tags : ['casual'],
                          }),
                        },
                        token || undefined,
                      )
                    ).id;

                    const createdOutfit = (
                      await api<{ id: string }>(
                        '/outfits',
                        {
                          method: 'POST',
                          body: JSON.stringify({
                            name: 'Described outfit',
                            occasion: 'general',
                            itemIds: [baseItemId],
                            styleTags: tags.length ? tags : ['casual'],
                          }),
                        },
                        token || undefined,
                      )
                    ).id;
                    setShowOutfitModal(false);
                    setStatus(`Outfit saved (${createdOutfit.slice(0, 6)}…)`);
                  })
                }
              >
                Save Outfit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
