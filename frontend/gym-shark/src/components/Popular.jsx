import React, { useState } from 'react'
import ProductCard from './ProductCard'
import men_one from "../images/popular/popular_men_1.jpg"
import men_two from "../images/popular/popular_men_2.jpg"
import men_three from "../images/popular/popular_men_3.jpg"
import men_four from "../images/popular/popular_men_4.jpg"
import women_one from "../images/popular/popular_women_1.jpg"
import women_two from "../images/popular/popular_women_2.jpg"
import women_three from "../images/popular/popular_women_3.jpg"
import women_four from "../images/popular/popular_women_4.jpg"
import ProductSlider from './sub-components/ProductSlider'

const Popular = () => {
  const [activeCategory, setActiveCategory] = useState('women')

  return (
    <section className='container-fluid px-3 px-lg-5 popular-section'>
        <div className="row mb-2">
            <div className="col-12">
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h5>POPULAR RIGHT NOW</h5>
                  <div className='d-flex align-items-center justify-content-center gap-3'>
                    <div className={`popular-btn-background ${activeCategory === 'women' ? 'active' : ''}`}>
                      <button 
                        className='popular-btn'
                        onClick={() => setActiveCategory('women')}
                      >
                        WOMEN
                      </button>
                    </div>
                    <div className={`popular-btn-background ${activeCategory === 'MEN' ? 'active' : ''}`}>
                      <button 
                        className='popular-btn'
                        onClick={() => setActiveCategory('MEN')}
                      >
                        MEN
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row">
          {activeCategory === 'women' && (
            <>
            <div className="product-slider">
              <ProductSlider>
                  <div> <ProductCard productImg={women_one} productBoldName={"READY FOR LIFT(ING) OFF"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
                  <div> <ProductCard productImg={women_two} productBoldName={"LIFTING"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
                  <div> <ProductCard productImg={women_three} productBoldName={"HIIT"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
                  <div> <ProductCard productImg={women_four} productBoldName={"PILATES"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              </ProductSlider>
            </div>
            
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={women_one} productBoldName={"READY FOR LIFT(ING) OFF"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={women_two} productBoldName={"LIFTING"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={women_three} productBoldName={"HIIT"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={women_four} productBoldName={"PILATES"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
            </>  
          )}

           {activeCategory === 'men' && (
            <>
            <div className="product-slider">
              <ProductSlider>
                <div> <ProductCard productImg={men_one} productBoldName={"RUNNING"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
                <div> <ProductCard productImg={men_two} productBoldName={"LIFTING"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
                <div> <ProductCard productImg={men_three} productBoldName={"HIIT"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
                <div> <ProductCard productImg={men_four} productBoldName={"PILATES"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              </ProductSlider>
            </div>
            
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={men_one} productBoldName={"RUNNING"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={men_two} productBoldName={"LIFTING"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={men_three} productBoldName={"HIIT"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={men_four} productBoldName={"PILATES"} productText={"These new rest day essentials make for perfect travel fits."} /></div>
            </>  
          )}
        </div>
    </section>
  )
}

export default Popular