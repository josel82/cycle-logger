import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class EntryForm extends Component {
    constructor(props){
        super(props);
        this.state = this.props.entry ? this.props.entry : {compound:'', quantity: '', timestamp:moment(), calendarFocused:false};    
        this.onCompoundChange = this.onCompoundChange.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onNavigateBack = this.onNavigateBack.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    onCompoundChange(e){
        const compound = e.target.value;
        this.setState(()=>({compound}));
    }
    onQuantityChange(e){
        const quantity = e.target.value;
        if(quantity.match(/^\d*$/)){
            this.setState(()=>({quantity}));
        }
    }
    onDateChange(timestamp){
        this.setState(()=>({timestamp}));
    }
    onFocusChange({focused}){
        this.setState(()=>({calendarFocused:focused}))
    }
    onNavigateBack(e){
        e.preventDefault();
        this.props.history.push('/dashboard');
    }
    handleOnSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state);
    }
    render(){
        return (
            <form  className="form entry-form" onSubmit={this.handleOnSubmit}>
                <input 
                    type="text" 
                    className="form-input" 
                    name="compound"
                    value={this.state.compound} 
                    onChange={this.onCompoundChange}
                    placeholder="Compound..."
                    autoFocus
                    />
                <input 
                    type="text" 
                    className="form-input" 
                    name="quantity"
                    value={this.state.quantity} 
                    onChange={this.onQuantityChange}
                    placeholder="Quantity..."
                    />
                <SingleDatePicker 
                    date={this.state.timestamp}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange ={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    />
                <div className="btn-inline-group">
                    <button className="btn btn-primary btn-md">Submit</button>
                    <button className="btn btn-default btn-md" onClick={this.onNavigateBack}>Back</button>
                </div>
            </form>
        );
    }
}


export default withRouter(EntryForm);