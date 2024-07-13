import React from 'react';
import { Link } from 'react-router-dom';
import CourseImage1 from '../assets/cyber.png';
import CourseImage2 from '../assets/mobile.jpg';
import CourseImage3 from '../assets/ui.png';
import CourseImage4 from '../assets/web.png';
import CourseImage5 from '../assets/dev.jpg';
import CourseImage6 from '../assets/digi.png';
import CourseImage7 from '../assets/cloud.png';
import CourseImage8 from '../assets/data.png';
import '../pages/Courses.css';
import BookDemo from './BookDemo';

const courses = [
  {
    image: CourseImage1,
    name: 'Cyber Security',
    duration: '2 months',
    module: 'Module 10',
    link: '/Cyber-Security'
  },
  {
    image: CourseImage2,
    name: 'Mobile App Development',
    duration: '6 months',
    module: 'Module 8',
    link: '/Mobile-App-Development'
  },
  {
    image: CourseImage3,
    name: 'UI/UX Engineering',
    duration: '1 year',
    module: 'Module 3',
    link: '/UI-UX Engineering'
  },
  {
    image: CourseImage4,
    name: 'Web App Development',
    duration: '2 years',
    module: 'Module 4',
    link: '/Web-App-Development'
  },
  {
    image: CourseImage5,
    name: 'DevOps Engineering',
    duration: '6 Months',
    module: 'Module 4',
    link: '/DevOps Engineering'
  },
  {
    image: CourseImage6,
    name: 'Digital Marketing',
    duration: '3 Months',
    module: 'Module 4',
    link: '/Digital Marketing'
  },
  {
    image: CourseImage7,
    name: 'Cloud Computing',
    duration: '3 Months',
    module: 'Module 4',
    link: '/Cloud Computing'
  },
  {
    image: CourseImage8,
    name: 'Data Science',
    duration: '3 Months',
    module: 'Module 4',
    link: '/Data-Science'
  }
];

const Courses = () => {
  return (
    <>
     <div className="courses-page">
      <h2>Our <span>Courses</span></h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-box">
            <img src={course.image} alt={course.name} className="course-image" />
            <div className="course-content">
              <h3>{course.name}</h3>
              <p>Duration: {course.duration}</p>
              <p>Module: {course.module}</p>
              <Link to={course.link} className="explore-btn">Explore More</Link>
            </div>
          </div>
        ))}
      </div>
     </div>
     <div className='book'>
     <BookDemo />
     </div>
    </>
  );
};

export default Courses;