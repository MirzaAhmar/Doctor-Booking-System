import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (<div className='d-flex justify-content-center align-items-center w-100 h-100'>
    <HashLoader color='#0667FF' />
  </div>)
}

export default Loading