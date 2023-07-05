import React, { useRef, useEffect } from 'react';
import ReactDom from 'react-dom';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}
export default function Modal({isOpen, children, onClose}) {
    let count = useRef(0);

    useEffect(() => { count.current = count.current +1});
    console.log('This component has been rendered '+ count.current + ' times.');

    console.log('modal open', isOpen);
    if (!isOpen) return null;

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>        
        </>
    , document.getElementById('portal'));
}
