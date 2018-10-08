import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import 'react-dates/initialize';
import './sass/App.scss';
import './index.css';

import AppRouter, { history } from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import { startSetEntries } from './actions/entries';

// Sets up the Redux-Store
const store = configureStore(); 

const jsx = <Provider store={store}>
                <AppRouter />
            </Provider>;

//Temporary loading spinner
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

registerServiceWorker();


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
    // It dispatches startSetEntries action generator
    store.dispatch(startSetEntries()).then(()=>{
      renderApp(); // call to renderApp method
      if(history.location.pathname === '/'){ //redirects user to the dashboard after a successful login
        history.push('/dashboard');
      }
    });
  }else{// case where authentication fails
    renderApp(); // call to renderApp method
    history.push('/'); //redirects to Login page
  }
});