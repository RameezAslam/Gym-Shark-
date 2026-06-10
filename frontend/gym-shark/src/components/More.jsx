import React, { useState } from 'react'
import ProductCard from './ProductCard';
import guide_one from "../images/more/guides_img_1.jpg"
import guide_two from "../images/more/guides_img_2.jpg"
import guide_three from "../images/more/guides_img_3.jpg"
import guide_four from "../images/more/guides_img_4.jpg"
import training_one from "../images/more/training_img_1.jpg"
import training_two from "../images/more/training_img_2.jpg"
import training_three from "../images/more/training_img_3.jpg"
import training_four from "../images/more/training_img_4.jpg"
import trending_one from "../images/more/trending_img_1.jpg"
import trending_two from "../images/more/trending_img_2.jpg"
import trending_three from "../images/more/trending_img_3.jpg"
import trending_four from "../images/more/training_img_4.jpg"
import app_img from "../images/more/apps_img.jpg"
import ProductSlider from './sub-components/ProductSlider';

const More = () => {

     const [activeCategory, setActiveCategory] = useState('guides');

  return (
     <section className='container-fluid px-3 px-lg-5 more-section'>
        <div className="row mb-2">
            <div className="col-12">
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h5>WAIT THERE'S MORE...</h5>
                  <div className='d-flex align-items-center justify-content-center gap-3'>
                    <div className={`popular-btn-background ${activeCategory === 'guides' ? 'active' : ''}`}>
                      <button 
                        className='popular-btn'
                        onClick={() => setActiveCategory('guides')}
                      >
                       GUIDES
                      </button>
                    </div>
                    <div className={`popular-btn-background ${activeCategory === 'trending' ? 'active' : ''}`}>
                      <button 
                        className='popular-btn'
                        onClick={() => setActiveCategory('trending')}
                      >
                          TRENDING
                      </button>
                    </div>
                    <div className={`popular-btn-background ${activeCategory === 'training' ? 'active' : ''}`}>
                      <button 
                        className='popular-btn'
                        onClick={() => setActiveCategory('training')}
                      >
                        TRAINING
                      </button>
                    </div>
                    <div className={`popular-btn-background ${activeCategory === 'apps' ? 'active' : ''}`}>
                      <button 
                        className='popular-btn'
                        onClick={() => setActiveCategory('apps')}
                      >
                        APPS
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row">
          {activeCategory === 'guides' && (
            <>
            <div className="product-slider">
              <ProductSlider>
                <div> <ProductCard productImg={guide_one} productBoldName={"The Gymshark Running Hub"} productText={"For every runner, every route, and every reason you lace up."} /></div>
                <div> <ProductCard productImg={guide_two} productBoldName={"LEGGINGS GUIDE"} productText={"Stop looking; start finding the leggings you've been looking for. However you train, whatever your look, we’ve got a match."} /></div>
                <div> <ProductCard productImg={guide_three} productBoldName={"SPORTS BRA GUIDE"} productText={"Find the one with high, medium and light-support sports bras more trustworthy and reliable than your ex."} /></div>
                <div> <ProductCard productImg={guide_four} productBoldName={"MEN’S SHORTS GUIDE"} productText={"Everything you need to know about the best gym shorts in the game, from repping, to running, to rest day."} /></div>
              </ProductSlider>
            </div>
              
                <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={guide_one} productBoldName={"The Gymshark Running Hub"} productText={"For every runner, every route, and every reason you lace up."} /></div>
                <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={guide_two} productBoldName={"LEGGINGS GUIDE"} productText={"Stop looking; start finding the leggings you've been looking for. However you train, whatever your look, we’ve got a match."} /></div>
                <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={guide_three} productBoldName={"SPORTS BRA GUIDE"} productText={"Find the one with high, medium and light-support sports bras more trustworthy and reliable than your ex."} /></div>
                <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={guide_four} productBoldName={"MEN’S SHORTS GUIDE"} productText={"Everything you need to know about the best gym shorts in the game, from repping, to running, to rest day."} /></div>
            </>  
          )}

           {activeCategory === 'trending' && (
            <>
            <div className="product-slider">    
              <ProductSlider>
                <div> <ProductCard productImg={trending_one} productBoldName={"Pumper Pants every time"} productText={"From deadlifts to dips, Pumper Pants keep you looking sick and feeling comfy whatever you’re training."} /></div>
                <div> <ProductCard productImg={trending_two} productBoldName={"Treadmill Workouts 101: Run Smarter Indoors With Treadmill Plans, Motivation & Form Tips"} productText={"Treadmills are a great tool for getting your mileage in no matter what. Here’s the ultimate guide to treadmill workouts."} /></div>
                <div> <ProductCard productImg={trending_three} productBoldName={"The Best Women’s Tracksuits to Live In This Season"} productText={"Cosy season is upon us and that means one thing, tracksuits. Discover this season’s comfiest top picks."} /></div>
                <div> <ProductCard productImg={trending_four} productBoldName={"Somatic Exercises | Workouts for Releasing Tension & Easing Stress"} productText={"Slowing down can be the key to progress. Learn how to pause, reset and release tension with somatic exercise."} /></div>
              </ProductSlider>
            </div>
            
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={trending_one} productBoldName={"Pumper Pants every time"} productText={"From deadlifts to dips, Pumper Pants keep you looking sick and feeling comfy whatever you’re training."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={trending_two} productBoldName={"Treadmill Workouts 101: Run Smarter Indoors With Treadmill Plans, Motivation & Form Tips"} productText={"Treadmills are a great tool for getting your mileage in no matter what. Here’s the ultimate guide to treadmill workouts."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={trending_three} productBoldName={"The Best Women’s Tracksuits to Live In This Season"} productText={"Cosy season is upon us and that means one thing, tracksuits. Discover this season’s comfiest top picks."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={trending_four} productBoldName={"Somatic Exercises | Workouts for Releasing Tension & Easing Stress"} productText={"Slowing down can be the key to progress. Learn how to pause, reset and release tension with somatic exercise."} /></div>
            </>  
          )}
          {activeCategory === 'training' && (
            <>
            <div className="product-slider">
              <ProductSlider>
                <div> <ProductCard productImg={training_one} productBoldName={"Calisthenics For Beginners: 8 Exercises To Get Started"} productText={"Get to grips with the foundations of calisthenics movements with this beginner guides. Learn bodyweight exercises with tips from a Gymshark coach."} /></div>
                <div> <ProductCard productImg={training_two} productBoldName={"Pull-Ups: How to Do Them and Get Your First Rep"} productText={"Achieve your first pull-up with this guide to the variations, progressions and all the tips you need to get your chin to the bar."} /></div>
                <div> <ProductCard productImg={training_three} productBoldName={"Progressive Overload: The Route To Results In Strength Training"} productText={"Progressive overload is the backbone of strength training and muscle growth. Find out what it is, how to apply it and progressive overload workouts."} /></div>
                <div> <ProductCard productImg={training_four} productBoldName={"Strength Training For Runners"} productText={"Run faster, longer, and injury-free by adding these essential strength exercises designed specifically for runners."} /></div>
              </ProductSlider>
            </div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={training_one} productBoldName={"Calisthenics For Beginners: 8 Exercises To Get Started"} productText={"Get to grips with the foundations of calisthenics movements with this beginner guides. Learn bodyweight exercises with tips from a Gymshark coach."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={training_two} productBoldName={"Pull-Ups: How to Do Them and Get Your First Rep"} productText={"Achieve your first pull-up with this guide to the variations, progressions and all the tips you need to get your chin to the bar."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={training_three} productBoldName={"Progressive Overload: The Route To Results In Strength Training"} productText={"Progressive overload is the backbone of strength training and muscle growth. Find out what it is, how to apply it and progressive overload workouts."} /></div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={training_four} productBoldName={"Strength Training For Runners"} productText={"Run faster, longer, and injury-free by adding these essential strength exercises designed specifically for runners."} /></div>
            </>  
          )}
          {activeCategory === 'apps' && (
            <>
            <div className="product-slider">
              <ProductSlider>
                 <div> <ProductCard productImg={app_img} productBoldName={"BEST OF GYMSHARK ANYTIME, ANYWHERE"} productText={"Get the Gymshark app for on-the-go shopping, exclusive drops and Gymshark Regent St. access."} /></div>
             </ProductSlider>
            </div>
              <div className="col-6 col-lg-3 without-slider"> <ProductCard productImg={app_img} productBoldName={"BEST OF GYMSHARK ANYTIME, ANYWHERE"} productText={"Get the Gymshark app for on-the-go shopping, exclusive drops and Gymshark Regent St. access."} /></div>
            </>  
          )}
        </div>
    </section>
  )
}

export default More