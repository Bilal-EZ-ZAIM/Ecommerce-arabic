import React from 'react'
import './dataList.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../rating/Rating'
const Datalist = ({ specialOffers , laptop , mobaile}) => {
    const [sours, setsours] = useState();
    const { userId } = useParams();
    const itemIds = specialOffers.find(item => {
        return item.id === +userId
    })
    const handlSrc =(src)=>{
        setsours(src)
    }
    return (
        <div className='datalist'>
            <div className="container">
                <div className="images">
                    <div className="grandImag">
                        <img src={require(`../../${ sours?sours:itemIds.firstImage}`)} alt="" />
                    </div>
                    <div className="petitImage">
                        {
                            itemIds.images.map((im, index) => {
                                return <img onClick={()=> handlSrc(im)} key={index} src={require(`../../${im}`)} />
                            })
                        }
                    </div>
                </div>
                <div className="datali">
                <Rating  className='rating' title={itemIds.title} rating={itemIds.rating} price={itemIds.price} discount={itemIds.discount} reviews={itemIds.reviews} />
                <h3 className='lacontite'>الكمية</h3>
                <div className="addToCart">
                    <input type="number" />
                    <button>إضافة إلى سلة التسوق</button>
                </div>
                </div>
            </div>
            <div className="discribtion">
                <h1> حول هدا المنتج</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium unde exercitationem, impedit asperiores, eligendi nostrum voluptatum rem incidunt architecto, optio fuga excepturi quisquam pariatur? Delectus sint aspernatur quae veniam et.
                Eligendi odio doloribus quo fugit corrupti officia debitis nam quae ea modi aperiam vel aliquam enim, magnam consequatur eaque maiores pariatur cupiditate error praesentium, est tenetur quaerat! Aliquid, reiciendis porro.
                Sint corporis, tempore doloremque eligendi, fugit, ad alias neque dolorum deleniti et expedita veritatis eum? Explicabo dicta natus eaque iure corporis ipsum consequatur magnam, ab optio, inventore nulla culpa neque.
                Ad fuga quos ab molestiae cupiditate quia eaque nihil facere. Aperiam magnam blanditiis sed itaque et inventore fugiat voluptatum reprehenderit similique dolore veniam unde, fuga dolores libero neque consequuntur quae?
                Voluptates sint rem ut nesciunt placeat sed, natus odio rerum explicabo, illum eos ab temporibus voluptas expedita aliquid fuga accusantium adipisci! Consequatur, a amet nam architecto rem ea et nesciunt.
                Consequuntur molestiae quia earum odio voluptatibus ab? Accusantium ipsum voluptatem soluta nam magnam in beatae reprehenderit inventore fuga, quaerat fugit unde voluptatibus nostrum hic aut voluptates natus quas. Ipsa, mollitia?
                Impedit magni magnam rerum voluptas, omnis, totam non ipsum quas ratione labore hic modi. Aperiam minima excepturi unde, ipsa repudiandae praesentium error vero veniam maxime libero vel fuga similique sit!
                Autem error vero repellendus sint laborum sit neque qui. Sed perferendis est reiciendis possimus corrupti necessitatibus deserunt, modi omnis et obcaecati ipsa quasi magni ad id sequi, adipisci, rerum itaque!
                Ex soluta repellendus sapiente deserunt assumenda eum aut maxime a incidunt officia amet perferendis quia enim tempora laudantium laborum id nulla tempore ab, libero provident unde. Dicta rerum at quibusdam?
                Nisi accusantium excepturi perspiciatis rem dolor labore temporibus, neque ipsam nesciunt enim voluptas cumque quod architecto harum nostrum explicabo minus laborum distinctio ad non quia molestiae, quidem cum optio! Placeat!</p>
            </div>
        </div>
    )
}

export default Datalist