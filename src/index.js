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
import { startSetEntries } from './actions/entries';


const store = configureStore();


const jsx = <Provider store={store}>
                <AppRouter />
            </Provider>;

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));




store.dispatch(startSetEntries()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('root'));
});

registerServiceWorker();


// firebase.auth().onAuthStateChanged((user)=>{

//   if(user){
//     console.log('Logged in');
//   }else{
//     console.log('Logged out');
//   }
// });