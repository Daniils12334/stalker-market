import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SiaPage from './pages/SiaPage';
import GptPage from './pages/GptPage';
import ReviewsPage from './pages/ReviewsPage';
import AccountsPage from './pages/AccountsPage';
import AccountDetail from './pages/AccountDetail';
import PaymentModal from './components/PaymentModal';
import ImageModal from './components/ImageModal';
import AuthModal from './components/AuthModal';
import Cart from './components/Cart';

function App() {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
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
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <div className="top-label">
            <span className="label-text">⚡ LIMITED RELEASE · ASCENDED EDITIONS ⚡</span>
          </div>
          <Navbar openAuthModal={openAuthModal} openCart={openCart} />
          <Routes>
            <Route path="/" element={<Home openImageModal={openImageModal} openPaymentModal={openPaymentModal} />} />
            <Route path="/sia" element={<SiaPage openImageModal={openImageModal} openPaymentModal={openPaymentModal} />} />
            <Route path="/gpt" element={<GptPage openImageModal={openImageModal} openPaymentModal={openPaymentModal} />} />
            <Route path="/account/:accountName" element={<AccountDetail />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
          </Routes>
          <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal} />
          <ImageModal isOpen={isImageModalOpen} onClose={closeImageModal} imageSrc={selectedImage} />
          <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
          <Cart isOpen={isCartOpen} onClose={closeCart} onCheckout={openPaymentModal} />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;