import React, { Component } from 'react';

class AuthForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailInvalid: false,
            passwordInvalid: false
        }
    }
    onEmailChange = (email) => {
        this.setState({email});
        if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({emailInvalid:false});
        }else{
            this.setState({emailInvalid:true});
        }
    }
    onPasswordChange = (password) => {        
        this.setState({password});
        if(password.match(/^.{8,32}$/)){
            this.setState({passwordInvalid:false});
        }else{
            this.setState({passwordInvalid:true});
        }
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
    
        this.props.handleAuthorization(this.state.email, this.state.password);
    }

    render(){
        return (
            <div className="form-container">
                <h1 className="form-title">{this.props.action}</h1>
                <div className="form-box">
                    <form onSubmit={this.handleOnSubmit} className="form form-auth">
                        <input 
                            type="text" 
                            className="form__input" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.onEmailChange}
                             />
                        <input 
                            type="password" 
                            className="form__input" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.onPasswordChange} 
                            />
                        <button 
                            className="btn btn-primary btn-md"
                            disabled={this.state.emailInvalid || this.state.passwordInvalid}
                            >
                            {this.props.action}
                        </button>
                    </form>
                </div>
            </div>  
        );
    }
}

export default AuthForm;