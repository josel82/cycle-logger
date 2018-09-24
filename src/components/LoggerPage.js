import React, { Component } from 'react';
import { auth } from '../firebase/firebase';
import LoggerForm from '../components/LoggerForm';

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
         <aside className="sidebar"></aside>
         <div className="content">
            <LoggerForm />
         </div>
        </div>
      );
    }
  }
  
  export default LoggerPage;