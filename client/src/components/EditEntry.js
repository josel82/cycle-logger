import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startEditEntry, startRemoveEntry } from '../actions/entries';
import EntryForm from './EntryForm';

class EditEntry extends Component {

    onEditEntry = (updates) =>{
        const id = this.props.entry.id;                
        this.props.startEditEntry(id, updates);
        this.props.history.push('/dashboard');
    }
    onRemoveEntry = (id) => {
        this.props.startRemoveEntry(id);
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <EntryForm 
                onFormSubmit={this.onEditEntry} 
                onRemoveEntry={this.onRemoveEntry}
                entry={this.props.entry} 
                isEdit={true} 
                />
        );
    }
}

const mapStateToProps = (state, props) =>({
    entry: state.entries.find((entry)=> (entry.id === props.match.params.id)),
});

const mapDispatchToProps = (dispatch) => ({
        startEditEntry: (id, entry) => dispatch(startEditEntry(id,entry)),
        startRemoveEntry: (id) => dispatch(startRemoveEntry(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);