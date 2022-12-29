// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdP4DM6Vq_0wJkf8HbMCxQAYMJH1jdsiA",
    authDomain: "tmt-sass.firebaseapp.com",
    projectId: "tmt-sass",
    storageBucket: "tmt-sass.appspot.com",
    messagingSenderId: "822877616662",
    appId: "1:822877616662:web:f15ade0fa2a069208b1337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;