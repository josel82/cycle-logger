import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.getNavigationLink = this.getNavigationLink.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {loggedIn:false};
    }
    getNavigationLink(){
        const {pathname} = this.props.location;
                
        if(pathname === '/signin'){
            return <li><NavLink to={'/signup'} activeClassName="is-active">Sign up</NavLink></li>;
        }else if(pathname === '/signup'){
            return <li><NavLink to={'/signin'} activeClassName="is-active">Log in</NavLink></li>;
        }
        return;
    }
    onLogout(e){
        e.preventDefault();
        this.setState({loggedIn:false})
        this.props.history.push('/');
    }
    render(){
        return (
            <header className="header">
                <h2 className="header__logo">Cycle-Logger</h2>
                <nav className="header__navigation">
                    <ul> 
                        {this.getNavigationLink()}   
                        {this.state.loggedIn && <li><a onClick={this.onLogout}>Log out</a></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);