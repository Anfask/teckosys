import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
    window.location.href = '/courses'; // Redirect to the Courses page
  };

  const handleNavigate = (value) => {
    navigate(value);
  };

  const handleScroll = () => {
    if (window.scrollY >= 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <div className="nav-links">
        <p className="nav-link" onClick={() => handleNavigate('/')}>Home</p>
          <p className="nav-link" onClick={() => handleNavigate('/about')}>About</p>
          <div className="dropdown nav-link" onClick={handleDropdownClick}>
            Courses <span className="dropdown-icon">⤸</span>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              <a href="/Cyber-Security" className="dropdown-item">Cyber Security</a>
              <a href="/Mobile-App-Development" className="dropdown-item">Mobile App Development</a>
              <a href="/UI-UX Engineering" className="dropdown-item">UI/UX Engineering</a>
              <a href="/Web-App-Development" className="dropdown-item">Web App Development</a>
              <a href="/DevOps Engineering" className="dropdown-item">DevOps Engineering</a>
              <a href="/Digital Marketing" className="dropdown-item">Digital Marketing</a>
              <a href="/Cloud Computing" className='dropdown-item'>Cloud Computing</a>
              <a href="/Data Science" className='dropdown-item'>Data Science</a>
            </div>
          </div>
          <p className="nav-link" onClick={() => handleNavigate('/workshops')}>Workshops</p>
          <p className="nav-link" onClick={() => handleNavigate('/blogs')}>Blogs</p>
          <p className="nav-link contact-button" onClick={() => handleNavigate('/contact')}>CONTACT</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;



// import React, { useEffect, useState } from 'react';
// import './NavBar.css';
// import Logo from '../assets/logo.png'; 
// import { useNavigate } from 'react-router-dom';

// const NavBar = () => {
// const navigate = useNavigate()

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const handleDropdownClick = () => {
//     setDropdownOpen(!dropdownOpen);
//     window.location.href = '/courses'; // Redirect to the Courses page
//   };

//   const handleNavigate = (value)=>{
//     navigate(value)
//   }

//   const handleScroll = () => {
//     if (window.scrollY >= 70) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${ false ? "scrolled": ""}`}>
//       <div className="container">
//         <div className="logo-container">
//           <img src={Logo} alt="Logo" className="logo-image" /> {/* Use 'Logo' here */}
//         </div>
//         <div className="nav-links">
//           <a href="/" className="nav-link">Home</a>
//           {/* <a href="/about" className="nav-link">About</a> */}
//           <p  className="nav-link" onClick={()=>handleNavigate('/about')} >About</p>
//           <div className="dropdown nav-link" onClick={handleDropdownClick}>
//             Courses <span className="dropdown-icon">⤸</span>
//             <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
//               <a href="/Cyber-Security" className="dropdown-item">Cyber Security</a>
//               <a href="/Mobile-App-Development" className="dropdown-item">Mobile App Development</a>
//               <a href="/UI/UX Engineering" className="dropdown-item">UI/UX Engineering</a>
//               <a href="/Web-App-Development" className="dropdown-item">Web App Development </a>
//               <a href="/DevOps Engineering" className="dropdown-item">DevOps Engineering</a>
//               <a href="/Digital-Marketing" className="dropdown-item">Digital Marketing</a>
//               <a href="/Cloud-Computing" className='dropdown-item'>Cloud Computing</a>
//               <a href="/Data-Science"className='dropdown-item'>Data Science</a>
//             </div>
//           </div>
//           <a href="/workshops" className="nav-link">Workshops</a>
//           <a href="/blogs" className="nav-link">Blogs</a>
//           <a href="/contact" className="nav-link contact-button">CONTACT</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
