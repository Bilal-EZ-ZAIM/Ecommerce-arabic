import React from 'react'
import './bana.css'
const Banares = () => {
  return (
    <div className='banars'>
        <div className="container">
            <div className="one">
            <img src={require('../../images/banners/shoes.png')} alt="" />
            </div>
            <div className="one">
            <img src={require('../../images/banners/house.png')} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banares