import React from 'react'
import './catecore.css'

const Catecory = ({category}) => {
  return (
    <div className='catecore'>
        <div className="container">
            {
                category.map(item=>{
                    return (
                        <div key={item.id}>
                            <img src={require(`../../${item.image}`)}/>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Catecory