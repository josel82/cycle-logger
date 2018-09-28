import React, { Component } from 'react';
import { auth } from '../firebase/firebase';
import Entry from '../components/Entry';
import configureStore from '../store/configureStore'
import getVisibleEntries from '../selectors/entries';
import {addEntry} from '../actions/entries';
import EntryModal from '../components/EntryModal';

let list = []
const store = configureStore();

store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleEntries(state.expenses, state.filters); 
  list = visibleExpenses;
  console.log(store.getState());
});


class LoggerPage extends Component {
    constructor(props){
      super(props);
      this.handleShowEntryModal = this.handleShowEntryModal.bind(this);
      this.handleCloseEntryModal = this.handleCloseEntryModal.bind(this);
      this.state = {
        showEntryModal: undefined
      }
    }
    
    handleOnLogOut(){
      auth.signOut().catch((error)=>{
        console.log(error);
      });
    }

    handleShowEntryModal(){
      this.setState({showEntryModal: true});
    }
    handleCloseEntryModal(){
      this.setState({showEntryModal: false});
    }
    render() {
      return (
        <div className="logger-page">
          <aside className="sidebar">
            <ul className="sidebar__navigation">
              <li className="sidebar__navigation__item"><a onClick={this.handleShowEntryModal}>add new entry</a></li>
              <li className="sidebar__navigation__item"><a href="/">filter by</a></li>
            </ul>
          </aside>
         <div className="page-content">
            <table className="output-table">
              <tbody>
                <tr>
                  <th>Compound</th>
                  <th>Quantity</th>
                  <th>Date</th>
                </tr>
                {
                  list.length > 0 ? list.map((entry, i) => (
                    <Entry 
                      compound={entry.compound} 
                      quantity={entry.quantity} 
                      timestamp={entry.timestamp} key={i} />
                  )) : <tr><td colSpan="3">No Items</td></tr> 
                }
              </tbody>
            </table>
         </div>
         <EntryModal 
            showModal={this.state.showEntryModal} 
            closeModal={this.handleCloseEntryModal}
          />
        </div>
      );
    }
  }
  
  export default LoggerPage;

  store.dispatch(addEntry({compound: 'deka', quantity: 200, timestamp: -23000}));
  store.dispatch(addEntry({compound: 'testosterore', quantity: 250, timestamp: -1000}));
