import { Link } from 'react-router-dom';
import '../pages/Courses.css';
import BookDemo from './BookDemo';
import { coursesData } from '../utils/courses';

const Courses = () => {
  return (
    <>
     <div className="courses-page">
      <h2>Our <span>Courses</span></h2>
      <div className="courses-container">
        {coursesData.map((course, index) => (
          <div key={index} className="course-box">
            <img src={course.image} alt={course.name} className="course-image" />
            <div className="course-content">
              <h3>{course.name}</h3>
              <p>Duration: {course.duration}</p>
              <p>Module: {course.module}</p>
              <Link to={`/${course.slug}`} className="explore-btn">Explore More</Link>
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