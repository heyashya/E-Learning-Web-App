import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Courses.css'; // Import the CSS file

// Import course images
// Assuming your course images are in src/assets/img/
import course1 from '../../assets/img/course-1.jpg';
import course2 from '../../assets/img/course-2.jpg';
import course3 from '../../assets/img/course-3.jpg';
import course4 from '../../assets/img/course-4.jpg';
import course5 from '../../assets/img/course-5.jpg';
import course6 from '../../assets/img/course-6.jpg';
import course7 from '../../assets/img/course-7.jpg';
import course8 from '../../assets/img/course-8.jpg';
import course9 from '../../assets/img/course-9.jpg';
import course10 from '../../assets/img/course-10.jpg';
import course11 from '../../assets/img/course-11.jpg';
import course12 from '../../assets/img/course-12.png'; // Note: This was .png in your example


// Array to hold course data
const coursesData = [
  {
    id: 1,
    img: course1,
    type: 'FREE',
    typeBgColor: '#fb873f', // Your brand color for FREE
    title: 'HTML Course for Beginners',
    rating: 4.55,
    learners: '5.8L+',
    level: 'Beginner',
    duration: '2.0 Hrs',
    price: '0',
  },
  {
    id: 2,
    img: course2,
    type: 'PAID',
    typeBgColor: '#0ed44c', // Green for PAID
    title: 'Front End Development-CSS',
    rating: 4.55,
    learners: '5.2L+',
    level: 'Beginner',
    duration: '4.0 Hrs',
    price: '199',
  },
  {
    id: 3,
    img: course3,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'Introduction to JavaScript',
    rating: 4.46,
    learners: '76L+',
    level: 'Beginner',
    duration: '2.5 Hrs',
    price: '0',
  },
  {
    id: 4,
    img: course4,
    type: 'PAID',
    typeBgColor: '#0ed44c',
    title: 'Python Programming',
    rating: 3.54,
    learners: '3.3L+',
    level: 'Beginner',
    duration: '3.0 Hrs',
    price: '299',
  },
  {
    id: 5,
    img: course5,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'SQL for Data Science',
    rating: 4.54,
    learners: '1.3L+',
    level: 'Intermediate',
    duration: '5.0 Hrs',
    price: '0',
  },
  {
    id: 6,
    img: course6,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'Ai & Machine learning',
    rating: 3.55,
    learners: '3.5L+',
    level: 'Beginner',
    duration: '4.5 Hrs',
    price: '0',
  },
  {
    id: 7,
    img: course7,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'AWS for Beginners',
    rating: 4.53,
    learners: '1L+',
    level: 'Beginner',
    duration: '3.0 Hrs',
    price: '0',
  },
  {
    id: 8,
    img: course8,
    type: 'PAID',
    typeBgColor: '#0ed44c',
    title: 'Microsoft Azure Essentials',
    rating: 4.64,
    learners: '4.4L+',
    level: 'Intermediate',
    duration: '3.5 Hrs',
    price: '149',
  },
  {
    id: 9,
    img: course9,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'Introduction to MS Excel',
    rating: 4.6,
    learners: '4.2L+',
    level: 'Beginner',
    duration: '3.5 Hrs',
    price: '0',
  },
  {
    id: 10,
    img: course10,
    type: 'PAID',
    typeBgColor: '#0ed44c',
    title: 'Statistics For Data Science',
    rating: 4.55,
    learners: '5.3L+',
    level: 'Intermediate',
    duration: '2.5 Hrs',
    price: '299',
  },
  {
    id: 11,
    img: course11,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'Java Programming',
    rating: 4.45,
    learners: '5L+',
    level: 'Beginner',
    duration: '2.0 Hrs',
    price: '0',
  },
  {
    id: 12,
    img: course12,
    type: 'FREE',
    typeBgColor: '#fb873f',
    title: 'C for Beginners',
    rating: 4.5,
    learners: '1.1L+',
    level: 'Beginner',
    duration: '1.5 Hrs',
    price: '0',
  },
];

const Courses = () => {
  return (
    <div className="container-xxl py-5 courses-section"> {/* Added a unique class for this section */}
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center px-3">Popular Courses</h6>
          <h1 className="mb-5 courses-main-heading">Explore new and trending free online courses</h1> {/* Added class for specific styling */}
        </div>
        <div className="row g-4 py-2">
          {coursesData.map((course) => (
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={course.id}>
              <div className="course-item shadow">
                <div className="position-relative overflow-hidden text-light course-image-container">
                  <img className="img-fluid" src={course.img} alt={course.title} />
                  <div
                    className="course-type-badge px-2 py-1 fw-bold text-uppercase"
                    style={{ backgroundColor: course.typeBgColor }} // Dynamic background color
                  >
                    {course.type}
                  </div>
                </div>
                <div className="p-2 pb-0">
                  <h5 className="mb-1 course-title">
                    <Link to={`/courses/${course.id}`} className="text-dark"> {/* Link to a hypothetical single course page */}
                      {course.title}
                    </Link>
                  </h5>
                </div>
                <div className="d-flex course-details">
                  <small className="flex-fill text-center py-1 px-2">
                    <i className="fa fa-star text-warning me-2"></i>
                    {course.rating}
                  </small>
                  <small className="flex-fill text-center py-1 px-2">
                    <i className="fa fa-user-graduate me-2"></i>
                    {course.learners} Learners
                  </small>
                  <small className="flex-fill text-center py-1 px-2">
                    <i className="fa fa-user me-2"></i>
                    {course.level}
                  </small>
                </div>
                <div className="d-flex course-footer">
                  <small className="flex-fill text-left p-2 px-2">
                    <i className="fa fa-clock me-2"></i>
                    {course.duration}
                  </small>
                  <small className="py-1 px-2 fw-bold fs-6 text-center">
                    ₹ {course.price}
                  </small>
                  <small className="text-primary py-1 px-2 fw-bold fs-6 course-enroll-link">
                    <Link to={`/enroll/${course.id}`}> {/* Link to hypothetical enrollment page */}
                      Enroll Now <i className="fa fa-chevron-right me-2 fs-10"></i>
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container text-center mt-4">
        <Link to="/courses" className="btn text-light py-3 px-5 mb-5 all-courses-btn">
          All Courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;