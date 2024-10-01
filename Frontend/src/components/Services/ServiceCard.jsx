import React from 'react'
import { Link } from 'react-router-dom'
// Font Awesome / Icon Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const ServiceCard = ({ item, index }) => {

    const { name, desc, bgColor, textColor } = item

    return (
        <div className='serListCard'>
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to='/' className='circleBtn'><FontAwesomeIcon icon={faAngleRight} /></Link>
                <span style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}>
                    {index + 1}
                </span>
            </div>
        </div>
    )
}

export default ServiceCard
