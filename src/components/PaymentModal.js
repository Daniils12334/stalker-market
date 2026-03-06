import React from 'react';

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Payment Options</h2>
        <div className="payment-icons-large">
          {/* Вместо Visa/Mastercard/Ethereum */}
          <span style={{ fontSize: '2rem', margin: '0 1rem' }}>PayPal</span>
          <span style={{ fontSize: '2rem', margin: '0 1rem' }}>₿ Crypto</span>
        </div>
        <p className="eth-note">Pay with PayPal or Crypto (BTC, ETH, USDT)</p>
        <p className="modal-note">Secure and instant transactions</p>
      </div>
    </div>
  );
};

export default PaymentModal;