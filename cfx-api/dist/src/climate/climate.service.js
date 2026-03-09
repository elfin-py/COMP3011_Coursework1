"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClimateService = class ClimateService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    cityCoords = {
        leeds: { lat: 53.8008, lon: -1.5491 },
        london: { lat: 51.5072, lon: -0.1276 },
        manchester: { lat: 53.4808, lon: -2.2426 },
        birmingham: { lat: 52.4862, lon: -1.8904 },
        liverpool: { lat: 53.4084, lon: -2.9916 },
        bristol: { lat: 51.4545, lon: -2.5879 },
        glasgow: { lat: 55.8642, lon: -4.2518 },
        edinburgh: { lat: 55.9533, lon: -3.1883 },
        newcastle: { lat: 54.9783, lon: -1.6178 },
        sheffield: { lat: 53.3811, lon: -1.4701 },
        nottingham: { lat: 52.9548, lon: -1.1581 },
        leicester: { lat: 52.6369, lon: -1.1398 },
        cardiff: { lat: 51.4816, lon: -3.1791 },
        belfast: { lat: 54.5973, lon: -5.9301 },
        southampton: { lat: 50.9097, lon: -1.4044 },
        'new york': { lat: 40.7128, lon: -74.006 },
        tokyo: { lat: 35.6762, lon: 139.6503 },
        paris: { lat: 48.8566, lon: 2.3522 },
        amsterdam: { lat: 52.3676, lon: 4.9041 },
        brussels: { lat: 50.8503, lon: 4.3517 },
        madrid: { lat: 40.4168, lon: -3.7038 },
        barcelona: { lat: 41.3874, lon: 2.1686 },
        lisbon: { lat: 38.7223, lon: -9.1393 },
        dublin: { lat: 53.3498, lon: -6.2603 },
        copenhagen: { lat: 55.6761, lon: 12.5683 },
        stockholm: { lat: 59.3293, lon: 18.0686 },
        oslo: { lat: 59.9139, lon: 10.7522 },
        helsinki: { lat: 60.1699, lon: 24.9384 },
        vienna: { lat: 48.2082, lon: 16.3738 },
        prague: { lat: 50.0755, lon: 14.4378 },
        warsaw: { lat: 52.2297, lon: 21.0122 },
        budapest: { lat: 47.4979, lon: 19.0402 },
        rome: { lat: 41.9028, lon: 12.4964 },
        milan: { lat: 45.4642, lon: 9.19 },
        munich: { lat: 48.1351, lon: 11.582 },
        zurich: { lat: 47.3769, lon: 8.5417 },
        geneva: { lat: 46.2044, lon: 6.1432 },
        sydney: { lat: -33.8688, lon: 151.2093 },
        toronto: { lat: 43.6532, lon: -79.3832 },
        berlin: { lat: 52.52, lon: 13.405 },
    };
    cityTimezones = {
        leeds: 'Europe/London',
        london: 'Europe/London',
        manchester: 'Europe/London',
        birmingham: 'Europe/London',
        liverpool: 'Europe/London',
        bristol: 'Europe/London',
        glasgow: 'Europe/London',
        edinburgh: 'Europe/London',
        newcastle: 'Europe/London',
        sheffield: 'Europe/London',
        nottingham: 'Europe/London',
        leicester: 'Europe/London',
        cardiff: 'Europe/London',
        belfast: 'Europe/London',
        southampton: 'Europe/London',
        'new york': 'America/New_York',
        tokyo: 'Asia/Tokyo',
        paris: 'Europe/Paris',
        amsterdam: 'Europe/Amsterdam',
        brussels: 'Europe/Brussels',
        madrid: 'Europe/Madrid',
        barcelona: 'Europe/Madrid',
        lisbon: 'Europe/Lisbon',
        dublin: 'Europe/Dublin',
        copenhagen: 'Europe/Copenhagen',
        stockholm: 'Europe/Stockholm',
        oslo: 'Europe/Oslo',
        helsinki: 'Europe/Helsinki',
        vienna: 'Europe/Vienna',
        prague: 'Europe/Prague',
        warsaw: 'Europe/Warsaw',
        budapest: 'Europe/Budapest',
        rome: 'Europe/Rome',
        milan: 'Europe/Rome',
        munich: 'Europe/Berlin',
        zurich: 'Europe/Zurich',
        geneva: 'Europe/Zurich',
        sydney: 'Australia/Sydney',
        toronto: 'America/Toronto',
        berlin: 'Europe/Berlin',
    };
    normaliseLocation(location) {
        const key = location.trim().toLowerCase();
        const match = Object.keys(this.cityCoords).find((k) => key.includes(k));
        return match || key;
    }
    zonedDateTimeToUtc(datetime, tz) {
        if (!tz)
            return new Date(datetime);
        const [datePart, timePart] = datetime.split('T');
        if (!datePart || !timePart)
            return new Date(datetime);
        const [y, m, d] = datePart.split('-').map(Number);
        const [hh, mm] = timePart.split(':').map(Number);
        const utcGuess = Date.UTC(y, (m || 1) - 1, d || 1, hh || 0, mm || 0);
        const guessDate = new Date(utcGuess);
        const parts = new Intl.DateTimeFormat('en-GB', {
            timeZone: tz,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }).formatToParts(guessDate);
        const get = (type) => parseInt(parts.find((p) => p.type === type)?.value || '0', 10);
        const wallMins = get('hour') * 60 + get('minute');
        const targetWallMins = (hh || 0) * 60 + (mm || 0);
        const offsetMins = targetWallMins - wallMins;
        return new Date(utcGuess - offsetMins * 60_000);
    }
    async geocode(location) {
        const coordMatch = location.trim().match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
        if (coordMatch) {
            const lat = Number(coordMatch[1]);
            const lon = Number(coordMatch[2]);
            const tz = await this.timezoneForCoords(lat, lon);
            return { lat, lon, timezone: tz || undefined };
        }
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`;
        const res = await fetch(url);
        if (!res.ok)
            return null;
        const data = await res.json();
        if (data?.results?.length) {
            const first = data.results[0];
            return { lat: first.latitude, lon: first.longitude, timezone: first.timezone };
        }
        return null;
    }
    async timezoneForCoords(lat, lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok)
            return null;
        const data = await res.json();
        return data?.timezone || null;
    }
    async resolveLocationMeta(location) {
        const key = this.normaliseLocation(location);
        const coordFromMap = this.cityCoords[key];
        const mappedTz = this.cityTimezones[key];
        if (coordFromMap) {
            return { ...coordFromMap, timezone: mappedTz };
        }
        const geo = await this.geocode(location);
        if (!geo)
            return null;
        return geo;
    }
    formatLocalNowForTz(timezone) {
        const parts = new Intl.DateTimeFormat('sv-SE', {
            timeZone: timezone,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }).formatToParts(new Date());
        const get = (type) => parts.find((p) => p.type === type)?.value || '00';
        return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}`;
    }
    async localNow(location) {
        const meta = await this.resolveLocationMeta(location);
        const timezone = meta?.timezone || 'UTC';
        return {
            timezone,
            localNow: this.formatLocalNowForTz(timezone),
        };
    }
    async fetchLiveWeather(location, datetime, tz) {
        const meta = await this.resolveLocationMeta(location);
        if (!meta)
            return null;
        const zone = meta.timezone || tz || 'auto';
        const dt = datetime ? this.zonedDateTimeToUtc(datetime, zone) : new Date();
        const dateStr = (d) => d.toISOString().split('T')[0];
        const today = dateStr(dt);
        const tomorrow = dateStr(new Date(dt.getTime() + 24 * 60 * 60 * 1000));
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${meta.lat}&longitude=${meta.lon}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m,weathercode&timezone=${encodeURIComponent(zone)}&start_date=${today}&end_date=${tomorrow}`;
        const res = await fetch(url);
        if (!res.ok)
            return null;
        const data = await res.json();
        if (!data.hourly)
            return null;
        const hours = data.hourly.time;
        const temps = data.hourly.temperature_2m;
        const precip = data.hourly.precipitation_probability || [];
        const wind = data.hourly.windspeed_10m || [];
        const toMinutes = (s) => {
            const [datePart, timePart = '00:00'] = s.split('T');
            const [y, m, d] = datePart.split('-').map(Number);
            const [hh, mm] = timePart.split(':').map(Number);
            return Date.UTC(y || 0, (m || 1) - 1, d || 1, hh || 0, mm || 0);
        };
        const targetStr = datetime ? datetime : hours[0];
        const targetMins = toMinutes(targetStr);
        let idx = hours.findIndex((h) => {
            const diff = Math.abs(toMinutes(h) - targetMins);
            return diff <= 30 * 60 * 1000;
        });
        if (idx === -1) {
            let bestDiff = Number.MAX_SAFE_INTEGER;
            idx = 0;
            hours.forEach((h, i) => {
                const diff = Math.abs(toMinutes(h) - targetMins);
                if (diff < bestDiff) {
                    bestDiff = diff;
                    idx = i;
                }
            });
        }
        const conditions = 'live forecast';
        const validForRaw = hours[idx] || dt.toISOString();
        const validForDate = validForRaw.includes('Z')
            ? new Date(validForRaw)
            : this.zonedDateTimeToUtc(validForRaw, zone);
        return {
            location,
            capturedAt: new Date(),
            validFor: validForDate,
            temperatureC: temps[idx],
            humidity: data.hourly.relativehumidity_2m?.[idx],
            windKph: wind[idx],
            precipProb: precip[idx],
            conditions,
        };
    }
    create(dto) {
        return this.prisma.climateSnapshot.create({
            data: {
                location: dto.location,
                capturedAt: new Date(dto.capturedAt),
                validFor: dto.validFor ? new Date(dto.validFor) : new Date(dto.capturedAt),
                temperatureC: dto.temperatureC,
                humidity: dto.humidity,
                windKph: dto.windKph,
                precipProb: dto.precipProb,
                conditions: dto.conditions,
            },
        });
    }
    latest(location, datetime, tz, forceLive = false) {
        const load = async () => {
            const zone = (await this.resolveLocationMeta(location))?.timezone || tz;
            if (forceLive) {
                const live = await this.fetchLiveWeather(location, datetime, zone);
                if (live) {
                    return this.prisma.climateSnapshot.create({ data: live });
                }
                return null;
            }
            if (datetime) {
                const target = this.zonedDateTimeToUtc(datetime, zone);
                const next = await this.prisma.climateSnapshot.findFirst({
                    where: { location, validFor: { gte: target } },
                    orderBy: [{ validFor: 'asc' }, { capturedAt: 'desc' }],
                });
                if (next?.validFor && Math.abs(new Date(next.validFor).getTime() - target.getTime()) < 3 * 60 * 60 * 1000)
                    return next;
                const prev = await this.prisma.climateSnapshot.findFirst({
                    where: { location, validFor: { lte: target } },
                    orderBy: [{ validFor: 'desc' }, { capturedAt: 'desc' }],
                });
                if (prev?.validFor && Math.abs(new Date(prev.validFor).getTime() - target.getTime()) < 3 * 60 * 60 * 1000)
                    return prev;
                const live = await this.fetchLiveWeather(location, datetime, zone);
                if (live) {
                    return this.prisma.climateSnapshot.create({ data: live });
                }
                return null;
            }
            const latest = await this.prisma.climateSnapshot.findFirst({
                where: { location },
                orderBy: { capturedAt: 'desc' },
            });
            if (latest)
                return latest;
            const live = await this.fetchLiveWeather(location, datetime, zone);
            if (live) {
                return this.prisma.climateSnapshot.create({ data: live });
            }
            return null;
        };
        return load();
    }
};
exports.ClimateService = ClimateService;
exports.ClimateService = ClimateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClimateService);
//# sourceMappingURL=climate.service.js.map