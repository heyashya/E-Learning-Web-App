import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/HeroCarousel.css';

import carousel1 from '../../assets/img/carousel-1.jpg';
import carousel2 from '../../assets/img/carousel-2.jpg';

const slides = [
  {
    id: 1,
    image: carousel1,
    subtitle: 'Best E-learning platform',
    title: 'Learn Job ready skills from free online courses with certificates',
    description:
      'Explore a wide range of courses designed to enhance your expertise in technology, business, arts, and more. Start learning today!',
    button1: { text: 'Read More', link: '/about' },
    button2: { text: 'Join Now', link: '/signup' },
  },
  {
    id: 2,
    image: carousel2,
    subtitle: 'Welcome to Secret Coder',
    title: 'Interactive Learning Experience',
    description:
      'Engage with interactive lessons, quizzes, and projects. Experience hands-on learning that keeps you motivated and inspired.',
    button1: { text: 'Read More', link: '/about' },
    button2: { text: 'Join Now', link: '/signup' },
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-carousel-container">
      <div
        className="hero-carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <img src={slide.image} alt={slide.subtitle} className="hero-image" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h5 className="hero-subtitle">{slide.subtitle}</h5>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <Link to={slide.button1.link} className="hero-btn primary-btn">
                    {slide.button1.text}
                  </Link>
                  <Link to={slide.button2.link} className="hero-btn secondary-btn">
                    {slide.button2.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
