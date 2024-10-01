import React, { useState } from 'react'
import { DoctorImg2, Star } from '../../assets/images'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'

const DoctorDetails = () => {
  let [tab, setTab] = useState('about')
  return (
    <>
      {/* ====== 3.1 Doctor Detail section ======  */}
      <section id='dr_Detail'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div>
                <div className='dr_detail d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4'>
                  <img src={DoctorImg2} alt="DoctorImg2" />
                  <div>
                    <h4>Surgeon</h4>
                    <h3>Dr. Talha Aslam</h3>
                    <div class="d-flex align-items-center gap-1"><img src={Star} alt="starImg" /><h6>4.8</h6><h6>(272)</h6></div>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, elit fugit?</p>
                  </div>
                </div>

                <div className='feedback'>
                  <button onClick={() => setTab('about')} className={`${tab == 'about' && 'b_border'}`}>
                    About
                  </button>

                  <button onClick={() => setTab('feedback')} className={`${tab == 'feedback' && 'b_border'}`}>
                    Feedback
                  </button>
                </div>

                <div className='mt-5'>
                  {
                    tab == 'about' && <DoctorAbout />
                  }
                  {
                    tab == 'feedback' && <Feedback />
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className='timeSlots'>
                <h5>Get <span>Confirmed</span> Appointment Online</h5>
                <p>Rs. 2,000</p>
                <h5>Available Time Slots:</h5>
                <div className='d-flex justify-content-between align-items-center'>
                  <p>Tuesday</p>
                  <p>4:00pm - 9:30pm</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p>Wednesday</p>
                  <p>4:00pm - 9:30pm</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p>Thursday</p>
                  <p>4:00pm - 9:30pm</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p>Monday</p>
                  <p>4:00pm - 9:30pm</p>
                </div>
                <button className='btn btn-primary d-block mx-auto mt-5'>Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== 1.9 Testimonial section ======  */}
    </>
  )
}

export default DoctorDetails
