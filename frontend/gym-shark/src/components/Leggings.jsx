import React from 'react'
import ProductCard from './ProductCard'
import leggingOne from "../images/legging_1.jpg"
import ProductSlider from './sub-components/ProductSlider'

const Leggings = () => {
  return (
    <section className='container-fluid px-3 px-lg-5 leggings-section'>
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-start align-items-center gap-4 mb-0 mb-lg-3">
                    <h5>TOP 10 LEGGINGS</h5>
                </div>
            </div>
        </div>
        <div className="row">
            <ProductSlider>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={leggingOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
            </ProductSlider>
        </div>
    </section>
  )
}

export default Leggings