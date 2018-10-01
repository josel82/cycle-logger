import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { setTextFilter } from '../actions/filters';


const Sidebar = (props) => (
    <aside className="sidebar">
        <ul className="sidebar__navigation">
            <li className="sidebar__navigation__item">
                <a onClick={()=>{return;}}>add new entry</a>
            </li>
            <li className="sidebar__navigation__item">
            <div className="form-group">
                <div className="form-group__icon"> 
                <FontAwesomeIcon icon={faSearch} />
                </div>
                <input 
                    className="form-group__control" 
                    type="text" 
                    name="filter-by-name" 
                    placeholder={"Filter by name..."} 
                    onChange={(e)=>{
                        props.dispatch(setTextFilter(e.target.value));
                    }} 
                    />
            </div>
            </li>
        </ul>
    </aside>
);



export default connect()(Sidebar);