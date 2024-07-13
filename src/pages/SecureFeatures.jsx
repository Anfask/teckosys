import React from 'react';
import './Secure.css'

const SecureFeatures = () => {
  return (
    <div className="secure-features">
      <h2>How we secure your <span className="highlight">Future</span> ?</h2>
      <div className="features-grid">
        <div className="feature-item placement-feature">
          <div className="feature-icon placement-icon"></div>
          <p>100% Placement & Internship Assistance</p>
        </div>
        <div className="feature-item curriculum-feature">
          <div className="feature-icon curriculum-icon"></div>
          <p>Industry Leading Curriculum</p>
        </div>
        <div className="feature-item trainers-feature">
          <div className="feature-icon trainers-icon"></div>
          <p>Certified & Experienced Trainers</p>
        </div>
        <div className="feature-item exposure-feature">
          <div className="feature-icon exposure-icon"></div>
          <p>Practical Hands-on Exposure</p>
        </div>
        <div className="feature-item infrastructure-feature">
          <div className="feature-icon infrastructure-icon"></div>
          <p>Virtual Lab Infrastructure</p>
        </div>
      </div>
    </div>
  );
};

export default SecureFeatures;
