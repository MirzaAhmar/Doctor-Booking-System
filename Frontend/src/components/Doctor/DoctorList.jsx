import React from 'react'
import { doctorsData } from '../../assets/data/doctorData'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
    return (
        <div className='row gap-md-0 gap-5'>
            {doctorsData.map((item, index) => (
                <div className="col-md-4" key={index}>
                    <DoctorCard item={item} key={index}  />
                </div>
            ))}
        </div>
    )
}

export default DoctorList
