import React from 'react'
import { Error404Img } from '../../assets/images'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Error404 = () => {
    return (
        <section id='error404'>
            <div className="container">
                <img src={Error404Img} alt="Error404" />
                <div className='d-flex flex-column align-items-center gap-4 mt-4'>
                    <h2>Page Not Found</h2>
                    <h4>Sorry, The Page You're Looking For Doesn't Exist.</h4>
                    <Link to='/'><button className='btn btn-primary d-flex align-items-center gap-2'>Go Back to Homepage <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </section>
    )
}

export default Error404
