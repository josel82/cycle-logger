import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

import './sass/App.scss';
import './index.css';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import { addEntry } from './actions/entries';


const store = configureStore();


store.dispatch(addEntry({compound: 'deka', quantity: 2000, timestamp: -2344222000}));
store.dispatch(addEntry({compound: 'testosterore', quantity: 250, timestamp: 55633334000}));



firebase.auth().onAuthStateChanged((user)=>{

  if(user){
    console.log('Logged in');
  }else{
    console.log('Logged out');
  }
});

const jsx = <Provider store={store}>
                <AppRouter />
            </Provider>;

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
