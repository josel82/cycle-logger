import React, { Component } from 'react';

class AuthForm extends Component {

    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
    
        this.props.handleAuthorization(email, password);
    }

    render(){
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" className="input-form" name="email" id="email" />
                <input type="password" className="input-form" name="password" id="password" />
                <button>{this.props.action}</button>
            </form>
        );
    }
}

export default AuthForm;