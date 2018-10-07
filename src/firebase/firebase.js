import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
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


