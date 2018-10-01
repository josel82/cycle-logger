import { createStore, combineReducers } from 'redux';

import entriesReducer from '../reducers/entriesReducer';
import filtersReducer from '../reducers/filtersReducer';


const configureStore = () => {

    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            filters: filtersReducer,
        })
    );

    return store;
}

export default configureStore;