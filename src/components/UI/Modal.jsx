import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="policy-modal-overlay" onClick={handleBackdropClick}>
      <div className="policy-modal">
        <div className="policy-modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="policy-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
