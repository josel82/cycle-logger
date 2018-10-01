import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Entry from './Entry';
import getVisibleEntries from '../selectors/entries';
import { sortByQuantity, sortByDate } from '../actions/filters';



const DashboardTable = (props) => (
    <table className="table">
        <tbody>
            <tr>
                <th>Compound</th>
                <th 
                    onClick={()=>{
                        props.dispatch(sortByQuantity());    
                    }}>
                    Quantity {props.filters.sortBy === 'quantity' && <FontAwesomeIcon icon={faAngleDown}/>}
                </th>
                <th 
                    onClick={()=>{
                        props.dispatch(sortByDate());                    
                    }}>
                    Date {props.filters.sortBy === 'date' && <FontAwesomeIcon icon={faAngleDown}/>}    
                </th>
            </tr>
                {
                    props.entries.length > 0 ? props.entries.map((entry, i) => (
                        <Entry 
                            id = {entry.id}
                            compound={entry.compound} 
                            quantity={entry.quantity} 
                            timestamp={entry.timestamp} key={i} 
                            />
                    )) : <tr><td colSpan="3">No Items</td></tr> 
                }
        </tbody>
    </table>
);

const mapStateToProps = (state) => {
    
    const visibleEntries = getVisibleEntries(state.entries, state.filters);
    return {
      entries: visibleEntries,
      filters: state.filters
    }
} 
export default connect(mapStateToProps)(DashboardTable);