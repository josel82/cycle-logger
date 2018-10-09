import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

const LoginPage = (props) => 
 (
          <div className="login-container">
            <h1 className="title">Cycle-Logger</h1>
            <div className="btn btn-google btn-md" onClick={props.startLogin}>
                <span className="btn-google__logo"></span>
            </div>
          </div>
);
 

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

