
import dotenv from 'dotenv'
dotenv.config()

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({
    credential: applicationDefault(),
    databaseURL: process.env.GOOGLE_APPLICATION_CREDENTIALS// ver aca si no anda//
});

const dbFirebase = getFirestore()

export {
    dbFirebase,
};
