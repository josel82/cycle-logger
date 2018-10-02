import { createStore, combineReducers } from 'redux';

import entriesReducer from '../reducers/entriesReducer';
import filtersReducer from '../reducers/filtersReducer';
import selectEntryReducer from '../reducers/selectEntryReducer';


const configureStore = () => {

    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            filters: filtersReducer,
            selected: selectEntryReducer
        })
    );

    return store;
}

export default configureStore;
