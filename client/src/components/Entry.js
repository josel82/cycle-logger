import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import numeral from 'numeral';
import '../formats/mg';


export class Entry extends Component {
    constructor(props){
      super(props);
      this.date = moment(this.props.timestamp).format('Do MMM, YYYY');
      this.formatedQty = numeral(this.props.quantity).format('0[.]00 mg');
    }
    
    redirectToEditEntryPage = () => {
      this.props.history.push(`/dashboard/edit/${this.props.id}`);
    }
    render(){
      return (
        <tr onClick={this.redirectToEditEntryPage}>
              <td><p>{this.props.compound}</p></td>
              <td><p>{this.formatedQty}</p></td>
              <td>
                <p>{this.date}</p>
              </td>
            </tr>
          )
        } 
  };

  const EntryWithRouter = withRouter(Entry)

  export default connect()(EntryWithRouter);