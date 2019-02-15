import React, {Component} from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export class LoginPage extends Component {

    handleLogin = () => {
        this.props.onLogin();
    }
    render(){
        return (
            <div className="login-container">
              <h1 className="heading-primary">
                  <span className="heading-primary__parcial__bold">C</span>ycle
                  <br/>
                  <span className="heading-primary__parcial__bold">L</span>ogger
              </h1>
              <div className="btn btn-google btn-md" onClick={this.handleLogin}>
                  <span className="btn-google__logo"></span>
              </div>
            </div>
        );
    }
} 
 
 

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

