import React from 'react';
import { shallow } from 'enzyme';

import { DashboardTable } from '../../components/DashboardTable';
import entries from '../fixtures/entries';
import { filters, altFilters } from '../fixtures/filters';

let sortByQuantity, sortByDate, wrapper, history;
beforeEach(()=>{
    sortByQuantity = jest.fn();
    sortByDate = jest.fn();
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<DashboardTable 
                        entries={entries} 
                        filters={filters}
                        sortByQuantity={sortByQuantity}
                        sortByDate={sortByDate}
                        history={history}
                        />);
});
test('should render DashboardTable correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should handle sortByQuantity', ()=>{
    wrapper.find('th').at(1).simulate('click');
    expect(sortByQuantity).toHaveBeenCalled();
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle sortByDate', ()=>{
    wrapper.find('th').at(2).simulate('click');
    expect(sortByDate).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('should redirect to AddEntry when clicked', ()=>{
    wrapper.find('.btn-add').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/dashboard/add');
});