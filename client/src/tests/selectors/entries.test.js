import moment from 'moment';

import getVisibleEntries from '../../selectors/entries';

const entries = [
    {
        id: '3434343dbdbdbdb23343432nd',
        compound: 'Placebo',
        quantity: 20,
        timestamp: 0
    },
    {
        id: '3432432n34gdfdd876389398hs',
        compound: 'test',
        quantity: 15,
        timestamp: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 'cbvxdz7fa65as4s34s3s33ss5s7',
        compound: 'stuff',
        quantity: 50,
        timestamp: moment().add(4, 'days').valueOf()
    }
]

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