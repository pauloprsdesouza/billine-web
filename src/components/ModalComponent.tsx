import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface ModalProps {
    title: string;
    body: ReactNode;
    show: boolean;
    handleClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ title, body, show, handleClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (!modalElement) return;
        
        // @ts-ignore: Object is possibly 'null'.
        const modal = new window.bootstrap.Modal(modalElement);
        if (show) {
            modal.show();
        }
        
        return () => {
            modal.dispose(); // Clean up the modal instance when the component is unmounted
        };
    }, [show]);
    

    return (
        <div ref={modalRef} className="modal" id="modalDialogInfo" aria-labelledby="modalDialogInfo" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>{body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;
