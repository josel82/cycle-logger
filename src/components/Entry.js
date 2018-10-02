import React from 'react';
import { connect } from 'react-redux';

import { removeEntry } from '../actions/entries';
import { selectEntry } from '../actions/entries';


const Entry = ({dispatch, id, compound, quantity, timestamp}) => {
    const date = new Date(timestamp).toLocaleDateString();
    return (
      <tr onClick={()=>{
        dispatch(selectEntry(id));
      }}>
        <td><p>{compound}</p></td>
        <td><p>{quantity}</p></td>
        <td>
          <p>{date}</p>
          <button 
            className="btn btn-table"
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