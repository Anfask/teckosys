import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Workshops from './pages/Workshops';
import Blogs from './pages/Blogs';
import './App.css'; 
import Careers from './pages/Careers';
import Feedback from './pages/Feedback';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cyber from './pages/Cyber-Security';
import Mobile from './pages/Mobile-App-Development';
import UIUX from './pages/UI-UX Engineering';
import WebApp from './pages/Web-App-Development';
import Devops from './pages/DevOps-Engineering';
import DigitalMarketing from './pages/Digital-Marketing';
import Cloud from './pages/Cloud-Computing';
import Data from './pages/Data-Science';
import CourseRegistration from './pages/CourseRegistration';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/Cyber-Security" element={<Cyber />} />
          <Route path="/Mobile-App-Development" element={<Mobile />} />
          <Route path="/UI-UX Engineering" element={<UIUX />} />
          <Route path="/Web-App-Development" element={<WebApp />} />
          <Route path="/DevOps Engineering" element={<Devops />} />
          <Route path="/Digital Marketing" element={<DigitalMarketing />} />
          <Route path="/Cloud Computing" element={<Cloud />} />
          <Route path="/Data Science" element={<Data />} />
          <Route path="/courses/:courseId" element={<CourseRegistration />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
