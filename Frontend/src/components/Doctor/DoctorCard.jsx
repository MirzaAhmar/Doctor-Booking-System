import React from 'react'
import starImg from "../../assets/images/Star.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const DoctorCard = ({ item, index, }) => {
    const { name, specialty, avgRating, totalRating, photo, totalPatients, hospital } = item;
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

        

    return (
        <div className='drCard' ref={ref}>
            <img src={photo} alt='doctorImg' />
            <Link><h3>{name}</h3></Link>
            <div className='d-flex align-items-center justify-content-between'>
                <h4>{specialty}</h4>
                <div className='d-flex align-items-center gap-1'>
                    <img src={starImg} alt="starImg" />
                    <h6>{avgRating}</h6>
                    <h6>({totalRating})</h6>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <h5>+{inView && <CountUp end={totalPatients} duration={4} />}patients</h5>

                    <p>{hospital}</p>
                </div>
                <Link to='/doctors/1' className='circleBtn mt-3'><FontAwesomeIcon icon={faAngleRight} /></Link>
            </div>
        </div>
    )
}

export default DoctorCard
