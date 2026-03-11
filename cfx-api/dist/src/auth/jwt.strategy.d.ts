declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        sub: string;
        username?: string;
        role: string;
    }): Promise<{
        userId: string;
        username: string | undefined;
        role: string;
    }>;
}
export {};
