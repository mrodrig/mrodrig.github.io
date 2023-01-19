import config from '@/config';

export default class Logging {
    static async debug (...args: unknown[]) {
        if (!config.isProduction) {
            console.log(...args);
        }
    }

    static logAlways (...args: unknown[]) {
        console.log(...args);
    }

    static error (...args: unknown[]) {
        console.error(...args);
    }
}
