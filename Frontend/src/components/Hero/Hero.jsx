import React from 'react'
import CountUp from 'react-countup';
import HeroImg1 from '../../assets/images/hero-img01.png'
import HeroImg2 from '../../assets/images/hero-img02.png'
import HeroImg3 from '../../assets/images/hero-img03.png'

const Hero = () => {
  return (
    <section id='hero'>
        <div className="container">
          <div className="row gap-md-0 gap-sm-5 gap-4">
            <div className="col-md-6">
              <div>
                <h1>We help Patients live a healthy, longer life.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique commodi, iusto maiores ipsa eaque, iure ipsam officia mollitia nobis sit laudantium deleniti id eveniet repudiandae illum veniam?</p>
                <button className='btn btn-primary'>Request an Appointment</button>
                <div className='d-flex align-items-center gap-4 flex-md-nowrap flex-wrap'>
                  <div>
                    <h2><CountUp end={30} duration={6} />+</h2>
                    <span className='yello'></span>
                    <p>Years of experience</p>
                  </div>
                  <div>
                    <h2><CountUp end={15} duration={6} />+</h2>
                    <span className='purple'></span>
                    <p>Clinic Location</p>
                  </div>
                  <div>
                    <h2><CountUp end={100} duration={6} />%</h2>

                    <span className='blue'></span>
                    <p>Patients Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className='row'>
                  <div className="col-md-7">
                    <div className='d-flex justify-content-md-end justify-content-center'>
                      <img src={HeroImg1} alt="heroImg" />
                    </div>
                  </div>
                  <div className="col-md-5 mt-4">
                    <div className='d-flex flex-column align-items-center gap-4'>
                      <img src={HeroImg2} alt="heroImg2" />
                      <img src={HeroImg3} alt="heroImg3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
