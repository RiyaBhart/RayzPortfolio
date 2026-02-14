import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-lusion">
      <div className="pricing-lusion-container">
        <div className="pricing-intro">
          <h2 className="lusion-section-title">Investment</h2>
          <p className="lusion-subtext">Flexible engagements tailored to your growth.</p>
        </div>

        <div className="pricing-list">
          <div className="pricing-row">
            <h3>Brand Launch</h3>
            <p>Identity & Presence</p>
            <button className="pricing-btn">Inquire</button>
          </div>
          <div className="pricing-row highlight">
            <h3>Growth Mode</h3>
            <p>Scale & Engagement</p>
            <button className="pricing-btn">Inquire</button>
          </div>
          <div className="pricing-row">
            <h3>Full Dominance</h3>
            <p>360° Management</p>
            <button className="pricing-btn">Inquire</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;