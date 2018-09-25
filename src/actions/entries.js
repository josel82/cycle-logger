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

export const removeEntry = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id,
    updates
});