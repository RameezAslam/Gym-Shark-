import React from 'react'
import '../css/LandingPage.css'
import banner from '../images/banner_1.jpg'
import bannerTwo from '../images/banner_2.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Pink from '../components/Pink'
import Leggings from '../components/Leggings'
import Shorts from '../components/Shorts'
import Tops from '../components/Tops'
import Popular from '../components/Popular'
import YourEdit from '../components/YourEdit'
import HowYouTrain from '../components/HowYouTrain'
import ShopBanner from '../components/ShopBanner'
import More from '../components/More'

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <Banner bannerImg={banner} bannerHeading={"GET 'EM IN PINK"} bannerText={"The sets you love.Even more loveable in pink"} bannerBtn={"Shop New In"} bannerBtnTwo={ "Shop Pink"} />
        <Pink />
        <Leggings />
        <div className='mt-5'>
             <Banner bannerImg={bannerTwo} bannerHeading={"SHORTS AS VERSATILE AS YOUR TRAINING"} bannerText={"We know you need your gym shorts to be lightweight, breathable and as versatile as you are, which is why we’ve got the best in the game right here."} bannerBtn={"Shop Men's"} />
        </div>
        <Shorts />
        <Tops />
        <Popular />
        <YourEdit />
        <HowYouTrain />
        <ShopBanner />
        <More />
    </div>
  )
}

export default LandingPage