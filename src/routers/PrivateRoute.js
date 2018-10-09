import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';


export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    if(isAuthenticated){
        return (
            <React.Fragment>
                <Header />
                <Route {...rest} component={(props)=>(
                                <Component {...props} />
                            )} 
                />
            </React.Fragment>
        )
    }else {
        return <Redirect to="/" />
    }
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);