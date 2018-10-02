import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editEntry } from '../actions/entries'
import EntryForm from './EntryForm';

class EditEntry extends Component {

    onEditEntry = (updates) =>{
        const id = this.props.id;                
        this.props.dispatch(editEntry(id, updates));
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <EntryForm onFormSubmit={this.onEditEntry} entry={this.props.entry}/>
        );
    }
}

const mapStateToProps = (state) =>({
    entry: state.entries.find((entry)=> (entry.id === state.selected.id)),
    id: state.selected.id
});

const EditEntryWithRouter = withRouter(EditEntry);

export default connect(mapStateToProps)(EditEntryWithRouter);