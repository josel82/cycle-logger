import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

let wrapper, location, startLogout, history, routePath;
beforeEach(()=>{
    location='/dashboard';
    routePath='/dashboard';
    startLogout = jest.fn();
    history= {
        push: jest.fn()
    }
    wrapper = shallow(<Header 
                        location={location} 
                        startLogout={startLogout} 
                        history={history} 
                        path={routePath
                        }/>);

});

test('should render Header component correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should render back button if in path other than "dashboard"', ()=>{
    wrapper.setProps({
        location: '/dashboard/add'
    });
    expect(wrapper.state('showBackBtn')).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should remove the back button if current path is "dashboard"', ()=>{
    expect(wrapper.state('showBackBtn')).toBe(false);
    expect(wrapper).toMatchSnapshot();
});

test('should redirect to previous path if back button is clicked', ()=>{
    wrapper.find('.btn-back').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith(routePath);
});

test('should toggle menu when clicked', ()=>{
    wrapper.find('.menu-toggle').simulate('click');
    expect(wrapper.state('isOpened')).toBe(true);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('.menu-toggle').simulate('click');
    expect(wrapper.state('isOpened')).toBe(false);
    expect(wrapper).toMatchSnapshot();

});

test('should handle logout', ()=>{
    wrapper.find('NavLink').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

