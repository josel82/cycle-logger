import React from 'react';
import { connect } from 'react-redux';

import { removeEntry } from '../actions/entries';


const Entry = ({dispatch, id, compound, quantity, timestamp}) => {
    const date = new Date(timestamp).toLocaleDateString();
    return (
      <tr>
        <td>{compound}</td>
        <td>{quantity}</td>
        <td>
          {date}
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