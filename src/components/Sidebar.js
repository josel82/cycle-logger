import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { setTextFilter } from '../actions/filters';


const Sidebar = (props) => (
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
                        props.dispatch(setTextFilter(e.target.value));
                    }} 
                    />
                <div className="form-group__icon"> 
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            </li>
            <li className="sidebar__navigation__item">
                <NavLink to='/dashboard/add'>Add new entry</NavLink>
            </li>
            <li className="sidebar__navigation__item">
                <NavLink to='/dashboard/edit'>Edit entry</NavLink>
            </li>
        </ul>
    </aside>
);



export default connect()(Sidebar);