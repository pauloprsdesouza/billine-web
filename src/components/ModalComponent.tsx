import React, { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
    title: string;
    body: ReactNode;
    show: boolean;
    handleClose: Function;
}

const ModalComponent: React.FC<ModalProps> = ({ title, body, show, handleClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (show) {
            // @ts-ignore: Object is possibly 'null'.
            const modal = bootstrap.Modal.getOrCreateInstance(modalRef.current);
            modal.show();
        }
    }, [show]);

    return (
        <div ref={modalRef} className="modal fade" id="modalDialogInfo" aria-labelledby="modalDialogInfo" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content border-0">
                    <div className="modal-header text-bg-info text-center">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => handleClose(false)}></button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;
