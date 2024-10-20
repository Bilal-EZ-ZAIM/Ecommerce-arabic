import React from 'react'
import './rating.css'
const Rating = ({title , rating , reviews , discount , price}) => {
    return (
        <div className="titel">
            <h2>{title}</h2>
            <div className="tirming">
                <h4>{rating} <i className='fa fa-star'></i> </h4>
                <h4> {reviews} تقييمات </h4>
            </div>
            {
                discount ? <div className="pracing">
                    <h3>${price - (price * discount) / 100}</h3>
                    <h3 className='oldPrice'>${price}</h3>
                </div> : <h3 className='oldPrice'>${price}</h3>
            }
        </div>
    )
}

export default Rating