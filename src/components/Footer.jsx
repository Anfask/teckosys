import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../components/Footer.css';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={Logo} alt="" className="footer-logo" />
                    <p className="footer-description">Empowering Kerala with Cutting-edge Technology Courses
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com"><FaFacebook /></a>
                        <a href="https://instagram.com/teckosys"><FaInstagram /></a>
                        <a href="https://x.com/"><FaTwitter /></a>
                        <a href="https://in.linkedin.com/"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-links-section">
                    <div className="footer-column">
                        <h4>Sitemap</h4>
                        <ul>
                            <li><FaChevronRight /><a href="/about">About Us</a></li>
                            <li><FaChevronRight /><a href="/courses">Courses</a></li>
                            <li><FaChevronRight /><a href="/blogs">Blogs</a></li>
                            <li><FaChevronRight /><a href="/workshops">Workshops</a></li>
                            <li><FaChevronRight /><a href="/careers">Careers</a></li>
                            <li><FaChevronRight /><a href="/Feedback">Feedback</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li><FaChevronRight /><a href="/contact">Contact</a></li>
                            <li><FaChevronRight /><a href="/faq">FAQ</a></li>
                            <li><FaChevronRight /><a href="/terms">Terms & Conditions</a></li>
                            <li><FaChevronRight /><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <FaPhone />
                                <span className="footer-contact-info">
                                    <span className="contact-phone">+91 9074 260 340</span>
                                </span>
                            </li>
                            <li>
                                <FaEnvelope />
                                <span className="footer-contact-info">
                                    <span className="contact-email">hello@teckosys.in</span>
                                </span>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span className="footer-contact-info">
                                    <span className="contact-address">
                                        3rd floor xyz Building, Kallara,<br />
                                        Pangode, Trivandrum, Kerala 695609, India
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 <span className="span">Teckosys</span> | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
