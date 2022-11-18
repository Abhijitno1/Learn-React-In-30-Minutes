import React, {useState} from 'react'
import Modal from './Modal';

export default function ModalGround() {
    const {isOpen, setIsOpen} = useState(false);
    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1
    }

    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('ground wrapper div clicked')}>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    Modal content
                </Modal>
            </div>
            <div>
                Other content
            </div>
        </>
    );
}