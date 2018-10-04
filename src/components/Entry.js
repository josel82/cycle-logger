import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { removeEntry } from '../actions/entries';
import { selectEntry } from '../actions/entries';

const onSelectedRow = (e)=> {
  const row = e.currentTarget;
        const table = row.parentNode;
        row.className = 'selected-row';
        table.childNodes.forEach((item)=>{
          if(item !== row){
            item.className = '';
        }
  });
}

const Entry = ({dispatch, id, compound, quantity, timestamp}) => {
    const date = moment(timestamp).format('Do MMM, YYYY')
    return (
      <tr onClick={(e)=>{
        onSelectedRow(e);
        dispatch(selectEntry(id));     
      }}>
        <td><p>{compound}</p></td>
        <td><p>{quantity}</p></td>
        <td>
          <p>{date}</p>
          <button 
            className="btn btn-table btn-default"
            onClick={()=>{    
              dispatch(removeEntry(id));
            }}
            >
            Delete
          </button>
        </td>
      </tr>
    )
  };

  export default connect()(Entry);