import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getAuth, signInAnonymously, UserCredential } from 'firebase/auth';
import { getFirestore, collection, query, orderBy, getDocs, CollectionReference, Query } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import config from '@/config';
import Logging from '@/services/logging';
import { AnalyticsEvent, AnalyticsNavigationEvent } from '@/models/analyticsEvents';
import { FirestoreCollection } from '@/models/firestoreCollections';

const app = initializeApp(config.firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const firestore = getFirestore(app);
const storage = getStorage(app);

export default class Firebase {
    static async signInAnonymously () {
        return signInAnonymously(auth)
            .then((userCredential: UserCredential) => {
                const { user } = userCredential;
                Logging.debug(`Logged in with Firebase Authentication as user UID: ${user.uid}`);
            })
            .catch((error) => {
                Logging.error(`Firebase Authentication error occurred - ${error?.message}`, error);
            });
    }

    static async getProjects () {
        const collectionRef = collection(firestore, FirestoreCollection.Projects as string);
        const q = query(collectionRef, orderBy('startDate'), orderBy('name'));
        return getDocsFromCollection(collectionRef, q);
    }

    static async getResumeUrl () {
        const fileRef = ref(storage, config.filePaths.resume);
        return getDownloadURL(fileRef);
    }

    static async getCiriculumVitaeUrl () {
        const fileRef = ref(storage, config.filePaths.resume);
        return getDownloadURL(fileRef);
    }

    static logEvent (event: AnalyticsEvent, additionalParams: Record<string, unknown>|undefined|null) {
        Logging.debug(`Logging event. Event: ${event}`, additionalParams);
        return logEvent(analytics, event as string, { ...additionalParams });
    }

    static logNavigation (page: string, route: string) {
        Logging.debug(`Logging navigation event. Page: ${page}, Route: ${route}`);
        return logEvent(analytics, AnalyticsNavigationEvent.ScreenView as string, {
            page,
            route,
        });
    }
}

async function getDocsFromCollection (collectionRef: CollectionReference, q: Query) {
    try {
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map((doc) => doc.data());
        Logging.debug(`Successfully retrieved documents for ${collectionRef.path}`);
        return docs;
    } catch (error) {
        Logging.error(`Error retrieving documents for ${collectionRef.path}`, error);
        throw error;
    }
}
