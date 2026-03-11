import puppeteer, { Browser } from 'puppeteer';

const headless = true;

async function getBrowser(): Promise<Browser> {
  // Use system Chrome if provided, else bundled Chromium
  const execPath = process.env.PUPPETEER_EXECUTABLE_PATH;
  return puppeteer.launch({
    headless,
    executablePath: execPath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

export async function scrapePinterestImages(
  query: string,
  limit = 4,
): Promise<string[]> {
  const browser = await getBrowser();
  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    );
    // Trimmed list to speed up scrape; prioritised high-quality retailers
    const retailers = [
      'cos.com',
      'zara.com',
      'newlook.com',
      'sezane.com',
      'freepeople.com',
      'urbanoutfitters.com',
      'farfetch.com',
      'net-a-porter.com',
    ];

    const overlayWords =
      /(outfit|ideas|fashion|trend|look|style|expensive|winter|wardrobe|combo|ideas)/i;
    const seen = new Set<string>();
    const deduped: string[] = [];

    for (const domain of retailers) {
      if (deduped.length >= limit) break;
      try {
        await page.goto(
          `https://www.pinterest.com/search/buyable_pins/?q=${encodeURIComponent(query)}&rs=content_type_filter&domains=${encodeURIComponent(domain)}`,
          { waitUntil: 'networkidle2', timeout: 25000 },
        );
        await new Promise((r) => setTimeout(r, 700));
        await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
        await new Promise((r) => setTimeout(r, 500));

        const srcs = await page.$$eval('img', (imgs) => {
          const urls: string[] = [];
          imgs.forEach((img) => {
            const candidates: string[] = [];
            const src = img.getAttribute('src');
            const dataSrc = img.getAttribute('data-src');
            const srcset = img.getAttribute('srcset');
            if (src) candidates.push(src);
            if (dataSrc) candidates.push(dataSrc);
            if (srcset) {
              srcset.split(',').forEach((part) => {
                const url = part.trim().split(' ')[0];
                if (url) candidates.push(url);
              });
            }
            candidates.forEach((u) => urls.push(u));
          });
          return urls;
        });

        const filtered = srcs
          .filter((u) => /\.(jpe?g|png|webp)$/i.test(u) && u.includes('pinimg'))
          .filter((u) => u.includes('/736x/') || u.includes('/originals/'))
          .filter((u) => {
            const file = (u.split('?')[0].split('/').pop() || '').toLowerCase();
            return !overlayWords.test(file);
          });

        for (const u of filtered) {
          const clean = u.split('?')[0];
          const parts = clean.split('/');
          const file = parts[parts.length - 1];
          if (seen.has(file)) continue;
          seen.add(file);
          deduped.push(clean);
          if (deduped.length >= limit) break;
        }
      } catch {
        continue;
      }
    }
    return deduped;
  } finally {
    await browser.close();
  }
}
