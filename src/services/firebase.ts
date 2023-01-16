import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import config from '@/config';
import { AnalyticsEvent, AnalyticsNavigationEvent } from '@/models/analyticsEvents';

const app = initializeApp(config.firebaseConfig);
const analytics = getAnalytics(app);

export default class Firebase {
    static isInitialized () {
        return true;
    }

    static logEvent (event: AnalyticsEvent, additionalParams: Record<string, unknown>|undefined|null) {
        if (!config.isProduction) console.info(`Logging event. Event: ${event}`, additionalParams);
        return logEvent(analytics, event as string, { ...additionalParams });
    }

    static logNavigation (page: string, route: string) {
        if (!config.isProduction) console.info(`Logging navigation event. Page: ${page}, Route: ${route}`);
        return logEvent(analytics, AnalyticsNavigationEvent.ScreenView as string, {
            page,
            route,
        });
    }
}
