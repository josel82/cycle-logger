import axios from 'axios';

//ADD_ENTRY
export const addEntry = (entry) => ({
    type: 'ADD_ENTRY',
    entry
});

export const startAddEntry = (entryData = {}) => {
    
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            compound = '',  
            quantity = 0, 
            timestamp = 0
        } = entryData;
        
        const entry = { compound, quantity, timestamp };

        return axios.post(`/api/users/${uid}/entries`, entry).then((response) => {
                    dispatch(addEntry({
                        
                        
                        id:response.data[0].id,
                        ...entry
                    }));
                }).catch(error => console.log(error));
    };
};


//REMOVE_ENTRY

export const removeEntry = (id) => ({
    type: 'REMOVE_ENTRY',
    id
});

export const startRemoveEntry = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        return axios.delete(`/api/users/${uid}/entries/${id}`)
                .then(response => dispatch(removeEntry(id)))
                .catch(error => console.log(error));
    }
}

//EDIT_ENTRY
export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id,
    updates
});

export const startEditEntry = (id, entryData ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const {
            compound,  
            quantity, 
            timestamp
        } = entryData;
        
        const entry = { compound, quantity, timestamp };

        return axios.patch(`/api/users/${uid}/entries/${id}`, entry)
                .then(response => dispatch(editEntry(id, entry)))
                .catch(error => console.log(error));
    }
}

//SET_ENTRIES

export const setEntries = (entries) => ({
    type: 'SET_ENTRIES',
    entries
});

export const startSetEntries = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const entries = [];
        
        return axios.get(`/api/users/${uid}/entries`)
                    .then(response => {
                        
                        response.data.forEach(entry => {
                            entries.push({
                                id: entry.id,
                                compound: entry.compound,
                                quantity: entry.quantity,
                                timestamp: parseInt(entry.timestamp, 10)
                            });
                        });
                        dispatch(setEntries(entries));
                    }).catch(error => console.log(error));
    }
}