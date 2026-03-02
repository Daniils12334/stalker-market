// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
          <a href="#">Telegram</a>
          <a href="#">Discord</a>
        </div>
        <div className="footer-payment">
          <img src="assets/Visa.png" alt="Visa" />
          <img src="assets/Mastercard.png" alt="Mastercard" />
          <img src="assets/Etherium.png" alt="Ethereum" />
        </div>
        <div className="footer-copy">
          © 2025 STALKER MARKET · premium ARK accounts
        </div>
      </div>
    </footer>
  );
};

export default Footer;