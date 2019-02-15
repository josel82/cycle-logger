import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Entry from './Entry';
import getVisibleEntries from '../selectors/entries';
import { sortByQuantity, sortByDate } from '../actions/filters';



export class DashboardTable extends Component {

    handleSortByQuantity = () => {
        this.props.sortByQuantity();
    }    

    handleSortByDate = () => {
        this.props.sortByDate();
    }

    renderEntries = () => {
        if(this.props.entries.length > 0) {
            return (
                this.props.entries.map((entry, i) => (
                    <Entry 
                        id = {entry.id}
                        compound={entry.compound} 
                        quantity={entry.quantity} 
                        timestamp={entry.timestamp} key={i} 
                        />
                ))
            )
        }else{
            return <tr><td colSpan="3" className="table__cell--spread">No Items</td></tr>
        }
    }

    render(){
        return (
            <React.Fragment>
                <table className="table">
                    <colgroup>
                        <col style={{width:'50%'}}/>
                        <col style={{width:'20%'}}/>
                        <col style={{width:'30%'}}/>
                    </colgroup>  
                    <tbody>
                        <tr>
                            <th>Compound</th>
                            <th 
                                onClick={this.handleSortByQuantity}>
                                Qty {this.props.filters.sortBy === 'quantity' && <FontAwesomeIcon icon={faAngleDown}/>}
                            </th>
                            <th 
                                onClick={this.handleSortByDate}>
                                Date {this.props.filters.sortBy === 'date' && <FontAwesomeIcon icon={faAngleDown}/>}    
                            </th>
                        </tr>
                            {
                                this.renderEntries() 
                            }
                    </tbody>
                </table>
                <div className="btn-add btn-floating" onClick={()=>{this.props.history.push('/dashboard/add')}}>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const visibleEntries = getVisibleEntries(state.entries, state.filters);
    return {
      entries: visibleEntries,
      filters: state.filters
    }
} 

const mapDispatchToProps = (dispatch) =>( {
    sortByQuantity: () => dispatch(sortByQuantity()),
    sortByDate: () => dispatch(sortByDate())
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardTable);