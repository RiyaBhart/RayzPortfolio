import React from 'react';
import './OurClients.css';

const OurClients = () => {
  // Placeholder logos using text for now, but simulated as logo strips
  const clients = [
    "Crown and Care Dental Clinic", "TimelessEra", "Syslab.ai"
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="section-title text-center" style={{ fontSize: '1.5rem', opacity: 0.8 }}>Trusted by Brands That Want to Win</h2>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <div key={index} className="client-logo-placeholder">
                {client}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, index) => (
              <div key={`dup-${index}`} className="client-logo-placeholder">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;