import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import entriesReducer from '../reducers/entriesReducer';
import filtersReducer from '../reducers/filtersReducer';
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux devtools functionalities

const configureStore = () => {

    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}

export default configureStore;
