// Environment Configuration Validator

class Config {
    private getEnv(key: string): string {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Missing required environment variable: ${key}. Please check your .env file.`);
        }
        return value;
    }

    get demoblazeUrl(): string {
        return this.getEnv('DEMOBLAZE_URL');
    }
}

export const config = new Config();
