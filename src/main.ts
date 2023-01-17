import { createApp } from 'vue';
import Rollbar from 'rollbar';
import config from '@/config';
import Firebase from '@/services/firebase';
import App from './App.vue';
import router from './router';

Firebase.signInAnonymously();

const app = createApp(App);

/**
 * Set the Rollbar instance in the Vue prototype before creating the first Vue instance.
 * This ensures it is available in the same way for every instance in your app.
 */
const rollbar = new Rollbar({
    accessToken: '6ed9137f753d4b539bfb5845a1e6d84d',
    captureUncaught: true,
    captureUnhandledRejections: true,
    enabled: config.isProduction,
    environment: config.environment,
    payload: {
        source_map_enabled: true,
    },
});

app.provide('$rollbar', rollbar);

app.config.errorHandler = (error: unknown, vm, info) => {
    if (error instanceof Error) {
        rollbar.error(error, { error, info });
    } else {
        rollbar.error('An unknown error occurred.', { error, info });
    }
    throw error;
};

app.use(router).mount('#app');
