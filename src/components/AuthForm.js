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
            <div class="form-container">
                <form onSubmit={this.handleOnSubmit} className="form-style-column">
                    <input type="text" className="form-input" name="email" id="email" />
                    <input type="password" className="form-input" name="password" id="password" />
                    <button className="btn-primary">{this.props.action}</button>
                </form>
            </div>  
        );
    }
}

export default AuthForm;