import React from 'react'
import ProductCard from './ProductCard'
import topsOne from "../images/tops_1.jpg"
import topsTwo from "../images/tops_2.jpg"
import topsThree from "../images/tops_3.jpg"
import ProductSlider from './sub-components/ProductSlider'

const Tops = () => {
  return (
     <section className='container-fluid px-3 px-lg-5 tops-section'>
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between justify-content-lg-start align-items-center gap-4 mb-0 mb-lg-3">
                    <h5>TOP 10 TOPS</h5>
                </div>
            </div>
        </div>
        <div className="row">
            <ProductSlider>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
                <div>
                    <ProductCard productImg={topsOne} productName={"Adapt Animal X Whitney Leggings"} productPrice={"$42"} productRating={"3"} />
                </div>
            </ProductSlider>   
        </div>
    </section>
  )
}

export default Tops