import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { setTextFilter } from '../actions/filters';


class Sidebar extends Component {
    
    constructor(props){
        super(props);
        this.handleShowEntryModal = this.handleShowEntryModal.bind(this);
        this.handleCloseEntryModal = this.handleCloseEntryModal.bind(this);
        this.handleOnSearchBy = this.handleOnSearchBy.bind(this);
        this.state = {
          showEntryModal: undefined
        }
    }

    handleOnSearchBy(e){
    
        switch(e.target.name){
          case 'filter-by-name':
            this.props.dispatch(setTextFilter(this.refs.filterByNameInput.value));    
            break;
          default:
          this.props.dispatch(setTextFilter(''));
            
        }
    }
    
    handleShowEntryModal(){
        this.setState({showEntryModal: true});
    }
    handleCloseEntryModal(){
        this.setState({showEntryModal: false});
    }
    render(){
        return (
            <aside className="sidebar">
                <ul className="sidebar__navigation">
                    <li className="sidebar__navigation__item"><a onClick={this.handleShowEntryModal}>add new entry</a></li>
                    <li className="sidebar__navigation__item">
                    <div className="form-group">
                        <div className="form-group__icon"> 
                        <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input 
                            className="form-group__control" 
                            type="text" 
                            name="filter-by-name" 
                            ref="filterByNameInput" 
                            placeholder={"Filter by name..."} 
                            onChange={this.handleOnSearchBy} 
                            />
                    </div>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default connect()(Sidebar);