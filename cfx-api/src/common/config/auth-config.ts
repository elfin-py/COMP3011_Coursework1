export function requiredEnv(name: 'JWT_ACCESS_SECRET' | 'JWT_REFRESH_SECRET') {
  const value = process.env[name]?.trim();
  if (!value) {
    // Fail fast so auth never silently falls back to an insecure default secret.
    throw new Error(`${name} must be set`);
  }
  return value;
}
