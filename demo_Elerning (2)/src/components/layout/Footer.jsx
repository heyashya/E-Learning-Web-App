import React from 'react';
import '../../assets/css/Footer.css';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <p><a className="text-light" href="/about">About Us</a></p>
            <p><a className="text-light" href="/contact">Contact Us</a></p>
            <p><a className="text-light" href="#">Privacy Policy</a></p>
            <p><a className="text-light" href="#">Terms & Conditions</a></p>
            <p><a className="text-light" href="#">FAQs & Help</a></p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2"><FaMapMarkerAlt className="me-2" />123 Karve Nager, Pune, Maharashtra</p>
            <p className="mb-2"><FaPhoneAlt className="me-2" />+91 7447234294</p>
            <p className="mb-2"><FaEnvelope className="me-2" />codexmind@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social me-2" href="#"><FaTwitter /></a>
              <a className="btn btn-outline-light btn-social me-2" href="#"><FaFacebookF /></a>
              <a className="btn btn-outline-light btn-social me-2" href="#"><FaYoutube /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Subscribe to our Newsletter</h4>
            <p>Subscribe now and join our growing community of learners committed to lifelong education!</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <form action="#">
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright text-center">
          &copy; <a className="border-bottom" href="/">codexmind</a>, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
