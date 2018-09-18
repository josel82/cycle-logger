import React, { Component } from 'react';
import { auth } from '../firebase/firebase';

class LoggerPage extends Component {
    // constructor(props){
    //   super(props);
    //   this.handleOnSubmit = this.handleOnSubmit.bind(this);
    // }
    handleOnSubmit(e){
      e.preventDefault();

      const entry = {
        compound : e.target.elements.compound.value,
        quantity: e.target.elements.quantity.value,
        date: e.target.elements.date.value,
      }
      console.log(entry);
    }
    handleOnLogOut(){
      auth.signOut().catch((error)=>{
        console.log(error);
      });
    }
    render() {
      return (
        <div className="Logger">
         <div className="container">
          <h1>Cycle Logger</h1>
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" className="input-form" name="compound" id="compound" />
            <input type="number" className="input-form" name="quantity" id="quantity" />
            <input type="text" className="input-form" name="date" id="date" />
            <button>Submit</button>
          </form>
          <button onClick={this.handleOnLogOut}>Log out</button>
         </div>
        </div>
      );
    }
  }
  
  export default LoggerPage;