import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getAuth, signInAnonymously, UserCredential } from 'firebase/auth';
import config from '@/config';
import { AnalyticsEvent, AnalyticsNavigationEvent } from '@/models/analyticsEvents';

const app = initializeApp(config.firebaseConfig);
const analytics = getAnalytics(app);

export default class Firebase {
    static async signInAnonymously () {
        const auth = getAuth();
        return signInAnonymously(auth)
            .then((userCredential: UserCredential) => {
                const { user } = userCredential;
                if (!config.isProduction) console.log(`Logged in with Firebase Authentication as user UID: ${user.uid}`);
            })
            .catch((error) => {
                console.error(`Firebase Authentication error occurred - ${error?.message}`, error);
            });
    }

    static logEvent (event: AnalyticsEvent, additionalParams: Record<string, unknown>|undefined|null) {
        if (!config.isProduction) console.log(`Logging event. Event: ${event}`, additionalParams);
        return logEvent(analytics, event as string, { ...additionalParams });
    }

    static logNavigation (page: string, route: string) {
        if (!config.isProduction) console.log(`Logging navigation event. Page: ${page}, Route: ${route}`);
        return logEvent(analytics, AnalyticsNavigationEvent.ScreenView as string, {
            page,
            route,
        });
    }
}
