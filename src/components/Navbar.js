import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ openAuthModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path.startsWith('#')) {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home with hash
      navigate('/', { state: { scrollTo: hash } });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">STALKER MARKET</div>
      <div className="nav-menu">
        <ul className="nav-links">
          <li><a href="/" onClick={handleHomeClick} className={location.pathname === '/' && !location.hash ? 'active' : ''}>Home</a></li>
          <li><a href="#dlc" onClick={(e) => handleHashLink(e, '#dlc')} className={isActive('#dlc') ? 'active' : ''}>DLC</a></li>
          <li><Link to="/sia" className={isActive('/sia') ? 'active' : ''}>SEA</Link></li>
          <li><a href="#accounts" onClick={(e) => handleHashLink(e, '#accounts')} className={isActive('#accounts') ? 'active' : ''}>Accounts</a></li>
          <li><Link to="/gpt" className={isActive('/gpt') ? 'active' : ''}>GPT</Link></li>
          <li><a href="#faq" onClick={(e) => handleHashLink(e, '#faq')} className={isActive('#faq') ? 'active' : ''}>FAQ</a></li>
        </ul>
        <button className="login-btn" onClick={openAuthModal}>LOGIN</button>
        <span className="cart-icon" role="img" aria-label="cart">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;