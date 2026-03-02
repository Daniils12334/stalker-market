// components/PaymentModal.js
import React from 'react';

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Payment Options</h2>
        <div className="payment-icons-large">
          <img src="assets/Visa.png" alt="Visa" />
          <img src="assets/Mastercard.png" alt="Mastercard" />
          <img src="assets/Etherium.png" alt="Ethereum" />
        </div>
        <p className="eth-note">Get 10% bonus when you pay with ETH</p>
        <p className="modal-note">Secure and instant transactions</p>
      </div>
    </div>
  );
};

export default PaymentModal;