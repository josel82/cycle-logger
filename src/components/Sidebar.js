import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { setTextFilter } from '../actions/filters';



class Sidebar extends Component {

    onEditEntry = (e) => {   
        if(!this.props.selectedItem.id) {
            e.preventDefault();
            alert('Please select an Item.');
        }
    }

    isActive = (path, match, location) => !!(match || path === location.pathname);

    render(){
        return(
            <aside className="sidebar">
                <ul className="sidebar__navigation">
                    <li className="sidebar__navigation__item">
                    <div className="form-group">
                        <input 
                            className="form-group__control" 
                            type="text" 
                            name="filter-by-name" 
                            placeholder={"Filter by name..."} 
                            onChange={(e)=>{
                                this.props.dispatch(setTextFilter(e.target.value));
                            }} 
                            />
                        <div className="form-group__icon"> 
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    </li>
                    <li className="sidebar__navigation__item">
                        <NavLink 
                            to='/dashboard/add'
                            activeClassName="active"
                            exact={true} 
                            >Add new entry</NavLink>
                    </li>
                    <li className="sidebar__navigation__item">
                        <NavLink 
                            onClick={this.onEditEntry} 
                            to='/dashboard/edit'
                            activeClassName="active"
                            exact={true}  
                            >Edit entry</NavLink>
                    </li>
                </ul>
            </aside>
        );
    };
}
const mapStateToProps = ({selected}) => ({
    selectedItem: selected 
});

export default connect(mapStateToProps)(Sidebar);