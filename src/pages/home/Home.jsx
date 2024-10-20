import React , {useState} from 'react'
import Banares from '../../componts/banares/Banares'
import Catecory from '../../componts/categoryy/Catecory'
import Promo from '../../componts/promo/Promo'
import PromoSpesial from '../../componts/promoSpisial/PromoSpesial'
import Silder from '../../componts/sliderCompo/Silder'
import {categories} from '../../data/category'
import {specialOffers} from '../../data/special-offers'
import {products} from '../../data/products'
import {brands} from '../../data/brands'
import ShoppinBrands from '../../componts/shopingBrands/ShoppinBrands'
const Home = () => {
   const laptop = products.filter(item => item.isLaptop === true);
   const mobaile = products.filter(item => item.isLaptop === false);
  return (
    <>
        <Banares/>
        <Catecory category={categories}/>
        <Promo/>
        <PromoSpesial specialOffers={specialOffers}/>
        <Silder title={'اللابتوبات'} data={laptop}  />
        <Silder title={'الهاوتف'} data={mobaile} />
        <ShoppinBrands brands={brands}/>
    </>
  )
}

export default Home