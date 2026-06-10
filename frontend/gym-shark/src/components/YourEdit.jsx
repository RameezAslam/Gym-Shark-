import React from 'react'
import ProductCard from './ProductCard'
import menShort_1 from "../images/MenShorts1.jpg"
import menShort_2 from "../images/MenShorts2.jpg"
import menShort_3 from "../images/MenShorts3.jpg"
import menShort_4 from "../images/MenShorts4.jpg"
import ProductSlider from './sub-components/ProductSlider'

const YourEdit = () => {
  return (
     <section className='container-fluid px-3 px-lg-5 edit-section'>
        <div className="row">
            <div className="col-12">
                 <div className="d-flex justify-content-between justify-content-lg-start align-items-center gap-2 gap-sm-3 gap-sm-4 mb-0 mb-lg-3">
                    <h5>WELCOME TO YOUR EDIT</h5>
                    <a href="#">View All</a>
                 </div>
            </div>
        </div>
        <div className="row">
            <ProductSlider>
                <div>
                   <ProductCard productImg={menShort_1} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={menShort_2} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={menShort_3} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={menShort_4} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                 <div>
                   <ProductCard productImg={menShort_1} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={menShort_2} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={menShort_3} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
                <div>
                    <ProductCard productImg={menShort_4} productName={`Train 5" Shorts`} productRating={"5"} productInfo={"Slim Fit"} productColor={"Stealth Blue"} productPrice={"$30"} />
                </div>
            </ProductSlider>
            
        </div>
    </section>
  )
}

export default YourEdit