import React from 'react'
import './heaTow.css'

const HeaderTow = () => {
  return (
    <div className='headerTow'>
      <div className="container">
        <div className="searshing">
          <input type="search" placeholder='مادا تريد ؟'/>
          <button>إبحث</button>
        </div>
        <div className="cartSoping">
          <h2>سلة التسوق <i className='fa fa-cart-shopping'></i></h2>
        </div>
      </div>
    </div>
  )
}

export default HeaderTow