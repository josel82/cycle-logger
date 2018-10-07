import database from '../firebase/firebase';

//ADD_ENTRY

export const addEntry = (entry) => ({
    type: 'ADD_ENTRY',
    entry
});

export const startAddEntry = (entryData = {}) => {
    
    return (dispatch) => {

        const {
            compound = '',  
            quantity = 0, 
            timestamp = 0
        } = entryData;
        
        const entry = { compound, quantity, timestamp };

        database.ref('Entries').push(entry).then((ref)=>{
            dispatch(addEntry({
                id:ref.key,
                ...entry
            }));
        });
    };
};

export const startEditEntry = (id, entryData ) => {
    return (dispatch) => {
        const {
            compound,  
            quantity, 
            timestamp
        } = entryData;
        
        const entry = { compound, quantity, timestamp };

        database.ref(`Entries/${id}`).update(entry, ()=>{
            dispatch(editEntry(id, entry));
        });
    }
}

export const startRemoveEntry = (id) => {
    return (dispatch) => {
        database.ref(`Entries/${id}`)
                    .remove()
                        .then(()=>{
                            dispatch(removeEntry(id));
                        })
                        .catch((e)=>{
                            console.log('Error deleting', e);
                            
        });
    }
}

//REMOVE_ENTRY

export const removeEntry = (id) => ({
    type: 'REMOVE_ENTRY',
    id
});

//EDIT_ENTRY
export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id,
    updates
});