import configureMockStore from 'redux-mock-store';
import mockAxios from 'axios';
import thunk from 'redux-thunk';

import { 
    addEntry, 
    startAddEntry, 
    editEntry, 
    startEditEntry,
    removeEntry,
    startRemoveEntry, 
    setEntries,
    startSetEntries
} from '../../actions/entries';

const createMockStore = configureMockStore([thunk]);

//**************************************************************************************************/
test('should set up add entry action object', ()=> {
    const entry = {
        id: "09a013b2-9b03-417f-8840-aec271e67d52",
        compound: "some sustance",
        quantity: 25,
        timestamp: 1549368000000
    }
    const action = addEntry(entry);
    expect(action).toEqual({
        type: 'ADD_ENTRY',
        entry
    });
});

//**************************************************************************************************/
test('should add entry to database and store', (done) => {
    const uid = '34hdhsbb2222n2bss21';
    const store = createMockStore({
        auth: { uid }
    });
    const data = {
        compound: "some sustance",
        quantity: 25,
        timestamp: 1549368000000
    }

    mockAxios.post.mockImplementationOnce(() =>{
        return Promise.resolve({
                data: [{
                        id: '09a013b2-9b03-417f-8840-aec271e67d52',
                        ...data,
                        uid
                    }]
            });
    });

    store.dispatch(startAddEntry(data)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_ENTRY',
            entry:{
                id: expect.any(String),
                ...data
            }
        });
        done();
    });

});


//**************************************************************************************************/
test('it should set up edit entry action object', () => {
    const id = "09a013b2-9b03-417f-8840-aec271e67d52";
    const updates = {
        compound: "another sustance",
        quantity: 60,
        timestamp: 1549368000000
    }
    const action = editEntry(id, updates);
    expect(action).toEqual({
        type: 'EDIT_ENTRY',
        id,
        updates
    });
});

//**************************************************************************************************/
test('it should edit entry in the database and store', (done)=>{
    const id = "09a013b2-9b03-417f-8840-aec271e67d52";
    const uid = '34hdhsbb2222n2bss21';
    const store = createMockStore({
        auth: { uid }
    });

    const data = {
        compound: "some other sustance",
        quantity: 25,
        timestamp: 1549368000000
    }

    store.dispatch(startEditEntry(id, data)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_ENTRY',
            id,
            updates:{
                ...data
            }
        });
        done();
    });

});

//**************************************************************************************************/
test('it should set up remove entry action object', () => {
    const id = "09a013b2-9b03-417f-8840-aec271e67d52";
    const action = removeEntry(id);
    expect(action).toEqual({
        type: 'REMOVE_ENTRY',
        id
    });
});

//**************************************************************************************************/
test('it should remove entry from database and store', (done)=>{
    const id = "09a013b2-9b03-417f-8840-aec271e67d52";
    const uid = '34hdhsbb2222n2bss21';
    const store = createMockStore({
        auth: { uid }
    });

    store.dispatch(startRemoveEntry(id)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_ENTRY',
            id
        });
        done();
    });
})

//**************************************************************************************************/
test('it should set up set entries action object', ()=>{
    const entries = [
        {
            id: "09a013b2-9b03-417f-8840-aec271e67d52",
            compound: "some sustance",
            quantity: 25,
            timestamp: 1549368000000
        },
        {
            id: "09a013b2-9b03-528a-9867-sfd354e82n65",
            compound: "another sustance",
            quantity: 60,
            timestamp: 1549368930000
        }
    ]
    const action = setEntries(entries);
    expect(action).toEqual({
        type: 'SET_ENTRIES',
        entries
    });
});

//**************************************************************************************************/
test('it should fecth entries from the database and add them to the store', (done) => {
    const uid = '34hdhsbb2222n2bss21';
    const entries = [
        {
            id: "09a013b2-9b03-417f-8840-aec271e67d52",
            compound: "some sustance",
            quantity: 25,
            timestamp: 1549368000000
        },
        {
            id: "09a013b2-9b03-528a-9867-sfd354e82n65",
            compound: "another sustance",
            quantity: 60,
            timestamp: 1549368930000
        }
    ]
    const store = createMockStore({
        auth: { uid }
    });

    mockAxios.get.mockImplementationOnce(()=>{
        return Promise.resolve({data: entries});
    });

    store.dispatch(startSetEntries()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_ENTRIES',
            entries
        });
        done();
    });
});