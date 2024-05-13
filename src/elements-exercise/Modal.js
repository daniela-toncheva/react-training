import React from "react";
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div className="card position-absolute top-50 start-50 translate-middle">
			<div className="modal-body">
				<p>Modal body text goes here.</p>
				<button type="button" className="btn btn-secondary">
					Close
				</button>
				<button type="button" className="btn btn-primary">
					Save changes
				</button>
			</div>
		</div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
