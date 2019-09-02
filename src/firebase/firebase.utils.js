import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCme4f7QZDO8o_Oq2q1forRNv-dIZ8MuFM",
    authDomain: "crwn-db-f26bf.firebaseapp.com",
    databaseURL: "https://crwn-db-f26bf.firebaseio.com",
    projectId: "crwn-db-f26bf",
    storageBucket: "",
    messagingSenderId: "882260271517",
    appId: "1:882260271517:web:93a8bcb3a55d057c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

