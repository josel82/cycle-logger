import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startAddEntry } from '../actions/entries'
import EntryForm from './EntryForm';

export class AddEntry extends Component {

    onSubmit = (entry) =>{                
        this.props.onSubmit(entry);
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <EntryForm onFormSubmit={this.onSubmit}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (entry) => dispatch(startAddEntry(entry))
});

export default connect(undefined, mapDispatchToProps)(AddEntry);