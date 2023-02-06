import config from '@/config';
import Rollbar from '@/services/rollbar';

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

        if (args.length && typeof args[0] === 'string') Rollbar.error(args[0], { ...args.slice(1) });
        else Rollbar.error('An error occurred', { ...args });
    }
}
