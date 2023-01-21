import Rollbar from 'rollbar';
import config from '@/config';

/**
 * Set the Rollbar instance in the Vue prototype before creating the first Vue instance.
 * This ensures it is available in the same way for every instance in your app.
 */
export default new Rollbar({
    accessToken: '6ed9137f753d4b539bfb5845a1e6d84d',
    captureUncaught: true,
    captureUnhandledRejections: true,
    enabled: config.isProduction,
    environment: config.environment,
    payload: {
        source_map_enabled: true,
    },
});
