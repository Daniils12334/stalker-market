// components/ImageModal.js
import React from 'react';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content image-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={imageSrc} alt="Enlarged view" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;