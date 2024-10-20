import React from 'react'
import './shopBran.css'
const ShoppinBrands = ({ brands }) => {
    return (
        <div className='brands'>
            <div className="container">
                <h2>التسوق حسب المارك</h2>
                <div className="toutMArks">
                {
                    brands.map(imag => {
                        return (
                            <div className="marka" key={imag.id}>
                                <img src={require(`../../${imag.image}`)} alt="" />
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}
export default ShoppinBrands