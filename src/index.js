import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import moment from 'moment';
import 'react-dates/initialize';
import './sass/App.scss';
import './index.css';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import { addEntry } from './actions/entries';


const store = configureStore();


store.dispatch(addEntry({compound: 'deka', quantity: 2000, timestamp: moment('2017-07-02') }));
store.dispatch(addEntry({compound: 'testosterore', quantity: 250, timestamp: moment('2017-10-20')}));



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
