import React from 'react';
import { connect } from 'react-redux';

import Entry from './Entry';
import getVisibleEntries from '../selectors/entries';


const DashboardTable = (props) => (
    <table className="output-table">
        <tbody>
            <tr>
            <th>Compound</th>
            <th>Quantity</th>
            <th>Date</th>
            </tr>
            {
            props.entries.length > 0 ? props.entries.map((entry, i) => (
                <Entry 
                compound={entry.compound} 
                quantity={entry.quantity} 
                timestamp={entry.timestamp} key={i} />
            )) : <tr><td colSpan="3">No Items</td></tr> 
            }
        </tbody>
    </table>
);

const mapStateToProps = (state) => {
    
    const visibleEntries = getVisibleEntries(state.entries, state.filters);
    return {
      entries: visibleEntries
    }
} 
export default connect(mapStateToProps)(DashboardTable);