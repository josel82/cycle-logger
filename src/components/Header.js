import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <header className="header">
                <h2 className="header__logo">Cycle-Logger</h2>
                <nav className="header__navigation">
                    <ul>
                        <li><NavLink to={'/signin'} activeClassName="is-active">Log in</NavLink></li>
                        <li><NavLink to={'/signup'} activeClassName="is-active">Sign up</NavLink></li>
                        <li><a >Log out</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;