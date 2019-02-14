import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { EntryForm } from '../../components/EntryForm';
import entries from '../fixtures/entries';

test('should render EntryForm correctly', () => {
    const wrapper = shallow(<EntryForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render EntryForm correctly with entry data', ()=>{
    const wrapper = shallow(<EntryForm entry={entries[1]} isEdit={true}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<EntryForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set compound on input change', ()=>{
    const value = 'New value';
    const wrapper = shallow(<EntryForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('compound')).toBe(value);
});

test('should set quantity on input change', ()=>{
    const value = '10';
    const wrapper = shallow(<EntryForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('quantity')).toBe(value);
});

test('should not set quantity for invalid input', ()=>{
    const value = 'invalid';
    const wrapper = shallow(<EntryForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('quantity')).toBe('');
});

test('should set timestamp on datepicker change', ()=>{
    const timestamp = moment();
    const wrapper = shallow(<EntryForm />);
    wrapper.find('withStyles(SingleDatePicker)').simulate('change', {timestamp});
    expect(wrapper.state('timestamp')).toEqual(timestamp);
});