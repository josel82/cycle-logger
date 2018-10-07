import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import database, {firebase} from './firebase/firebase';
import 'react-dates/initialize';
import './sass/App.scss';
import './index.css';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'


const store = configureStore();

// firebase.auth().onAuthStateChanged((user)=>{

//   if(user){
//     console.log('Logged in');
//   }else{
//     console.log('Logged out');
//   }
// });

const jsx = <Provider store={store}>
                <AppRouter />
            </Provider>;

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
