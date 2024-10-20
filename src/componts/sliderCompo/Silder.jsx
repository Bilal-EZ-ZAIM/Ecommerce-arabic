import React from 'react'
import './slider.css'
import imgsq from '../../images/products/mobiles/m10.jpg'
import Rating from '../rating/Rating'
import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Silder = ({ title, data }) => {
    const sliderX = useRef()


    const [translit, setTranslit] = useState(0);
    const handlSliderTorigth = () => {
        const som = (sliderX.current.scrollWidth - sliderX.current.offsetWidth);
        if (som > translit) {
            setTranslit(pre => pre + 250)
        } else {
            setTranslit(som)
        }
    }
    const handlSliderToLefth = () => {
        const som = (sliderX.current.scrollWidth - sliderX.current.offsetWidth);
        if (translit <= 0) {
            setTranslit(0)

        } else {
            setTranslit(pre => pre - 250)
        }
    }
    return (
        <div className='slaider'>


            <div className="container"  >
                <i className='fa fa-arrow-right right' onClick={handlSliderTorigth}></i>
                <h2 className='slider-title'>الجديد من {title}</h2>

                <div className="parntSilder" ref={sliderX} style={{ transform: `translateX(${translit}px)` }} >
                    
                        {
                            data.map(item => {
                                return (
                                    <NavLink key={item.id} to={`/newdarta/${item.id}`} >
                                    <div  className="cartlider" >
                                        <img src={require(`../../${item.image}`)} />
                                        <Rating title={item.title} rating={item.rating} price={item.price} discount={item.discount} reviews={item.reviews} />
                                    </div>
                                    </NavLink>
                                )
                            })
                        }

                    
                </div>
                <i className='fa fa-arrow-left left' onClick={handlSliderToLefth}></i>
            </div>

        </div>
    )
}

export default Silder