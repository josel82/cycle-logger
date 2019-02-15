import React from 'react';
import { shallow } from 'enzyme';

import { Entry } from '../../components/Entry';
import entries from '../fixtures/entries';

let history, wrapper;
beforeEach(()=>{
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<Entry
                        id={entries[0].id} 
                        compound={entries[0].compound}
                        quantity={entries[0].quantity}
                        timestamp={entries[0].timestamp}
                        history={history}
                        />);
});

test('should render Entry correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should redirect to EditEntry upon click with correct id', ()=>{
    wrapper.find('tr').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith(`/dashboard/edit/${entries[0].id}`);
});