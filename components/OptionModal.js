import React from 'react'
import  ReactDOM  from 'react-dom'
import Modal from 'react-modal'
import './OptionModal.css'
const OptionModal = (props) =>(
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearOption}
        contentLabel="Selected Option"
        closeTimeoutMS={4000}
        className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearOption}>Okay</button>
        </Modal>
    )

export default OptionModal;