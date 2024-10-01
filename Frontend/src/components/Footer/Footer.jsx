import React from 'react'
import { logo, shape1, shape2 } from '../../assets/images'
import { faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between gap-md-0">
          <div className="col-md-3 mb-md-0 mb-4">
            <div className='d-flex flex-column align-items-md-start align-items-center justify-content-center'>
              <img src={logo} alt="footerLogo" />
              <p>{year} developed by Mirza Ahmar Baig</p>
              <div className='socialIcons d-flex align-items-center gap-3'>
                <Link to='/home'> <FontAwesomeIcon icon={faYoutube} /></Link>
                <Link to='/'> <FontAwesomeIcon icon={faInstagram} /></Link>
                <Link to='/'> <FontAwesomeIcon icon={faLinkedinIn} /></Link>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className='quick d-flex flex-column align-items-sm-start align-items-center gap-4'>
              <h4>Quick Links</h4>
              <Link to='/home'>Home</Link>
              <Link to='/'>About Us</Link>
              <Link to='/services'>Services</Link>
              <Link to='/'>Blog</Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mt-sm-0 mt-4">
            <div className='quick d-flex flex-column align-items-sm-start align-items-center gap-4'>
              <h4>I want to:</h4>
              <Link to='/doctors'>Find a Doctor</Link>
              <Link to='/doctors'>Request an Appointment</Link>
              <Link to='/contact'>Find a Location</Link>
              <Link to='/'>Get a opinion</Link>
            </div>
          </div>
          <div className="col-md-2 mt-md-0 mt-4">
            <div className='quick d-flex flex-column align-items-sm-start align-items-center gap-4'>
              <h4>Support</h4>
              <Link to='/'>Donate</Link>
              <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='shap1'>
        <img src={shape1} alt="shape1" />
      </div>
      <div className='shap2'>
        <img src={shape2} alt="shape2" />
      </div>
    </footer>
  )
}

export default Footer
