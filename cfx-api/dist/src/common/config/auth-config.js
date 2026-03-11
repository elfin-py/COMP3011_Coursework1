"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredEnv = requiredEnv;
function requiredEnv(name) {
    const value = process.env[name]?.trim();
    if (!value) {
        throw new Error(`${name} must be set`);
    }
    return value;
}
//# sourceMappingURL=auth-config.js.map