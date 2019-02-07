import { 
    addEntry, 
    startAddEntry, 
    removeEntry, 
    startRemoveEntry,
    editEntry,
    startEditEntry,
    setEntries,
    startSetEntries
} from '../../actions/entries';

test('should set up add entry action object', ()=>{
    const entry = {
        compound: 'Test',
        quantity: 20,
        timestamp: 343433344
    }
    const action = addEntry(entry);
    expect(action).toEqual({
        type: 'ADD_ENTRY',
        entry
    });
});

test('should set up remove entry action object', ()=>{
    const id = '232132132kjnkqjwdqw'
    const action = removeEntry(id);
    expect(action).toEqual({
        type: 'REMOVE_ENTRY',
        id
    });
});

test('should set up edit entry action object', ()=>{
    const id = '232132132kjnkqjwdqw';
    const updates = {
        compound: 'water'
    }
    const action = editEntry(id, updates);
    expect(action).toEqual({
        type: 'EDIT_ENTRY',
        id,
        updates
    });
});

test('should set up set entry action object', ()=>{
    const entries = [{
        compound: 'test',
        quantity: 15,
        timestamp: 32413432
    },
    {
        compound: 'water',
        quantity: 20,
        timestamp: 342342342
    }]
    const action = setEntries(entries);
    expect(action).toEqual({
        type: 'SET_ENTRIES',
        entries
    });
});