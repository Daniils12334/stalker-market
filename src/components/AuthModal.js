// components/AuthModal.js
import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`auth-tab ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <form className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        <p className="auth-note">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="auth-switch" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;