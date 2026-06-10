import React from 'react'
import '../css/Footer.css'
import PromoCard from './PromoCard'
import figImgOne from '../images/fig_img_1.jpg'
import figImgTwo from '../images/fig_img_2.jpg'
import figImgThree from '../images/fig_img_3.jpg'
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import visa from '../images/visa-card.jpg'
import masterCard from '../images/mastercard-card.jpg'
import paypal from '../images/paypal-card.jpg'
import applePay from '../images/applepay-card.jpg'
import klarna from '../images/klarna-pay-now.jpg'
import amex from '../images/amex-card.jpg'
import afterPay from '../images/after-pay.jpg'
import flag from '../images/flag.jpg'
import MobileFooterAccordion from './sub-components/MobileFooterAccordion'
import ProductSlider from './sub-components/ProductSlider'

const Footer = () => {
  return (
    <section className='container-fluid px-2 px-sm-3 px-lg-5 py-3 footer-section'>
     <footer>

      <div className="row footer-section-one flex-column gap-3 gap-md-0 flex-md-row">
        <div className="col-md-3">
            <div className="d-flex flex-column gap-2">
              <h5>Women's Leggings</h5>
                <ul className='d-flex flex-column list-unstyled'>
                   <li className='text-decoration-none'> <a href="#">Gym Leggings</a></li>
                   <li className='text-decoration-none'> <a href="#">Leggings With Pockets</a></li>
                   <li className='text-decoration-none'> <a href="#">High Waisted Leggings</a></li>
                   <li className='text-decoration-none'> <a href="#">Scrunch Bum Leggings</a></li>
                   <li className='text-decoration-none'> <a href="#">Black Leggings</a></li>
                   <li className='text-decoration-none'> <a href="#">Flare Leggings</a></li>
                   <li className='text-decoration-none'> <a href="#">Seamless Leggings</a></li>
                   <li className='text-decoration-none'> <a href="#">Petite Gym Leggings</a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-3">
            <div className="d-flex flex-column gap-2">
              <h5>Women's Gymwear</h5>
                <ul className='d-flex flex-column list-unstyled'>
                   <li className='text-decoration-none'> <a href="#">Women's Gym Wear</a></li>
                   <li className='text-decoration-none'> <a href="#">Womens Gym Shorts</a></li>
                   <li className='text-decoration-none'> <a href="#">Running Shorts</a></li>
                   <li className='text-decoration-none'> <a href="#">Sports Bras</a></li>
                   <li className='text-decoration-none'> <a href="#">High Impact Sports Bras</a></li>
                   <li className='text-decoration-none'> <a href="#"> Black Sports Bras</a></li>
                   <li className='text-decoration-none'> <a href="#">Matching Sets</a></li>
                   <li className='text-decoration-none'> <a href="#">Loungewear</a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-3">
            <div className="d-flex flex-column gap-2">
              <h5>Men's Gymwear</h5>
                <ul className='d-flex flex-column list-unstyled'>
                   <li className='text-decoration-none'> <a href="#"> Men's Gymwear</a></li>
                   <li className='text-decoration-none'> <a href="#"> Mens Gym Shorts</a></li>
                   <li className='text-decoration-none'> <a href="#"> Shorts with Pockets</a></li>
                   <li className='text-decoration-none'> <a href="#"> Men's Running Shorts</a></li>
                   <li className='text-decoration-none'> <a href="#"> Gym Shirts</a></li>
                   <li className='text-decoration-none'> <a href="#"> Sleeveless T-Shirts</a></li>
                   <li className='text-decoration-none'> <a href="#"> Gym Stringers</a></li>
                   <li className='text-decoration-none'> <a href="#"> Men's Baselayers</a></li>
                </ul>
            </div>
        </div>
        <div className="col-md-3">
            <div className="d-flex flex-column gap-2">
              <h5>Accessories</h5>
                <ul className='d-flex flex-column list-unstyled'>
                   <li className='text-decoration-none'> <a href="#"> Women's Underwear</a></li>
                   <li className='text-decoration-none'> <a href="#"> Men's Underwear</a></li>
                   <li className='text-decoration-none'> <a href="#"> Workout Bags</a></li>
                   <li className='text-decoration-none'> <a href="#"> Duffel Bags</a></li>
                   <li className='text-decoration-none'> <a href="#">Gym Socks</a></li>
                   <li className='text-decoration-none'> <a href="#">Crew Socks</a></li>
                   <li className='text-decoration-none'> <a href="#">Caps</a></li>
                   <li className='text-decoration-none'> <a href="#">Beanies</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="row footer-section-two">
          <div className="col-12">
              <h1>Workout Clothes & Gym Clothes</h1>
              <p>Workout Clothes designed to help you become your personal best. Because when it comes to performing at your max, there should be no obstacles – least of all your workout clothes.</p>
              <p>Functional and comfortable, we create workout clothing you'll sweat in. Since 2012, we've designed and created the workout clothes we want to wear, because training and its people are what we know best.</p>
          </div>
           <div className="col-12">
              <h2>Gym Clothes built in the weight room</h2>
              <p>Our legacy was built in the weight room. Gymshark was founded with a love for training and that passion continues into all our gym clothes today. You'll find the latest innovation in gym clothing and accessories to help you perform at your best and recover in style.</p>
              <p>Our <b className='text-black'> Men's Workout Clothes</b> feature sweat wicking <b className='text-black'>workout shirts</b> and <b className='text-black'>tank tops, gym shorts, sweatpants</b> and more. Whilst our <b className='text-black'>Women's Workout Clothes</b> are designed for a range of movements and feature sophisticated seamless technology, clever contouring and durable, quick-dry sweat wicking fabrics on <b className='text-black'>leggings, sports bras</b> and more.</p>
              <p>An obsession with lifting is what started this brand, and we haven't forgotten our roots. Our <b className='text-black'>Women's</b> and <b className='text-black'>Men's Bodybuilding clothes</b> feature classic styles, with modern cuts and innovative fabrics to help you raise the bar.</p>
          </div>
          <div className="col-12">
              <h2>Activewear & Athleisure</h2>
              <p>We create the tools that help everyone become their personal best – no matter the sport. Our range of Activewear is designed to give you the support you need to perform at your best, whether that's on the track, on the gym floor or in the studio.</p>
              <p>Whilst our <b className='text-black'>men's</b> and <b className='text-black'>women's athleisure</b> elevates your workouts with the most comfortable gym hoodies, the most supportive gym leggings and the most innovatively designed workout shirts that are made to move when it matters most.</p>
          </div>
          <div className="col-12">
              <h2>More than your best workout clothing</h2>
              <p>The Gymshark community is devoted to unlocking potential through conditioning and the things we do today to prepare for tomorrow. It's every setback, step-up and milestone along the way. Game-changing workout clothing, running clothes and loungewear essentials. It's not just in the designs, it's in the people who wear them.</p>
              <p>Looking for more inspiration? Discover our latest tips, stories, and training insights on <b className='text-black'>Gymshark Central</b> – your next step towards becoming your personal best.</p>          </div>
      </div>
      <div className="row footer-section-three">
          <div className="col-12 col-lg-2">

            <div className='d-block d-lg-none'>
                <MobileFooterAccordion
                   btnText={"HELP"} 
                   linkOne={"FAQ"}
                   linkTwo={"Delivery Information"}
                   linkThree={"Returns Policy"}
                   linkFour={"Make A Return"}
                   linkFive={"Orders"}
                   linkSix={"Submit a Fake"}
                   target={"#collapseOne"}
                   controls={"collapseOne"}
                   id={"collapseOne"}
                   />
            </div>  
            
             <div className="d-none d-lg-flex flex-column gap-2">
               <h5>HELP</h5>
                <ul className='d-flex flex-column gap-1 list-unstyled'>
                   <li className='text-decoration-none'> <a href="#">FAQ</a></li>
                   <li className='text-decoration-none'> <a href="#">Delivery Information</a></li>
                   <li className='text-decoration-none'> <a href="#">Returns Policy</a></li>
                   <li className='text-decoration-none'> <a href="#">Make A Return</a></li>
                   <li className='text-decoration-none'> <a href="#">Orders</a></li>
                   <li className='text-decoration-none'> <a href="#">Submit a Fake</a></li>
                </ul>
            </div>
          </div>

          <div className="col-12 col-lg-2">
            <div className='d-block d-lg-none'>
                <MobileFooterAccordion
                   btnText={"MY ACCOUNT"} 
                   linkOne={"Login"}
                   linkTwo={"Register"}
                   target={"#collapseTwo"}
                   controls={"collapseTwo"}
                   id={"collapseTwo"}
                   />
             </div>  
             <div className="d-none d-lg-flex flex-column gap-2">
               <h5>MY ACCOUNT</h5>
                <ul className='d-flex flex-column gap-1 list-unstyled'>
                   <li className='text-decoration-none'> <a href="#">Login </a></li>
                   <li className='text-decoration-none'> <a href="#">Register</a></li>
                </ul>
            </div>
          </div>

          <div className="col-12 col-lg-2">
               <div className='d-block d-lg-none'>
                <MobileFooterAccordion
                   btnText={"PAGES"} 
                   linkOne={"Stores"}
                   linkTwo={"Refer a Friend"}
                   linkThree={"Gymshark Central"}
                   linkFour={"Gymshark Loyalty"}
                   linkFive={"About Us"}
                   linkSix={"Careers"}
                   linkSeven={"Student Discount"}
                   linkEight={"Training App"}
                   linkNine={"GOVX ID"}
                   linkTen={"Military Discount"}
                   linkEleven={"Accessibility Statement"}
                   linkTwelve={"Factory List"}
                   linkThirteen={"Sustainability"}
                   target={"#collapseThree"}
                   controls={"collapseThree"}
                   id={"collapseThree"}
                   />
            </div>  
             <div className="d-none d-lg-flex flex-column gap-2">
               <h5>PAGES</h5>
                <ul className='d-flex flex-column gap-1 list-unstyled'>
                   <li className='text-decoration-none'> <a href="#">Stores</a></li>
                   <li className='text-decoration-none'> <a href="#">Refer a Friend</a></li>
                   <li className='text-decoration-none'> <a href="#">Gymshark Central</a></li>
                   <li className='text-decoration-none'> <a href="#">Gymshark Loyalty</a></li>
                   <li className='text-decoration-none'> <a href="#">About Us</a></li>
                   <li className='text-decoration-none'> <a href="#">Careers</a></li>
                   <li className='text-decoration-none'> <a href="#">Student Discount</a></li>
                   <li className='text-decoration-none'> <a href="#">Training App</a></li>
                   <li className='text-decoration-none'> <a href="#">GOVX ID</a></li>
                   <li className='text-decoration-none'> <a href="#">Military Discount</a></li>
                   <li className='text-decoration-none'> <a href="#">Accessibility Statement</a></li>
                   <li className='text-decoration-none'> <a href="#">Factory List</a></li>
                   <li className='text-decoration-none'> <a href="#">Sustainability</a></li>
                </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className="promo-card-slider">
              <ProductSlider>
                <div><PromoCard img={figImgOne} caption={"BLOG"} /></div>
                <div><PromoCard img={figImgTwo} caption={"STUDENTS GET 12% OFF"} /></div>
                <div><PromoCard img={figImgThree} caption={"EMAIL SIGN UP"} /></div>
              </ProductSlider>
            </div>
            <div className='d-none d-sm-flex align-items-center justify-content-start justify-content-lg-center gap-2'>
                <PromoCard img={figImgOne} caption={"BLOG"} />
                <PromoCard img={figImgTwo} caption={"STUDENTS GET 12% OFF"} />
                <PromoCard img={figImgThree} caption={"EMAIL SIGN UP"} />
            </div>
          </div>
      </div>
      <div className="row footer-section-four flex-column gap-5 gap-lg-0 flex-lg-row align-items-end align-items-lg-center">
          <div className="col-12 col-sm-6">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start gap-2">
             <div className='img-container'> <img src={visa} alt="visa" /> </div>
               <div className='img-container'><img src={masterCard} alt="mastercard" /></div>
               <div className='img-container'> <img src={paypal} alt="paypal" /></div>
               <div className='img-container'><img src={applePay} alt="applePay" /></div>
               <div className='img-container'> <img src={amex} alt="amex" /></div>
               <div className='img-container'><img src={klarna} alt="klarna" /></div>
               <div className='img-container'> <img src={afterPay} alt="afterPay" /></div>   
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="d-flex align-items-center justify-content-center justify-content-sm-end gap-3">
                <div className='icon-bg'><FaDiscord className='icons text-white' /></div>
                <div className='icon-bg'><FaFacebook className='icons text-white' /></div>
                <div className='icon-bg'><FaPinterest className='icons text-white' /></div>
                <div className='icon-bg'><FaYoutube className='icons text-white' /></div>
                <div className='icon-bg'><FaInstagram className='icons text-white' /></div>
                <div className='icon-bg'><FaXTwitter className='icons text-white' /></div>
                <div className='icon-bg'><FaTiktok className='icons text-white' /></div>
            </div>
          </div>
          <div className="col-12 col-lg-4 footer-four-left-section order-2 order-lg-1 mt-5">
            <div className="d-flex justify-content-start align-items-center">
               <p>© 2026 | Gymshark Limited | All Rights Reserved. | We Do Gym.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-8 footer-four-right-section order-1 order-lg-2 mt-5">
              <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end align-items-start align-items-lg-center gap-2">
                  <div className='d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center gap-3 footer-terms'> 
                    <p>Terms & Conditions</p>
                    <p>Terms of Use</p>
                    <p>Privacy Notice</p>
                    <p>Cookie Policy</p>
                    <p>Modern Slavery</p>
                  </div>
                  <div className='d-flex align-items-center mt-4 mt-lg-0'>
                    <span className='mx-0 mx-lg-3 d-none d-lg-block'>|</span>
                    <div className="d-flex align-items-center gap-2">
                       <img className='us-flag' src={flag} alt="US Flag" />
                       <div className='d-flex align-items-center gap-2'>
                            <p>US</p>
                            <MdKeyboardArrowDown />
                       </div>
                       <div className='d-flex align-items-center gap-2'>
                           <p>English</p>
                           <MdKeyboardArrowDown />
                       </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
          
      </footer>
    </section>
  )
}

export default Footer