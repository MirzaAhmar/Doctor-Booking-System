import React from 'react'
// Home style
import './Home.css'
import '../../App.css'
// Home responsive style
import './HomeResponsive.css'
// about images
import { About, About2, FeatureImg, videoIcon, Avatar, } from '../../assets/images'
import { Link } from 'react-router-dom'
// Font Awesome / Icon Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// data
import { ServicesData } from './HomeData'
import ServiceList from '../../components/Services/ServiceList'
import DoctorList from '../../components/Doctor/DoctorList'
// faq component
import Faq from '../../components/Faq/Faq'
import Testimonial from '../../components/Testimonial/Testimonial'
import Features from '../../components/Features/Features'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
// import Services from '../../components/Services/Services'
const Home = () => {
  return (
    <>
      {/* ====== 1.2 Hero section ======  */}
      <Hero />
      {/* ====== End 1.2 Hero section ======  */}

      {/* ====== 1.3 Services section ======  */}
      <section id='services'>
        <div className="container">
          <div className='serviceContent'>
            <h2>Providing the best medical services</h2>
            <p>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
          </div>
          <div className="row gap-md-0 gap-4">
            {ServicesData.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className='servicecard'>
                  <img src={service.icon} alt={service.alt} />
                  <h3>{service.heading}</h3>
                  <p>{service.para}</p>
                  <Link to={service.path} className='circleBtn' ><FontAwesomeIcon icon={faAngleRight} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End ====== 1.3 Services section ======  */}

      {/* ====== 1.4 About section ======  */}
      <section id='about'>
        <div className="container">
          <div className="row flex-wrap-reverse gap-md-0 gap-4">
            <div className="col-md-6">
              <div className='position-relative'>
                <img src={About} alt="aboutImg" />
                <div className='drName'>
                  <div className='d-flex gap-2 mb-3'>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div>
                    <img src={About2} alt="about2Img" className='shake-on-hover' />
                    <div className='d-flex flex-column'>
                      <h6>Dr. Mitchell Starc</h6>
                      <p>Chief Doctor of Nursing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h2>Proud to be one of the nations best</h2>
                <p>For 30 years in a row, U.S. News & World Report has recognized us as one of the best publics hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nemo?</p>
                <p>Our best is something we strive for each day, caring for our patients-not looking back at what we accomplished but towards what we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, modi?</p>
                <Link to='/'><button className='btn btn-primary'>Learn More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End ====== 1.4 About section ======  */}

      {/* ====== 1.5 Services List section ======  */}
      <Services serviceListHeading = 'Our Medical Services' serviceListPara = 'World-class care for everyone. Our health systems offers unmatched, expert health care.' />
      {/* End ====== 1.5 Services List section ======  */}

      {/* ====== 1.6 Feature section ======  */}
      <Features />
      {/* End ====== 1.6 Feature section ======  */}

      {/* ====== 1.7 Doctor section ======  */}
      <section id='doctor'>
        <div className="container">
          <div className='doctorContent'>
            <h2>Our great doctors</h2>
            <p>World-class care for everyone. Our health systems offers unmatched, expert health care.</p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* End ====== 1.7 Doctor section ======  */}

      {/* ====== 1.8 Faq section ======  */}
      <Faq />
      {/* End ====== 1.8 Faq section ======  */}

      {/* ====== 1.9 Testimonial section ======  */}
      <Testimonial />
      {/* End ====== 1.9 Testimonial section ======  */}

    </>
  )
}

export default Home
