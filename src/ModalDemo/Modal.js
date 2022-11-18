import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({isOpen, children, onClose}) {
    console.log('baby', isOpen);
    if (!isOpen) return null;
    
    return (
        //ReactDom.createPortal(
        <div>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
        //, document.getElementById('portal'))
    );
}
