import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import { auth } from '../firebase/firebase';

class SignupPage extends Component {
   
    handleSignUp(email, password){

      auth.createUserWithEmailAndPassword(email, password)
            .then((credentials)=>{
                localStorage.setItem('uid', credentials.user.uid);
            }).catch((error)=>{
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    render() {
      return (
        <div className="Signup">
         <div className="container">
          <h1>Sign Up</h1>
          <AuthForm action='Sign Up' handleAuthorization={this.handleSignUp}/>
          <p>or</p>
          <Link to="/signin">Sign In</Link>
         </div>
        </div>
      );
    }
  }
  
  export default SignupPage;