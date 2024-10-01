import React from 'react'
import ServiceList from './ServiceList'

const Services = (props) => {
  return (
    <section id='serviceList'>
        
        <div className="container">
          <div className="serListContent">
            <h2>{props.serviceListHeading}</h2>
            <p>{props.serviceListPara}</p>
          </div>

          <ServiceList />
        </div>
      </section>
  )
}

export default Services
