import moment from 'moment';
import { 
    setTextFilter, 
    sortByQuantity, 
    sortByDate, 
    setStartDate, 
    setEndDate 
    } from '../../actions/filters';

test('should set up setTextFilter action object', ()=>{
    const text = 'Some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should set up setTextFilter action object with default data', ()=>{
    const action = setTextFilter();
     expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set up sortByQuantity action object', () => {
    const action = sortByQuantity();
    expect(action).toEqual({
        type: 'SORT_BY_QTY'
    });
});

test('should set up sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should set up setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should set up setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
})