import React from 'react'
import './PromSi.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Rating from '../rating/Rating'
const PromoSpesial = ({ specialOffers }) => {
    const [mouse, setmouse] = useState();
    
    const trueTofalse = (id) => {
        setmouse(id)
    }
    return (
        <div className='promoSpesial'>
            <div className="container">
                {
                    specialOffers.map(item => {
                        return (
                            <div key={item.id} className='cart'>
                                <div className='discount'>
                                    {
                                        item.discount && <h2> خصم {item.discount} %</h2>
                                    }

                                </div>
                                <div className="tot">
                                    <div className="image">
                                        <img onMouseMove={() => trueTofalse(item.id)} onMouseOut={() => trueTofalse(2)} src={mouse === item.id ? require(`../../${item.secondImage}`) : require(`../../${item.firstImage}`)} alt="" />
                                    </div>
                                    <Rating title={item.title} rating={item.rating} price={item.price} discount={item.discount} reviews={item.reviews} />
                                    
                                </div>
                                <div className="shomDatalis">
                                        <NavLink to={`/datlist/${item.id}`  }>شاهد المزيد ...</NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PromoSpesial