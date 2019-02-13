import moment from 'moment';

import getVisibleEntries from '../../selectors/entries';
import entries from '../fixtures/entries';

test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleEntries(entries, filters);
    expect(result).toEqual([entries[0], entries[1]]);
});

test('should filter by startDate', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(2, 'days'),
        endDate: undefined
    }
    const result = getVisibleEntries(entries, filters);
    expect(result).toEqual([entries[2], entries[0]]);
});

test('should filter by endDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = getVisibleEntries(entries, filters);
    expect(result).toEqual([entries[0], entries[1]]);
});

test('should sort by date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleEntries(entries, filters);
    expect(result).toEqual([entries[2], entries[0], entries[1]]);
});

test('should sort by quantity', ()=>{
    const filters = {
        text: '',
        sortBy: 'quantity',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleEntries(entries, filters);
    expect(result).toEqual([entries[2], entries[0], entries[1]]);
});