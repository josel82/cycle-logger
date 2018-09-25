import React, { Component } from 'react';
import { auth } from '../firebase/firebase';
import LoggerForm from '../components/LoggerForm';


const Entry = (props) => (
  <tr>
    <td>{props.compound}</td>
    <td>{props.quantity}</td>
    <td>{props.date}</td>
  </tr>
);

const list = [
  {
    compound: 'deka',
    quantity: 200,
    date: 344828226
  },
  {
    compound: 'testosterone',
    quantity: 200,
    date: 336455483
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
              <li><a href="#">add new entry</a></li>
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
                {list.map((entry, i) => (
                  <Entry compound={entry.compound} quantity={entry.quantity} date={entry.date} key={i}/>
                ))}
              </tbody>
            </table>
         </div>
        </div>
      );
    }
  }
  
  export default LoggerPage;

