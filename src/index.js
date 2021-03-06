import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import 'react-dates/initialize';
import './sass/App.scss';
import './index.css';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetEntries } from './actions/entries';
import { login, logout } from './actions/auth';
import Spinner from './components/Spinner';

// Sets up the Redux-Store
const store = configureStore(); 

const jsx = <Provider store={store}>
                <AppRouter />
            </Provider>;

//Temporary loading spinner
ReactDOM.render(<Spinner />, document.getElementById('root'));



let hasRendered = false; 

// It renders the app conditionally
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true
  }
}

// Firebase authentication event listener. 
// It fires everytime the user's authentication status changes.
firebase.auth().onAuthStateChanged((user)=>{

  if(user){
    // It dispatches login action generator in order to store the user id into the redux store
    store.dispatch(login(user.uid));
    // It dispatches startSetEntries action generator
    store.dispatch(startSetEntries()).then(()=>{
      renderApp(); // call to renderApp method
      if(history.location.pathname === '/'){ //redirects user to the dashboard after a successful login
        history.push('/dashboard');
      }
    });
  }else{// case where authentication fails
    
    store.dispatch(logout());//It dispatches logout action generator in order to clear the user id from the redux store
    renderApp(); // call to renderApp method
    history.push('/'); //redirects to Login page
  }
});