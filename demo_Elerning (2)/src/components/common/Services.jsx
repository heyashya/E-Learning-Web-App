import React from 'react';
import '../../assets/css/Service.css';

import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';
import icon4 from '../../assets/img/icon4.png';

const services = [
  {
    icon: icon1,
    title: 'Learn anything',
    description:
      'Explore any interest or trending topic, take prerequisites, and advance your skills',
    delay: '0.1s',
  },
  {
    icon: icon2,
    title: 'Save money',
    description:
      'Spend less money on your learning if you plan to take multiple courses this year',
    delay: '0.3s',
  },
  {
    icon: icon3,
    title: 'Flexible learning',
    description:
      'Learn at your own pace, move between multiple courses, or switch to a different course',
    delay: '0.5s',
  },
  {
    icon: icon4,
    title: 'Unlimited certificates',
    description:
      'Earn a certificate for every learning program that you complete at no additional cost',
    delay: '0.7s',
  },
];

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-2 text-center">
          <div className="col-12">
            <h1 style={{ color: '#fb873f' }}>
              Invest in your professional goals with Secret Coder
            </h1>
            <p className="mb-5">
              Get unlimited access to over 90% of courses, Projects, Specializations, and
              Professional Certificates on Coursera, taught by top instructors.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 service-item-container"
              style={{ animationDelay: service.delay }}
            >
              <div className="service-item text-center pt-3 shadow">
                <div className="p-4">
                  <img src={service.icon} alt="" width="60px" className="mb-4" />
                  <h5 className="mb-3">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
