import React from 'react';
import { shallow } from 'enzyme';

import { EditEntry } from '../../components/EditEntry';
import entries from '../fixtures/entries';

let wrapper, onEditEntry, onRemoveEntry, history;

beforeEach(()=>{
    onEditEntry = jest.fn();
    onRemoveEntry = jest.fn();
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<EditEntry 
        onEditEntry={onEditEntry} 
        onRemoveEntry={onRemoveEntry} 
        history={history}
        entry={entries[0]}
        />);
});

test('should render EditEntry correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onEditEntry', ()=>{
    const id = entries[0].id;
    const updates = {
        compound: 'another compound'
    }
    wrapper.find('Connect(withRouter(EntryForm))').prop('onFormSubmit')(updates);
    expect(onEditEntry).toHaveBeenLastCalledWith(id, updates);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});

test('should handle onRemoveEntry', ()=>{
    const id = entries[1].id;
    wrapper.find('Connect(withRouter(EntryForm))').prop('onRemoveEntry')(id);
    expect(onRemoveEntry).toHaveBeenLastCalledWith(entries[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});