import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner';

test('should render spinner correctly', ()=> {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
});