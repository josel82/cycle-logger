import {firebase, EmailAuthProvider } from '../firebase/firebase';

export const startLogin = () =>{
    return () => {
        return firebase.auth().signInWithPopup(EmailAuthProvider);
    }
}