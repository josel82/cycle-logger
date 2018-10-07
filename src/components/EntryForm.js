import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class EntryForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
            compound: this.props.entry ? this.props.entry.compound : '', 
            quantity: this.props.entry ? this.props.entry.quantity.toString() : '', 
            timestamp: this.props.entry ? moment(this.props.entry.timestamp) : moment(), 
            calendarFocused:false, 
            error:''
        };    
    }

    onCompoundChange = (e) => {
        const compound = e.target.value;
        this.setState(()=>({compound}));
    }
    onQuantityChange = (e) => {
        const quantity = e.target.value;
        if(quantity.match(/^\d*$/)){
            this.setState(()=>({quantity}));
        }
    }
    onDateChange = (timestamp) => {        
        if(timestamp){
            this.setState(()=>({timestamp}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}))
    }
    onNavigateBack = (e) => {
        e.preventDefault();
        this.props.history.push('/dashboard');
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        const { compound, quantity } = this.state;
        if(!compound || !quantity ){
            this.setState({
                error: 'Please provide compound name and quantity.'
            });
            
        }else{
            this.setState({ error: '' });
            this.props.onFormSubmit({
                compound: this.state.compound,
                quantity: parseInt(this.state.quantity, 10),
                timestamp: this.state.timestamp.valueOf()
            }); 
        }          
    }
    render(){
        return (
            <React.Fragment>
                {!!this.state.error && <span className="validation-error-msg">{this.state.error}</span>}
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
                    {
                        this.props.isEdit && 
                        <button 
                            className="btn btn-default"
                            onClick={(e)=>{ 
                                e.preventDefault();
                                this.props.onRemoveEntry(this.props.entry.id);
                            }}
                            >
                            Delete
                        </button> 
                    }
                    <div className="btn-inline-group">
                        <button className="btn btn-primary btn-md">Submit</button>
                        <button className="btn btn-default btn-md" onClick={this.onNavigateBack}>Back</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default connect()(EntryForm);