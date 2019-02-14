import React from 'react';
import { shallow } from 'enzyme';

import { AddEntry } from '../../components/AddEntry';
import entries from '../fixtures/entries';


let onSubmitSpy, historySpy, wrapper;

beforeEach(()=>{
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddEntry onSubmit={onSubmitSpy} history={historySpy}/>);
});

test('should render AddEntry correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', ()=> {
    wrapper.find('Connect(withRouter(EntryForm))').prop('onFormSubmit')(entries[0]);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(entries[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/dashboard');
});