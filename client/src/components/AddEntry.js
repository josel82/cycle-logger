import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startAddEntry } from '../actions/entries'
import EntryForm from './EntryForm';

class AddEntry extends Component {

    onAddEntry = (entry) =>{                
        this.props.startAddEntry(entry);
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <EntryForm onFormSubmit={this.onAddEntry}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddEntry: (entry) => dispatch(startAddEntry(entry))
});

export default connect(undefined, mapDispatchToProps)(AddEntry);