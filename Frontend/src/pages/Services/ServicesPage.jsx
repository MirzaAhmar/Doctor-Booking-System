import React from 'react'
import Services from '../../components/Services/Services'
import { Link } from 'react-router-dom'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServicesPage = () => {
  return (
    <div>
      <div className='contactContent d-flex flex-column align-items-center gap-3 text-center'>
          <h2>Services</h2>
          <p>World-class care for everyone. Our health systems offers unmatched, expert health care.</p>
          <div aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-center mt-5 mb-0">
              <li className="breadcrumb-item"><Link to='/'><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </div>
        </div>
      <Services />
    </div>
  )
}

export default ServicesPage
