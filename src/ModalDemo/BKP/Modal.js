import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({isOpen, children, onClose}) {
    if (!isOpen) return null;

    return (
        <div>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
    )
}
