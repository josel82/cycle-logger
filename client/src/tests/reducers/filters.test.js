import filtersReducer from '../../reducers/filtersReducer';
import moment from 'moment';



test('should setup default filter values', ()=>{
    const action = {
        type: '@@INIT'
    }
    const state= filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set the text filter ', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('test');
});

test('should set sort by quantity', () => {
    const action = {
        type: 'SORT_BY_QTY'
    }
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('quantity');
});

test('should set sort by date', ()=> {
    const currentState = {
        text: '',
        sortBy: 'quantity', 
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    });
});

test('should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0).add(2, "days")
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(0).add(2, "days")
    });
});



