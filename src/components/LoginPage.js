import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { connect } from 'react-redux';
// import { startLogin } from '../actions/auth';

class LoginPage extends Component {

    // handleAuthorization(email, password){
        
    //     auth.signInWithEmailAndPassword(email, password).then((credentials)=>{
    //         localStorage.setItem('uid', credentials.user.uid);
    //         console.log(credentials.user);
            
    //     }).catch((error)=>{
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         if (errorCode === 'auth/wrong-password') {
    //             alert('Wrong password.');
    //         } else {
    //             alert(errorMessage);
    //         }
    //         console.log(error);
    //     });
        
    // }
    render(){
        return (
            <React.Fragment>
                <AuthForm action='Sign In' handleAuthorization={()=>{return;}}/>
                <button onClick={()=>{return;}} className="btn btn-primary btn-md google-login">Login</button>
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// });

export default connect(undefined)(LoginPage);

