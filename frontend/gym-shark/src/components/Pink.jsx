import React from 'react'
import ProductCard from './ProductCard'
import leggingOne from "../images/legging_1.jpg"
import leggingTwo from "../images/legging_2.jpg"
import leggingThree from "../images/legging_3.jpg"
import leggingFour from "../images/legging_4.jpg"
import ProductSlider from './sub-components/ProductSlider'

const Pink = () => {
  return (
    <section className='container-fluid px-3 px-lg-5 pink-section'>
       <div className="row">
        <div className="col-12">
           <div className="d-flex justify-content-between justify-content-lg-start align-items-center gap-4 mb-0 mb-lg-3">
                <h5>NEW IN: PINK</h5>
                <a href="#">View All</a>
            </div>
        </div>
        </div>
        <div className="row">
            <ProductSlider>
                <div>
                    <ProductCard productImg={leggingOne} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
                 <div>
                    <ProductCard productImg={leggingTwo} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                 </div>
                <div>
                    <ProductCard productImg={leggingThree} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={leggingFour} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={leggingFour} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={leggingFour} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={leggingFour} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={leggingFour} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productPrice={"$30"} />
                </div>
            </ProductSlider>         
        </div>
    </section>
  )
}

export default Pink