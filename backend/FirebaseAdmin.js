const admin = require('firebase-admin');

//Firebase service account key used for credentials.
const serviceAccount = require('./FirebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//Initialize a database object in 'db'
const db = admin.firestore();

module.exports = { admin, db };
