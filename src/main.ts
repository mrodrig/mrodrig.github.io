import { createApp } from 'vue';
import Rollbar from '@/services/rollbar';
import Firebase from '@/services/firebase';
import App from './App.vue';
import router from './router';

Firebase.signInAnonymously();

const app = createApp(App);

app.provide('$rollbar', Rollbar);

app.config.errorHandler = (error: unknown, vm, info) => {
    if (error instanceof Error) {
        Rollbar.error(error, { error, info });
    } else {
        Rollbar.error('An unknown error occurred.', { error, info });
    }
    throw error;
};

app.use(router).mount('#app');
