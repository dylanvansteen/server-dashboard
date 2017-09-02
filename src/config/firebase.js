import Firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyCXHnvf5eyd2oZpGF8APhtLcLKW2Ttr1T8",
    authDomain: "server-dashboard-ad0e52.firebaseapp.com",
    databaseURL: "https://server-dashboard-ad0e52.firebaseio.com",
    projectId: "server-dashboard-ad0e52",
    storageBucket: "",
    messagingSenderId: "637349006685"
}

export const firebase = Firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const auth = firebase.auth();
