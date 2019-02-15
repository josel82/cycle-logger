import React from 'react';
import { shallow } from 'enzyme';

import {Sidebar} from '../../components/Sidebar';


test('should render Sidebar correctly', ()=>{
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onTextFilterChange', ()=>{
    const text = 'test'
    const onTextChange = jest.fn();
    const wrapper = shallow(<Sidebar onTextFilterChange={onTextChange}/>);
    wrapper.find('input').simulate('change', {
        target:{value:text}
    });
    expect(onTextChange).toHaveBeenLastCalledWith(text);
});