import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Navbar.css';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when any link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar "style={{position:'fixed'}}>
      <div className="navbar-brand">
        <Link to="/" className="brand-link" onClick={handleLinkClick}>
          <img src={logo} alt="icon" className="brand-icon" />
          <span className="brand-text">
            Codex<span className="brand-highlight">Mind</span>
          </span>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
        <Link to="/courses" className="nav-link" onClick={handleLinkClick}>Courses</Link>
        <Link to="/service" className="nav-link" onClick={handleLinkClick}>Service</Link>

        <div className="nav-dropdown">
          <span className="nav-link dropdown-toggle">Pages</span>
          <div className="dropdown-content">
            <Link to="#" className="dropdown-item" onClick={handleLinkClick}>Our Team</Link>
            <Link to="#" className="dropdown-item" onClick={handleLinkClick}>Testimonial</Link>
          </div>
        </div>

        <Link to="/footer" className="nav-link" onClick={handleLinkClick}>Contact</Link>
        <Link to="/login" className="nav-link" onClick={handleLinkClick}>
          <i className="fa fa-user"></i>
        </Link>
        <div className="nav-link translate-box" id="google_translate_element"></div>
      </div>
    </nav>
  );
};

export default Navbar;
