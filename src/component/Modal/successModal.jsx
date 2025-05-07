import { useState } from 'react';
import './modal.css'

const SuccessModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal"
      > 
        <h2>Registration Successful!</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
