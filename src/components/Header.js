import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
            
    <header className="header">
        <div className="logo-box">
            <img src="/assets/img/logo-lg.png" alt="Logo" className="logo"/>
        </div>
        <nav className="header__navigation">
            <ul> 
                <li><NavLink to={'/'} onClick={startLogout}>Log out</NavLink></li>
            </ul>
        </nav>
    </header>
);
 


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);