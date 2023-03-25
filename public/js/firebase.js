let firebaseConfig = {
    apiKey: "AIzaSyBDOGBWwYzVy1ZuLmSKoWB0NKhyXkH_K3E",
    authDomain: "blogging-website-51475.firebaseapp.com",
    projectId: "blogging-website-51475",
    storageBucket: "blogging-website-51475.appspot.com",
    messagingSenderId: "952037181560",
    appId: "1:952037181560:web:c148824021588ca6ea058d"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();