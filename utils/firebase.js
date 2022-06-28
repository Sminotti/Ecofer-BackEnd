require('dotenv').config()

const {initializeApp,applicationDefault} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')

initializeApp({
    credential: applicationDefault(),
    // databaseURL: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

const dbFirebase = getFirestore()

module.exports = {
    dbFirebase,
};
