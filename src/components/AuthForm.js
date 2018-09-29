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
            <div className="form-container">
                <h1 className="form-title">{this.props.action}</h1>
                <div className="form-box">
                    <form onSubmit={this.handleOnSubmit} className="form form-auth">
                        <input type="text" className="form__input" name="email" id="email" />
                        <input type="password" className="form__input" name="password" id="password" />
                        <button className="btn btn-primary">{this.props.action}</button>
                    </form>
                </div>
            </div>  
        );
    }
}

export default AuthForm;