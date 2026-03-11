export function requiredEnv(name: 'JWT_ACCESS_SECRET' | 'JWT_REFRESH_SECRET') {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} must be set`);
  }
  return value;
}
