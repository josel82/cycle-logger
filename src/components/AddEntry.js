import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addEntry } from '../actions/entries'
import EntryForm from './EntryForm';

class AddEntry extends Component {

    onAddEntry = (entry) =>{
        this.props.dispatch(addEntry(entry));
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <EntryForm onFormSubmit={this.onAddEntry}/>
        );
    }
}

const AddEntryWithRouter = withRouter(AddEntry);

export default connect()(AddEntryWithRouter);