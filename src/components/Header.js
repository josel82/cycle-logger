import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
            
    <header className="header">
        <h2 className="header__logo">Cycle-Logger</h2>
        <nav className="header__navigation">
            <ul> 
                <li><NavLink to={'/signup'} >Sign up</NavLink></li> 
                <li><NavLink to={'/'} >Log in</NavLink></li> 
                <li><NavLink to={'/'} onClick={startLogout}>Log out</NavLink></li>
            </ul>
        </nav>
    </header>
);
 


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);