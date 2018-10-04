import uuid from 'uuid';

//ADD_ENTRY

export const addEntry = (
    { 
        compound ='',  
        quantity = 0, 
        timestamp = 0 
    } = {}
) => ({
    type: 'ADD_ENTRY',
    entry: {
        id: uuid(),
        compound,
        quantity,
        timestamp 
    }
})

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