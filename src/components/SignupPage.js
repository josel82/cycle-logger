import React, { Component } from 'react';
import AuthForm from './AuthForm';
// import { auth } from '../firebase/firebase';

class SignupPage extends Component {
   
    // handleSignUp(email, password){

    //   auth.createUserWithEmailAndPassword(email, password)
    //         .then((credentials)=>{
    //             localStorage.setItem('uid', credentials.user.uid);
    //         }).catch((error)=>{
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             if (errorCode === 'auth/weak-password') {
    //                 alert('The password is too weak.');
    //             } else {
    //                 alert(errorMessage);
    //             }
    //             console.log(error);
    //         });
    // }
    render() {
      return (
          <AuthForm action='Sign Up' handleAuthorization={this.handleSignUp}/>
      );
    }
  }
  
  export default SignupPage;

  