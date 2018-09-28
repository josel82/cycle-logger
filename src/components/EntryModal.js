import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EntryModal = (props) => (
    <Modal
        isOpen={!!props.showModal}
        contentLabel='Add Entry'
    >
        <h3>Add Entry</h3>
        <button onClick={props.closeModal}>close</button>
        <form  className="form-style-column">
            <input type="text" className="form-input" name="compound" id="compound" placeholder="Compound..."/>
            <input type="number" className="form-input" name="quantity" id="quantity" placeholder="Quantity..."/>
            <input type="text" className="form-input" name="date" id="date" placeholder="date"/>
            <button className="btn-primary">Submit</button>
        </form>
    </Modal>
);

export default EntryModal;