import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', ()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
}); 

test('should handle onLogin', () => {
    const onLogin = jest.fn();
    const wrapper = shallow(<LoginPage onLogin={onLogin}/>);
    wrapper.find('.btn').simulate('click');
    expect(onLogin).toHaveBeenCalled();
});