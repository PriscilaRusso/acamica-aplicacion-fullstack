import React from "react"; 


export default function Modal({ open, onClose, children }) {
    if (open) {
        return (
            <div onClick={onClose} >
                {children}
            </div>
        );
    }
    return null;
};
