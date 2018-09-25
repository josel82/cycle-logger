import React from 'react';
import Modal from 'react-modal';


const EntryModal = (props) => (
    <Modal
        isOpen={!!props.showModal}
        contentLabel='Add Entry'
    >
        <h3>Add Entry</h3>
        <form  className="form-style-column">
            <input type="text" className="form-input" name="compound" id="compound" />
            <input type="number" className="form-input" name="quantity" id="quantity" />
            <input type="text" className="form-input" name="date" id="date" />
            <button className="btn-primary">Submit</button>
        </form>
    </Modal>
);

export default EntryModal;