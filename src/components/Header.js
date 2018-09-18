import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <header>
                <h2>Cycle-Logger</h2>
                <nav id="navbar">
                    <ul>
                        <li><Link to={'/signin'}>Log in</Link></li>
                        <li><Link to={'/signup'}>Sign up</Link></li>
                        <li><a >Log out</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;