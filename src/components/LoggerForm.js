import React, { Component } from 'react';
import { Logger } from '@firebase/logger';


class LoggerForm extends Component {
    handleOnSubmit(e){
        e.preventDefault();
  
        const entry = {
          compound : e.target.elements.compound.value,
          quantity: e.target.elements.quantity.value,
          date: e.target.elements.date.value,
        }
        console.log(entry);
    }

    render(){
        return (
            <div>
                <h1 className="page-title">Cycle Logger</h1>
                <div className="form-container">
                    <form onSubmit={this.handleOnSubmit} className="form-style-column">
                        <input type="text" className="form-input" name="compound" id="compound" />
                        <input type="number" className="form-input" name="quantity" id="quantity" />
                        <input type="text" className="form-input" name="date" id="date" />
                        <button className="btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoggerForm;