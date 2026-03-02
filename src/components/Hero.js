// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1><span>STALKER MARKET</span><br />Premium ARK Ascended Accounts & DLC</h1>
        <p>Survive, dominate, and ascend with the most exclusive ARK accounts. Instant delivery, 24/7 support.</p>
        <div className="hero-buttons">
          <a href="#dlc" className="btn btn-primary">BUY DLC</a>
          <a href="#accounts" className="btn btn-secondary">VIEW ACCOUNTS</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;