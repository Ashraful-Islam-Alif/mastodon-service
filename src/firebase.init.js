// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsGZCG3Bu5VW2oA4oJYQanY_Zb5tykYF0",
    authDomain: "mastodon-1c547.firebaseapp.com",
    projectId: "mastodon-1c547",
    storageBucket: "mastodon-1c547.appspot.com",
    messagingSenderId: "275295131770",
    appId: "1:275295131770:web:310999efa50d2d002643c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth