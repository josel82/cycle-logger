import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import EntryModal from '../components/EntryModal';
import DashboardTable from './DashboardTable';
import { setTextFilter } from '../actions/filters';


class DashboardPage extends Component {
    constructor(props){
      super(props);
      this.handleShowEntryModal = this.handleShowEntryModal.bind(this);
      this.handleCloseEntryModal = this.handleCloseEntryModal.bind(this);
      this.handleOnSearchBy = this.handleOnSearchBy.bind(this);
      this.state = {
        showEntryModal: undefined
      }
    }
    
    // handleOnLogOut(){
    //   auth.signOut().catch((error)=>{
    //     console.log(error);
    //   });
    // }
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
    render() {
      return (
        <div className="dashboard-page">
          <aside className="sidebar">
            <ul className="sidebar__navigation">
              <li className="sidebar__navigation__item"><a onClick={this.handleShowEntryModal}>add new entry</a></li>
              <li className="sidebar__navigation__item">
                <div className="form-group">
                  <div className="form-group__icon"> 
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <input className="form-group__control" type="text" name="filter-by-name" ref="filterByNameInput" placeholder={"Filter by name..."} onChange={this.handleOnSearchBy} />
                </div>
              </li>
            </ul>
          </aside>
         <div className="page-content">
            <DashboardTable />
         </div>
         <EntryModal 
            showModal={this.state.showEntryModal} 
            closeModal={this.handleCloseEntryModal}
          />
        </div>
      );
    }
  }
  
  export default connect()(DashboardPage);


