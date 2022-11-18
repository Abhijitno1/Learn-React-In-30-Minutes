import React, {useState} from 'react'
import Modal from './Modal';
const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 2
}
const OTHER_CONTENT_STYLES = {
    position: ' relative',
    zIndex: 1,
    padding: '10px',
    backgroundColor: 'red'
}

export default function ModalGround() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('ground wrapper div clicked')}>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Modal content
                </Modal>
            </div>
            <p></p>
            <div style={OTHER_CONTENT_STYLES}>
                Other content
            </div>
        </>
    );
}