import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addEntry } from '../actions/entries'

class AddEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            compound: '',
            quantity: '',
            timestamp: ''
        }
        this.onCompoundChange = this.onCompoundChange.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onAddEntry = this.onAddEntry.bind(this);
    }
    
    onCompoundChange(e){
        const compound = e.target.value;
        this.setState({compound});
    }
    onQuantityChange(e){
        const quantity = e.target.value;
        this.setState({quantity});
    }
    onDateChange(e){
        const timestamp = e.target.value;
        this.setState({timestamp});
    }
    onAddEntry(e){
        e.preventDefault();
        this.props.dispatch(addEntry(this.state));
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <form  className="form add-entry-form" onSubmit={this.onAddEntry}>
                <input 
                    type="text" 
                    className="form-input" 
                    name="compound"
                    value={this.state.compound} 
                    onChange={this.onCompoundChange}
                    placeholder="Compound..."
                    />
                <input 
                    type="text" 
                    className="form-input" 
                    name="quantity"
                    value={this.state.quantity} 
                    onChange={this.onQuantityChange}
                    placeholder="Quantity..."
                    />
                <input 
                    type="text" 
                    className="form-input" 
                    name="date"
                    value={this.state.timestamp}
                    onChange={this.onDateChange} 
                    placeholder="Date"
                    />
                <button className="btn-primary">Submit</button>
            </form>
        );
    }
}

const AddEntryWithRouter = withRouter(AddEntry);

export default connect()(AddEntryWithRouter);