import React from 'react';
import { shallow } from 'enzyme';

import AuthForm from '../../components/AuthForm';

let wrapper;

beforeEach(()=>{
    wrapper = shallow(<AuthForm />);
});

test('should render AuthForm component correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onEmailChange', ()=>{
    const email = 'test@email.com';
    wrapper.find('input').at(0).prop('onChange')(email);
    expect(wrapper.state('email')).toBe(email);
});

test('should disable button if invalid email', ()=>{
    const invalid = 'test';
    wrapper.find('input').at(0).prop('onChange')(invalid);
    expect(wrapper.state('emailInvalid')).toBe(true);
    expect(wrapper.find('button').prop('disabled')).toBe(true);
});

test('should enable button if valid email', ()=>{
    const valid = 'test@email.com';
    wrapper.find('input').at(0).prop('onChange')(valid);
    expect(wrapper.state('emailInvalid')).toBe(false);
    expect(wrapper.find('button').prop('disabled')).toBe(false);
});

test('should handle onPasswordChange', ()=>{
    const password = 'Mypassword';
    wrapper.find('input').at(1).prop('onChange')(password);
    expect(wrapper.state('password')).toBe(password);
});

test('should disable button if invalid password', ()=>{
    const invalid = 'weak';
    wrapper.find('input').at(1).prop('onChange')(invalid);
    expect(wrapper.state('passwordInvalid')).toBe(true);
    expect(wrapper.find('button').prop('disabled')).toBe(true);
});

test('should enable button if valid password', ()=>{
    const valid = 'hdgs7262g2';
    wrapper.find('input').at(1).prop('onChange')(valid);
    expect(wrapper.state('passwordInvalid')).toBe(false);
    expect(wrapper.find('button').prop('disabled')).toBe(false);
});

describe('form submission', ()=>{
    test('should handle on submit', ()=>{
        const handleOnSubmit = jest.fn();
        const authData = {
            email: 'test@email.com',
            password: '1234abcd'
        }
        
        const wrapper = shallow(<AuthForm handleAuthorization={handleOnSubmit}/>);
        wrapper.find('input').at(0).prop('onChange')(authData.email);
        wrapper.find('input').at(1).prop('onChange')(authData.password);
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        expect(handleOnSubmit).toHaveBeenLastCalledWith(authData.email,authData.password);
    });
});