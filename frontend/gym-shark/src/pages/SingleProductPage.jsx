import React, { useState } from 'react'
import '../css/SingleProductPage.css'
import '../css/Sidebar.css'
import spImgOne from '../images/single-product/jersey-first.jpg'
import spImgTwo from '../images/single-product/jersey-second.jpg'
import spImgThree from '../images/single-product/jersey-big.jpg'
import spImgFour from '../images/single-product/right-pose-big.jpg'
import spImgFive from '../images/single-product/right-pose-small.jpg'
import smallOne from '../images/single-product/small-img-1.jpg'
import smallTwo from '../images/single-product/small-img-2.jpg'
import smallThree from '../images/single-product/small-img-3.jpg'
import paypal from '../images/single-product/small-paypal.png'
import klarna from '../images/single-product/klarna-logo.jpg'
import afterpay from '../images/single-product/Afterpay.jpg'
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import SingleProductDetails from '../components/SingleProductDetails'
import LookSidebar from '../components/LookSidebar'
import DeliverySidebar from '../components/DeliverySidebar'

const SingleProductPage = () => {
    const [openLookSidebar, setOpenLookSidebar] = useState(false);
    const [openDeliverySidebar, setOpenDeliverySidebar] = useState(false);

  return (
 <>
  <div className='container-fluid single-product-main-container'>
    <div className="row">      
      <div className="col-md-6 single-product-img-container">
        <div className="single-product-img-grid">
          <div className="row">
            <div className="d-flex flex-row flex-md-column">
              <div className="d-block d-md-none col-12 col-lg-6 spImgOne-container"><img className='spImgOne' src={spImgOne} alt="img-1" /></div>
              <div className="d-block d-md-none col-12 col-lg-6 spImgTwo-container"><img className='spImgTwo' src={spImgTwo} alt="img-2" /></div>
              <div className="d-block d-md-none col-12 spImgthree-container"><img className='spImgThree' src={spImgThree} alt="img-3" /></div>
              <div className="d-block d-md-none col-12 col-lg-6 spImgFour-container"><img className='spImgFour' src={spImgFour} alt="img-4" /></div>
              <div className="d-block d-md-none col-12 col-lg-6 spImgFive-container"><img className='spImgFive' src={spImgFive} alt="img-5" /></div>  
              <div className='d-none d-md-flex flex-column flex-lg-row'>
                <div className="col-12 col-lg-6 spImgOne-container"><img className='spImgOne' src={spImgOne} alt="img-1" /></div>
                <div className="col-12 col-lg-6 spImgTwo-container"><img className='spImgTwo' src={spImgTwo} alt="img-2" /></div>
              </div>
              <div className="d-none d-md-flex">
                  <div className="col-12 p-0 spImgthree-container"><img className='spImgThree' src={spImgThree} alt="img-3" /></div>
              </div>
              <div className='d-none d-md-flex flex-column flex-lg-row'>
                  <div className="col-12 col-lg-6 spImgFour-container"><img className='spImgFour' src={spImgFour} alt="img-4" /></div>
                  <div className="col-12 col-lg-6 spImgFive-container"><img className='spImgFive' src={spImgFive} alt="img-5" /></div>  
              </div>
            </div>
          </div>
        </div>
      </div>
       

    <div className="col-md-6">
      <div className='single-product-info-container d-flex flex-column'>
          <div className='product-information'>
              <div className='mb-3'><span className='new-tag'>NEW</span></div>
              <h1 className='mb-1 text-uppercase'>Collective Mesh Wordmark Jersey</h1>
              <p className='mb-1'>Oversized Fit</p>
              <span>$46</span>
          </div>
          <div className="action-bar d-flex align-items-center justify-content-start gap-3">
            <div className='heart-icon-bg'><IoMdHeartEmpty className='icon' /></div>
            <div className='upload-icon-bg'><FiUpload className='icon' /></div>
        </div>
        <div className='designed-for'>
            <p>Designed for lifting. This jersey is oversized and is made from lightweight, breathable mesh fabric.</p>
            <a href="#">Learn more</a>
        </div>
        <div className='product-promotion-read'>
          <h5>BUILT TO MAKE HISTORY</h5>
          <p>GSLC. Shape the new era in the premium lifter’s collection.</p>
        </div>
        <div className="small-img-wrapper">
          <div className='small-images-container d-flex align-items-center justify-content-start gap-2'>
            <div className='small-img-container'><img src={smallOne} alt="img" /></div>
            <div className='small-img-container'><img src={smallTwo} alt="img" /></div>
            <div className='small-img-container'><img src={smallThree} alt="img" /></div>
          </div>
          <p className='small-img-name'>Core Olive/Haze Green/Soft White</p>
        </div>
        <div className="select-size d-flex justify-content-between align-items-center">
          <p className='mb-0'>Select a size</p>
          <a href="#">Size Guide</a>
        </div>
        <div className='sp-size-chart-container'> 
          <div className="sp-size-chart">
              <span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span><span>3XL</span>
          </div>
        </div>
        <div className="add-to-cart-btn">
          ADD TO BAG
        </div>

      <div className="payment-providers d-flex flex-column align-items-center">
        <div className='paypal-container d-flex flex-wrap align-items-center gap-2 mb-4'>
        <img src={paypal} alt="paypal-logo" />
          <p className='mb-0'> Pay in 4 interest-free payments of $11.50.</p>
          <a href="#">Learn more</a>
        </div> 

      <div className='klarna-container d-flex flex-wrap align-items-center gap-2'>
          <p className='mb-0'>Also available at checkout:</p>
          <img className='klarna-img' src={klarna} alt="klarna-logo" />
          <img className='afterpay-img' src={afterpay} alt="afterpay-logo" />
        </div>  
      </div>

      <div className="usp-list-container">
        <ul className="usp-list list-unstyled d-flex flex-column gap-2">
      <li>
        <div>
          <div className='d-flex align-items-center gap-2'>
              <TiTick className='usp-list-icon' />
              <a href="#">Unlock Access to Exclusive Rewards & Benefits</a>
          </div>
            <p className='mb-0'>Purchasing this product earns 368XP</p>
        </div>         
      </li>
        <li>
          <div>
            <div className='d-flex align-items-center gap-2'>
                <IoBagOutline className='usp-list-icon' />
                <p className='mb-0'>Free Standard Delivery for orders over $75</p>
            </div>
          </div>         
        </li>
        <li>
          <div>
            <div className='d-flex align-items-center gap-2'>
                <IoBagOutline className='usp-list-icon' />
                <p className='mb-0'>Free Standard Delivery for orders over $75</p>
            </div>
          </div>         
        </li>
      </ul>
      </div>

      <div className="get-the-look">
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <span>GET THE LOOK</span>
                <span>2 Products</span>
            </div>
            <div>
              <button className='border-0' onClick={() => setOpenLookSidebar(true)}><RiArrowRightSLine /></button>
            </div>
          </div>
          <div className="get-the-look-img-container-main">
              <div className="row">
                <div className="col-3 get-the-look-img-container"><img src={smallOne} alt="product-img" /></div>
                <div className="col-3 get-the-look-img-container"><img src={smallTwo} alt="product-img" /></div>
              </div>
          </div>
      </div>

      <div className="delivery-returns d-flex align-items-center justify-content-between">
          <span>Delivery & Returns</span>
          <div>
              <button className='border-0' onClick={() => setOpenDeliverySidebar(true)}><RiArrowRightSLine /></button>
          </div>
      </div>
      </div>
    </div>
  </div>
  </div>
     
     {(openLookSidebar || openDeliverySidebar) && (
        <div className='overlay' onClick={() => {
          setOpenLookSidebar(false);
          setOpenDeliverySidebar(false);
        }}></div>
     )}
     
     <SingleProductDetails />
     {openLookSidebar && (
        <LookSidebar onClose={() => setOpenLookSidebar(false)} />
      )}
     {openDeliverySidebar && (
        <DeliverySidebar onClose={() => setOpenDeliverySidebar(false)} />
      )}
    </>
  )
}

export default SingleProductPage