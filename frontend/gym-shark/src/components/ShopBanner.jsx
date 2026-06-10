import React from 'react'
import ProductCard from './ProductCard'
import shop_women from "../images/shop_women_img.jpg"
import shop_men from "../images/shop_men_img.jpg"
import shop_accessories from "../images/shop_accessories_img.jpg"
import ProductSlider from './sub-components/ProductSlider'

const ShopBanner = () => {
  return (
    <section className='container-fluid px-3 px-lg-5 shop-banner-section'>
        <div className="row">
            <ProductSlider>
                    <div className='d-block d-lg-none'><ProductCard productImg={shop_women} productBoldName={"SHOP WOMEN"} /></div>
                    <div className='d-block d-lg-none'><ProductCard productImg={shop_men} productBoldName={"SHOP MEN"} /></div>
                    <div className='d-block d-lg-none'><ProductCard productImg={shop_accessories} productBoldName={"SHOP ACCESSORIES"} /></div>
            </ProductSlider>
            <div className="d-none d-lg-block col-md-4">
                <ProductCard productImg={shop_women} productBoldName={"SHOP WOMEN"} />
            </div>
            <div className="d-none d-lg-block col-md-4">
                <ProductCard productImg={shop_men} productBoldName={"SHOP MEN"} />
            </div>
            <div className="d-none d-lg-block col-md-4">
                <ProductCard productImg={shop_accessories} productBoldName={"SHOP ACCESSORIES"} />
            </div>
        </div>
    </section>
  )
}

export default ShopBanner