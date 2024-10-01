import React from 'react'
import { Avatar, FeatureImg, videoIcon } from '../../assets/images'

const Features = () => {
  return (
    <section id='feature'>
        <div className="container">
          <div className="row align-items-center gap-md-0 gap-5">
            <div className="col-md-6">
              <div>
                <h2>Get virtual treatmenty anytime.</h2>
                <ul>
                  <li><p>1. Schedule the appointment directly.</p></li>
                  <li><p>2. Search your physician here, and contact their office.</p></li>
                  <li><p>3. View our physician who are accepting new patients, use the online scheduling tool to select an appointment time.</p></li>
                </ul>
                <button className='btn btn-primary'>Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <figure className='d-flex justify-content-end'>
                  <img src={FeatureImg} alt="FeatureImg" />
                </figure>
                <div className='drTime'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div className='d-flex align-items-center'>
                      <h6>Tue, 24</h6>
                      <p>10:00AM</p>
                    </div>
                    <img src={videoIcon} alt="videoIcon" />
                  </div>
                  <h5>Consultation</h5>
                  <div className='d-flex align-items-center gap-3 mt-4'>
                    <img src={Avatar} alt="Avatar" />
                    <h6>Wayne Collins</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features
