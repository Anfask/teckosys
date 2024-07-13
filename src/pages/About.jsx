import React from 'react';
import './About.css';
import Person1 from '../assets/Anfas.png';
import Person2 from '../assets/Anfas.png';
import Person3 from '../assets/Anfas.png';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import SecureFeatures from './SecureFeatures';

const About = () => {
  const teamMembers = [
    {
      name: "Ashik N J",
      role: "Founder & CEO",
      image: Person1,
      linkedin: "https://linkedin.com/in/0xmav1c",
      twitter: "https://twitter.com/anfas_kaloor",
      instagram: "https://instagram.com/0xmav1c"
    },
    {
      name: "Sohil M S",
      role: "Co Founder & CTO",
      image: Person2,
      linkedin: "https://linkedin.com/in/0xmav1c",
      twitter: "https://twitter.com/anfas_kaloor",
      instagram: "https://instagram.com/0xmav1c"
    },
    {
      name: "Anfas Kaloor",
      role: "Cyber Security & Cyber Forensics Expert" ,
      image: Person3,
      linkedin: "https://linkedin.com/in/0xmav1c",
      twitter: "https://twitter.com/anfas_kaloor",
      instagram: "https://instagram.com/0xmav1c"
    }
  ];

  return (
    <>
     <section className="about-section">
      <h1>Who are <span>We</span> ?</h1>
      <p className="about-description">Established in the vibrant city of Kerala, Teckosys was founded with the vision of revolutionizing the tech education landscape in the region. With a team of dedicated professionals and industry experts, we strive to provide the best online platform for learning technology courses in Kerala.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
              <div className="member-overlay">
                <div className="social-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
     </section>
     <div className="secure-section">
     <SecureFeatures />
     </div>
    </>
  );
};

export default About;