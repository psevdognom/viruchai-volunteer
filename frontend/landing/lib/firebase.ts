import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDJkD2W4GiU09ogFi7qZ8c_lbp6QlZY81k",
    authDomain: "viruchai-volunteer.firebaseapp.com",
    databaseURL: "https://viruchai-volunteer-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "viruchai-volunteer",
    storageBucket: "viruchai-volunteer.appspot.com",
    messagingSenderId: "151614782220",
    appId: "1:151614782220:web:1bfda710640b53efbda729",
    measurementId: "G-2PW0TR86QY"
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