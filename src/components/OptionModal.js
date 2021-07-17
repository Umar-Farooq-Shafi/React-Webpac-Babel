import React from 'react'

import Modal from 'react-modal';

export default function OptionModal({selectedOption,handleCleareSelectedOption}) {
    return (
        <Modal
            isOpen={!!selectedOption}
            onRequestClose={handleCleareSelectedOption}
            contentLabel="Selected Option"
            className="modal"
        >
            <h3 className="modal__title">Selected option</h3>
            {selectedOption && <p className="modal__body">{selectedOption}</p>}
            <button  className="button" onClick={handleCleareSelectedOption}>Okay</button>
        </Modal>
    )
}
