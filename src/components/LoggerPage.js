import React, { Component } from 'react';
import { auth } from '../firebase/firebase';
import Entry from '../components/Entry';

const list = [
  {
    compound: 'deka',
    quantity: 200,
    timestamp: 344828226
  },
  {
    compound: 'testosterone',
    quantity: 200,
    timestamp: 336455483
  }
]

class LoggerPage extends Component {
    // constructor(props){
    //   super(props);
    //   this.handleOnSubmit = this.handleOnSubmit.bind(this);
    // }
    
    handleOnLogOut(){
      auth.signOut().catch((error)=>{
        console.log(error);
      });
    }
    render() {
      return (
        <div className="logger">
          <aside className="sidebar">
            <ul>
              <li><a href="/">add new entry</a></li>
            </ul>
          </aside>
         <div className="content">
            <table id="entries">
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
        </div>
      );
    }
  }
  
  export default LoggerPage;

