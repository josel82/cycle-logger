import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';


const Entry = ({history, dispatch, id, compound, quantity, timestamp}) => {
    const date = moment(timestamp).format('Do MMM, YYYY')
    return (
      <tr onClick={(e)=>{
        history.push(`/dashboard/edit/${id}`);
      }}>
        <td><p>{compound}</p></td>
        <td><p>{quantity}</p></td>
        <td>
          <p>{date}</p>
        </td>
      </tr>
    )
  };

  const EntryWithRouter = withRouter(Entry)

  export default connect()(EntryWithRouter);