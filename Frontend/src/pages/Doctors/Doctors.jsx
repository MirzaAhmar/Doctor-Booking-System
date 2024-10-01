import React from 'react'
import { doctorsData } from '../../assets/data/doctorData'
import DoctorCard from '../../components/Doctor/DoctorCard'
import DoctorList from '../../components/Doctor/DoctorList'
import Testimonial from '../../components/Testimonial/Testimonial'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <>
      {/* ====== 2.1 Hero section ======  */}
      <section id='search_a_Dr'>
        <div className="container">
          <h2>Find a Doctor</h2>
          <div className='searchDr'>
            <div className='d-flex'>
              <input type="search" placeholder='Search Doctor' />
              <button className='btn btn-primary'>Search</button>
            </div>
          </div>

          <div aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-center mt-5 mb-0">
              <li className="breadcrumb-item"><Link to='/'><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End ====== 2.1 Hero section ======  */}

      {/* ====== 1.7 Doctor section ======  */}
      <section id='Find_a_Dr'>
        <div className="container">
          <div className='row gap-md-0 gap-5'>
            {doctorsData.map((item, index) => (
              <div className="col-md-3">
                <DoctorCard item={item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End ====== 1.7 Doctor section ======  */}

      {/* ====== 1.9 Testimonial section ======  */}
      <Testimonial />
      {/* End ====== 1.9 Testimonial section ======  */}
    </>
  )
}

export default Doctors
