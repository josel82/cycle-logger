import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startEditEntry } from '../actions/entries'
import EntryForm from './EntryForm';

class EditEntry extends Component {

    onEditEntry = (updates) =>{
        const id = this.props.id;                
        this.props.startEditEntry(id, updates);
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

const mapDispatchToProps = (dispatch) => ({
        startEditEntry: (id, entry) => dispatch(startEditEntry(id,entry))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);