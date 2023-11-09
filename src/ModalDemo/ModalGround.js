import React, {useState} from 'react'
import Modal from './Modal';
import SignalCounter, {double} from './SignalCounter';

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
                    <h1>About Learn React App</h1>
                    <p>This app shows simple demos of using React to explain few core concepts</p>
                    <p>Reorganized and enhanced by Abhijit D based on "Web Dev Simplied"'s React Tutorials on YouTube</p>
                </Modal>
            </div>
            <p></p>
            <div style={OTHER_CONTENT_STYLES}>
                Other content
                <p>
                    <SignalCounter />
                </p>
                <p>
                    Double of count is {double}.
                </p>
            </div>
        </>
    );
}