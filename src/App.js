import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import './App.css';
import './firebase/firebase';

class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
