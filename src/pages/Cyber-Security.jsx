import React from 'react';
import './Cyber-Security.css';
import image1 from '../assets/website-maintenance.svg';

const Cyber = () => {
    return (
        <div className="Cyber-Security">
            <h1>Cyber <span>Security</span></h1>
            <h2>Cyber Security courses cover network protection, threat detection, encryption, risk management, ethical hacking, and data privacy. Students learn to defend systems against cyber attacks, implement security protocols, and stay updated on emerging threats.</h2>
            <div className="details">
                <div className="detail">
                    <i className="icon-doc"></i>
                    <span>10 Modules</span>
                </div>
                <div className="detail">
                    <i className="icon-calendar"></i>
                    <span>2 Months</span>
                </div>
                <div className="detail">
                    <i className="icon-globe"></i>
                    <span>Online Only</span>
                </div>
            </div>
            <div className="buttons">
                <button className="enroll">Enroll Now</button>
                <button className="know-more">Know More <span className='sp'>↓</span></button>
            </div>
            <div className="team">
                <div className="member" style={{ backgroundImage: `url(${image1})` }}></div>
            </div>
            
            {/* New content */}
            <div className="why-choose-section">
                <h2>Why you should choose our <span>Cyber Security</span> course ?</h2>
                <div className="content-wrapper">
                    <div className="description">
                        <p>Cyber security is crucial in protecting computer systems, networks, and digital information from theft, damage, or unauthorized access. Our Cyber Security course offers comprehensive training on fundamental principles and techniques of cyber security. Covering the latest trends and methodologies, including PCI DSS, Cyber Kill Chain, and vulnerability identification, this course prepares individuals to tackle the most pressing cyber security issues.</p>
                        <button className="start-learning">Start Learning Now →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cyber;