import React from 'react'
import './heaTree.css'
import { useState } from 'react'

const HeaderTree = () => {
  const [toogle, settoogle] = useState(false);
  const addClass = ()=>{
    settoogle(pre => !pre)
  }
  return (
    <div className='headerTree'>
      <div className="container">
        {
          toogle?<i onClick={addClass} className='fa fa-x i'></i>:<i onClick={addClass} className='fa fa-bars i'></i>
        }
        
          <ul className={toogle?'ul':null} style={{animation:'translit 1s linear forwards'}}>
            <li>الصفحة الرئيسية</li>
            <li>الإلكترونيات و المبيلات</li>
            <li>المنزل و المطبخ</li>
            <li>رجالية</li>
            <li>نسائية</li>
          </ul>
        <div className="login">
          <h2>تسجيل  الدخول <i className='fa fa-user'></i></h2>
        </div>
      </div>
    </div>
  )
}

export default HeaderTree