// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaWecUSu1ZyD9jMIQMjRtwtGCIY4ls6So",
    authDomain: "dragon-news-project-02.firebaseapp.com",
    projectId: "dragon-news-project-02",
    storageBucket: "dragon-news-project-02.firebasestorage.app",
    messagingSenderId: "61738716616",
    appId: "1:61738716616:web:2857336c3ce32ce8b044fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default app