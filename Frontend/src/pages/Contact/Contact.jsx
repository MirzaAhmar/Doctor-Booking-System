import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formText, setFormText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactFormHandle = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section id='contact'>
        <div className='contactContent'>
          <h2>Contact Us</h2>
          <p>Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
          <div aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-center mt-5 mb-0">
              <li className="breadcrumb-item"><Link to='/'><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center gap-md-0 gap-4 mt-5">
            <div className="col-md-6">
              <div className='contactForm'>
                <h3 className='text-center'>Contact</h3>
                <form onSubmit={contactFormHandle}>
                  <div className='d-flex flex-column'>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder='Full Name' />
                  </div>
                  <div className='d-flex flex-column'>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder='Email' />
                  </div>
                  <div className='d-flex flex-column'>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} placeholder='Subject' />
                  </div>
                  <div className='d-flex flex-column'>
                    <textarea name="message" id="message" rows="6" onChange={(e) => setFormText(e.target.value)} placeholder='Leave a comment...'></textarea>
                  </div>
                  <button className='btn btn-primary mt-2'>Submit</button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1724457624404!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
