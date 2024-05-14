import React from "react";
import ReactDOM from "react-dom";

function Modal({onClose, children}) {
  return ReactDOM.createPortal(
    <div className="card position-fixed top-50 start-50 translate-middle p-2">
			<div className="modal-body p-2 d-flex flex-column mb-1">
				{children}
        <hr/>
        <div className="d-flex justify-content-end">
				<button type="button" className="btn btn-secondary" onClick={onClose}>
					Close
				</button>
        </div>
			</div>
		</div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
