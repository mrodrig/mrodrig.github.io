import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const app = initializeApp({
    apiKey: 'AIzaSyA5vqK2hDi6qqovJoiW3DySk39q_dUeSeQ',
    authDomain: 'mrodrig-prod.firebaseapp.com',
    projectId: 'mrodrig-prod',
    storageBucket: 'mrodrig-prod.appspot.com',
    messagingSenderId: '373432819280',
    appId: '1:373432819280:web:e8e60eb32087809d963b55',
    measurementId: 'G-ZMMLHPEPHM',
});

const analytics = getAnalytics(app);

export enum AnalyticsEvent {
    Click = 'click',
    Download = 'download',
    GenerateLead = 'generate_lead',
    Hover = 'hover',
    Login = 'login',
    NotFound = 'not_found',
    PageView = 'page_view',
    Search = 'search',
    SelectContent = 'select_content',
    Share = 'share',
}

enum AnalyticsNavigationEvent {
    ScreenView = 'screen_view',
}

export default class Firebase {
    static isInitialized () {
        return true;
    }

    static logEvent (event: AnalyticsEvent, additionalParams: Record<string, unknown>|null) {
        return logEvent(analytics, event as string, { ...additionalParams });
    }

    static logNavigation (page: string, route: string) {
        console.log('Logging navigation', page, route);
        return logEvent(analytics, AnalyticsNavigationEvent.ScreenView as string, {
            page,
            route,
        });
    }
}
