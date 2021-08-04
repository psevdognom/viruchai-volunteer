import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "",
    authDomain: "viruchai-volunteer.firebaseapp.com",
    databaseURL: "https://viruchai-volunteer-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "viruchai-volunteer",
    storageBucket: "viruchai-volunteer.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: any) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    return (await query.get()).docs[0];
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function candidateToJSON(doc: any) {
    const data = doc.data();
    return {
        ...data,
    };
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
