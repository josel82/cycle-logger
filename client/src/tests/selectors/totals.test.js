import getQuantityTotal from '../../selectors/totals';
import {entries} from '../fixtures/entries';
import {filters, customFilter_1, customFilter_2} from '../fixtures/filters';

test('should return the total quantity of all compounds', ()=>{
    const total = getQuantityTotal(entries, filters);
    expect(total).toBe(102);
});

test('should return 0 if entries array is empty', ()=>{
    const total = getQuantityTotal([], filters);
    expect(total).toBe(0);
});

test('should return total quantity of a specific compound', ()=> {
    filters.text = 'Aminoacids';
    const totalTest = getQuantityTotal(entries, filters);
    expect(totalTest).toBe(100);

    filters.text = 'Vitamin C';
    const totalAnast = getQuantityTotal(entries, filters);
    expect(totalAnast).toBe(2);
});

test('should calculate total by startDate', ()=>{
    const totalTest = getQuantityTotal(entries, customFilter_1);
    expect(totalTest).toBe(50);
});

test('should calculate total by endDate', ()=>{
    const totalTest = getQuantityTotal(entries, customFilter_2);
    expect(totalTest).toBe(25);
});