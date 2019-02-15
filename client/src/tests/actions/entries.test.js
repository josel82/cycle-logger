import configureMockStore from 'redux-mock-store';
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import moment from 'moment';

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
import entries from '../fixtures/entries';

const createMockStore = configureMockStore([thunk]);
const uid = '34hdhsbb2222n2bss21';

//**************************************************************************************************/
test('should set up add entry action object', ()=> {
   
    const action = addEntry(entries[1]);
    expect(action).toEqual({
        type: 'ADD_ENTRY',
        entry: entries[1]
    });
});




test('it should set up edit entry action object', () => {
    const id = entries[1].id;
    const updates = {
        compound: "another sustance",
        quantity: 60,
        timestamp: moment()
    }
    const action = editEntry(id, updates);
    expect(action).toEqual({
        type: 'EDIT_ENTRY',
        id,
        updates
    });
});



test('it should set up remove entry action object', () => {
    const id = entries[2].id;
    const action = removeEntry(id);
    expect(action).toEqual({
        type: 'REMOVE_ENTRY',
        id
    });
});



test('it should set up set entries action object', ()=>{
    const action = setEntries(entries);
    expect(action).toEqual({
        type: 'SET_ENTRIES',
        entries
    });
});


describe('Async test cases', ()=>{
    let store;

    beforeEach(()=>{
        store = createMockStore({
            auth: { uid }
        });
    });

    test('it should fecth entries from the database and add them to the store', (done) => {

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

    test('should add entry to database and store', (done) => {

        const data = {
            compound: "some sustance",
            quantity: 25,
            timestamp: moment()
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

    test('it should edit entry in the database and store', (done)=>{
        const id = entries[0].id;
        const data = {
            compound: "some other sustance",
            quantity: 25,
            timestamp: 0
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

    test('it should remove entry from database and store', (done)=>{
        const id = entries[2].id;
        
        store.dispatch(startRemoveEntry(id)).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_ENTRY',
                id
            });
            done();
        });
    })
});