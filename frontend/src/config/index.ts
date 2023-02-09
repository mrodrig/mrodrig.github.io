// Default configuration for Production
const envConfig = {
    environment: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    firebaseConfig: {
        apiKey: 'AIzaSyA5vqK2hDi6qqovJoiW3DySk39q_dUeSeQ',
        authDomain: 'mrodrig-prod.firebaseapp.com',
        projectId: 'mrodrig-prod',
        storageBucket: 'mrodrig-prod.appspot.com',
        messagingSenderId: '373432819280',
        appId: '1:373432819280:web:e8e60eb32087809d963b55',
        measurementId: 'G-ZMMLHPEPHM',
    },
    rollbar: {
        apiKey: '@@ROLLBAR_API_KEY@@',
    },
    filePaths: {
        resume: 'pdfs/resume.pdf',
        cv: 'pdfs/cv.pdf',
    },
};

// If in the Development environment, swap any values out that need to be repointed
if (!envConfig.isProduction) {
    envConfig.firebaseConfig = {
        apiKey: 'AIzaSyAE86KJSeHFj453XYDNY4MDKIK0UGfGfeM',
        authDomain: 'mrodrig-dev.firebaseapp.com',
        projectId: 'mrodrig-dev',
        storageBucket: 'mrodrig-dev.appspot.com',
        messagingSenderId: '149061059124',
        appId: '1:149061059124:web:0a62b4651d3983c8c34061',
        measurementId: 'G-34XY0DXM22',
    };
}

export default envConfig;
