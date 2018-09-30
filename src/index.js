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
import { setTextFilter } from './actions/filters';



const store = configureStore();


store.dispatch(addEntry({compound: 'deka', quantity: 200, timestamp: -23000}));
store.dispatch(addEntry({compound: 'testosterore', quantity: 250, timestamp: -1000}));
setTimeout(()=>{
    store.dispatch(setTextFilter('deka'));
},3000);

// const state = store.getState();
// const visibleExpenses = getVisibleEntries(state.entries, state.filters); 

// console.log(visibleExpenses);


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
