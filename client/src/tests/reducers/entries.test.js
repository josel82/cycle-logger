import entriesReducer from '../../reducers/entriesReducer';
import entries from '../fixtures/entries';


test('should return default state', ()=>{
    const action = {
        type: '@@INIT'
    }
    const state = entriesReducer(undefined, action);
    expect(state).toEqual([]);
});


test('should add a new entry', ()=>{
    const currentState = entries;
    const entry = {
        id: '2h22g3g3vosj3h3vjsh3h33g',
        compound: 'test',
        quantity: 0.5,
        timestamp: 237262525242
    }
    const action = {
        type: 'ADD_ENTRY',
        entry
    }
    const state = entriesReducer(currentState, action);
    expect(state).toEqual([...entries, entry]);
});

test('should remove entry by id', ()=>{
    const currentState = entries;
    const action = {
        type: 'REMOVE_ENTRY',
        id: currentState[1].id
    }
    const state = entriesReducer(currentState, action);
    expect(state).toEqual([
        currentState[0],
        currentState[2]
    ]);
});

test('should not remove entry if not found', ()=> {
    const currentState = entries;
    const action = {
        type: 'REMOVE_ENTRY',
        id: '-1'
    }
    const state = entriesReducer(currentState, action);
    expect(state).toEqual(entries);
});

test('should edit entry by id', ()=>{
    const currentState = entries
    const action = {
        type: 'EDIT_ENTRY',
        id: currentState[1].id,
        updates: {
            compound: 'test'
        }
    }
    const state = entriesReducer(currentState, action);
    expect(state[1].compound).toBe('test');
});

test('should not edit entry if not found', ()=>{
    const currentState = entries
    const action = {
        type: 'EDIT_ENTRY',
        id: '-1',
        updates: {
            compound: 'test'
        }
    }
    const state = entriesReducer(currentState, action);
    expect(state).toEqual(entries);
});

test('should set entries state', ()=>{

    const action = {
        type: 'SET_ENTRIES',
        entries
    }
    const state = entriesReducer(undefined, action);
    expect(state).toEqual(entries);
});