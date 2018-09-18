import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD87HBTv4Enf1HRM1h-5TUi_iq2ZIFPa14",
    authDomain: "cycle-logger.firebaseapp.com",
    databaseURL: "https://cycle-logger.firebaseio.com",
    projectId: "cycle-logger",
    storageBucket: "cycle-logger.appspot.com",
    messagingSenderId: "735323952145"
};


firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
    if (user) {
      alert('User is signed in');
      console.log(user);
    }else{
        console.log('User either logged out or not authorized');
    }
});

export { database, auth }
