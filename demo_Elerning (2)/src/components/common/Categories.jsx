import React from 'react';
import '../../assets/css/Categories.css';

import cat1 from '../../assets/img/cat1.png';
import cat2 from '../../assets/img/cat2.png';
import cat3 from '../../assets/img/cat3.png';
import cat4 from '../../assets/img/cat4.png';
import cat5 from '../../assets/img/cat5.png';
import cat6 from '../../assets/img/cat6.png';
import cat7 from '../../assets/img/cat7.png';
import cat8 from '../../assets/img/cat8.png';

const categories = [
  { img: cat1, title: 'Microsoft Excel' },
  { img: cat2, title: 'AWS' },
  { img: cat3, title: 'Python' },
  { img: cat4, title: 'Java' },
  { img: cat5, title: 'Web Design' },
  { img: cat6, title: 'Web Development' },
  { img: cat7, title: 'MySQL' },
  { img: cat8, title: 'UI/UX Design' },
];

const Categories = () => {
  return (
    <div className="container-xxl py-5 category-section category">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title">Categories</h6>
          <h1 className="section-heading">Popular Topics to Explore</h1>
        </div>
        <div className="row g-2 m-2">
          {categories.map((cat, index) => (
            <div className="col-lg-3 col-md-6 text-center" key={index}>
              <div className="content shadow p-3 mb-2 category-card">
                <img
                  src={cat.img}
                  className="img-fluid"
                  alt={cat.title}
                />
                <h5 className="my-2">
                  <a href="#" className="category-link">
                    {cat.title}
                  </a>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
