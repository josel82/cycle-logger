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

export { firebase, database as default };


// //child_removed
// database.ref().on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref().on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref().on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('Entries')
//             .on('value', (snapshot)=>{
//                 const entries = [];

//                 snapshot.forEach((childSnapshot)=>{
//                     entries.push({
//                         id: childSnapshot.key,
//                         ...childSnapshot.val()
//                 });
//                 console.log(entries);
//             });
// });

// // const date = moment('2018-09-02').format();
// // database.ref('Entries').push({compound: 'Testoterone', quantity: 500, timestamp: date  }).then(()=>{}).catch((e)=>{
// //     console.log(e);
    
// // })

// // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// // const auth = firebase.auth();

// // auth.onAuthStateChanged(function(user) {
// //     if (user) {
// //       alert('User is signed in');
// //       console.log(user);
// //     }else{
// //         console.log('User either logged out or not authorized');
// //     }
// // });


