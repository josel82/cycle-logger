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

//SELECT_ENTRY

export const selectEntry = (id) => ({
    type: 'SELECT_ENTRY',
    id
});

export const clearSelectedEntry = () => ({
    type: 'CLEAR_SELECTED'
});