// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SiaPage from './pages/SiaPage';
import GptPage from './pages/GptPage';
import ReviewsPage from './pages/ReviewsPage';
import AccountsPage from './pages/AccountsPage';
import DlcDetail from './pages/DlcDetail';
import AccountDetail from './pages/AccountDetail';
import PaymentModal from './components/PaymentModal';
import ImageModal from './components/ImageModal';
import AuthModal from './components/AuthModal';

// ScrollToHash component to handle navigation state
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return null;
};

function App() {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPaymentModal = () => setPaymentModalOpen(true);
  const closePaymentModal = () => setPaymentModalOpen(false);
  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);
  const openImageModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setImageModalOpen(true);
  };
  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Router>
      <div className="App">
        <div className="top-label">
          <span className="label-text">⚡ LIMITED RELEASE · ASCENDED EDITIONS ⚡</span>
        </div>
        <Navbar openAuthModal={openAuthModal} />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home openImageModal={openImageModal} openPaymentModal={openPaymentModal} />} />
          <Route path="/sia" element={<SiaPage openImageModal={openImageModal} openPaymentModal={openPaymentModal} />} />
          <Route path="/gpt" element={<GptPage openImageModal={openImageModal} openPaymentModal={openPaymentModal} />} />
          <Route path="/dlc/:dlcName" element={<DlcDetail />} />
          <Route path="/account/:accountName" element={<AccountDetail />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
        </Routes>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal} />
        <ImageModal isOpen={isImageModalOpen} onClose={closeImageModal} imageSrc={selectedImage} />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
      </div>
    </Router>
  );
}

export default App;