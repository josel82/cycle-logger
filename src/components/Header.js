import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ startLogout }) => (
            
    <header className="header">
        <div className="logo-box">
            <img src="/assets/img/logo-lg-inv.png" alt="Logo" className="logo"/>
        </div>
        <nav className="header__navigation">
            <ul> 
                <li>
                    <NavLink to={'/'} onClick={startLogout}>
                        <span className="nav-text">Log out</span>
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faBars}/>
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);
 


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);