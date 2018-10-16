import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { startLogout } from '../actions/auth';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpened: false,
            showBackBtn: false
        }

    }
    componentDidUpdate(prevProps) { 
        if (this.props.location !== prevProps.location) {
            
            this.setState({showBackBtn: this.props.location.pathname !== "/dashboard"});
        }
    }
    toggleMenu = () => {
        this.setState({isOpened:!this.state.isOpened});
    }
    navigateBack = () =>{
        this.props.history.push(this.props.path);
    }
    render(){
        return (         
            <header className="header">
                
                <CSSTransition 
                    in={this.state.showBackBtn}
                    appear={true}
                    timeout={600}
                    classNames="fade"
                    onExited={()=>{

                    }}>
                    <span 
                        className={
                            `btn-back ${this.props.location.pathname === '/dashboard' && 'fade-exit-done' }`
                        } 
                        onClick={this.navigateBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                </CSSTransition>
                
                <div className="logo-box">
                    <img src="/assets/img/logo-lg-inv.png" alt="Logo" className="logo"/>
                </div>
                <nav className={`header__navigation ${this.state.isOpened ? 'header__navigation--open':''}`}>
                    <ul> 
                        <li>
                            <NavLink to={'/'} onClick={this.props.startLogout}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="header__navigation--icon" />Log out
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={`menu-toggle ${this.state.isOpened ? 'open':''}`} 
                     onClick={this.toggleMenu}>
                    <div className="hamburger"></div>
                </div>
            </header>
        );
    }
}
 


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const HeaderWithRouter = withRouter(Header)

export default connect(undefined, mapDispatchToProps)(HeaderWithRouter);