import React, { Component } from 'react';

class AddEntry extends Component {
    render(){
        return (
            <form  className="form add-entry-form">
                <input type="text" className="form-input" name="compound" id="compound" placeholder="Compound..."/>
                <input type="number" className="form-input" name="quantity" id="quantity" placeholder="Quantity..."/>
                <input type="text" className="form-input" name="date" id="date" placeholder="Date"/>
                <button className="btn-primary">Submit</button>
            </form>
        );
    }
}

export default AddEntry;