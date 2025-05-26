import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../../assets/css/About.css';

import aboutImage from '../../assets/img/about.jpg';

const About = () => {
  const features = [
    'Expert Instructors',
    'Live Interactive Sessions',
    'Comprehensive Course Catalog',
    'Community Engagement',
    'Personalized Learning Paths',
    'Certification and Recognition',
  ];

  return (
    <div className="container-xxl py-5 about-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100 about-animated delay-1">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={aboutImage}
                alt="About Codexmind"
                style={{ objectFit: 'cover', borderRadius: '5px' }}
              />
            </div>
          </div>
          <div className="col-lg-6 about-animated delay-2">
            <h6 className="section-title bg-white text-start pe-3">About Us</h6>
            <h1 className="mb-4" style={{ color: '#fb873f' }}>
              Welcome to Codexmind
            </h1>

            <p className="mb-4">
              Codexmind is a cutting-edge software development company that specializes in delivering
              scalable, robust, and efficient technology solutions. With a focus on innovation, we are
              committed to transforming complex challenges into streamlined digital experiences. Our team
              of experts provides a full spectrum of services, including custom software development, AI
              and machine learning solutions, cloud computing, and mobile app development.
            </p>
            <p className="mb-4">
              Welcome to CodexMind, your gateway to boundless learning opportunities. We're dedicated to democratizing
              education, offering a diverse range of courses taught by industry experts. Our mission is to empower
              learners worldwide, fostering a community-driven platform where knowledge knows no limits.
            </p>

            <div className="row gy-2 gx-4 mb-4 about-animated delay-3">
              {features.map((feature, index) => (
                <div className="col-sm-6" key={index}>
                  <p className="mb-0">
                    <FaArrowRight className="me-2" /> {feature}
                  </p>
                </div>
              ))}
            </div>

            <a
              className="btn text-light py-3 px-5 mt-2 about-animated delay-4"
              href="/about"
              style={{ backgroundColor: '#fb873f', borderRadius: '5px' }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
