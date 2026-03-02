// pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import DlcSection from '../components/DlcSection';
import AccountsSection from '../components/AccountsSection';
import FaqSection from '../components/FaqSection';

const Home = ({ openImageModal, openPaymentModal }) => {
  return (
    <>
      <Hero />
      <DlcSection openImageModal={openImageModal} />
      <AccountsSection />
      <FaqSection />
    </>
  );
};

export default Home;