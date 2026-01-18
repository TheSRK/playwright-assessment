// Environment Configuration Validator

class Config {
    private getEnv(key: string): string {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Missing required environment variable: ${key}. Please check your .env file.`);
        }
        return value;
    }

    get baseUrl(): string {
        return this.getEnv('BASE_URL');
    }

    get username(): string {
        return this.getEnv('USERNAME');
    }

    get password(): string {
        return this.getEnv('PASSWORD');
    }

    get demoblazeUrl(): string {
        return this.getEnv('DEMOBLAZE_URL');
    }
}

export const config = new Config();
