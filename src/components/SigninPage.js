import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';

class LoginPage extends Component {
    handleAuthorization(email, password){
        
        auth.signInWithEmailAndPassword(email, password).then((credentials)=>{
            localStorage.setItem('uid', credentials.user.uid);
            console.log(credentials.user);
            
        }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
        
    }
    render(){
        return (
            <div className="signin">
                    <h1 className="page-title">Sign In</h1>
                    <AuthForm action='Sign In' handleAuthorization={this.handleAuthorization}/>
                    <p>or</p>
                    <Link to="/signup">Sign Up</Link>
            </div>
        )
    }
}

export default LoginPage;