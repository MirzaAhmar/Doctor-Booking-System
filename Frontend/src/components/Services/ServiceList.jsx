import React from 'react'
import { ServicesData } from '../../assets/data/servicesData'
import ServiceCard from './ServiceCard'


const ServiceList = () => {
    return (
        <div className="row gap-md-0 gap-5">
            {ServicesData.map((item, index) => (
                <div className="col-md-4" key={index}>
                    <ServiceCard item={item} index={index} key={index} />
                </div>
            ))}
        </div>
    )
}

export default ServiceList