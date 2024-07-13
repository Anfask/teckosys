import React from 'react';
import Backvid from '../assets/bgvid.mp4';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import Courses from './Courses';
import About from './About';
import SecureFeatures from './SecureFeatures';
import Blogs from './Blogs';
import HomeFeedback from './HomeFeed';

const Home = () => {
  return (
    <>
      <div className="page home-page">
        <video autoPlay loop muted className="background-video">
          <source src={Backvid} type="video/mp4" />
        </video>
        <div className="home-content">
          <h1>BEST ONLINE LEARNING</h1>
          <h1>PLATFORM IN KERALA</h1>
          <p>Empowering Kerala with cutting-edge technology courses</p>
          <div className="button-container">
            <Link to="/contact" className="home-button join-button">Join Now</Link>
            <Link to="/courses" className="home-button explore-button">Explore Our Courses</Link>
          </div>
        </div>
      </div>
      <div className="secure-section">
      <SecureFeatures />
      </div>
      <div className="cors-section">
        <Courses/>
      </div>
      <div className='Blg-section'>
        <HomeFeedback/>
      </div>
    </>
  );
};

export default Home;