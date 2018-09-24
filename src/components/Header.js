import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <header>
                <h2 id="logo">Cycle-Logger</h2>
                <nav id="navbar">
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