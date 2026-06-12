import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import '../css/CartSidebar.css'
import img from "../images/single-product/small-img-1.jpg"
import visa from '../images/visa-card.jpg'
import masterCard from '../images/mastercard-card.jpg'
import paypal from '../images/paypal-card.jpg'
import applePay from '../images/applepay-card.jpg'
import klarna from '../images/klarna-pay-now.jpg'
import amex from '../images/amex-card.jpg'
import afterPay from '../images/after-pay.jpg'
import flag from '../images/flag.jpg'
import { Link } from 'react-router-dom';

const CartSidebar = ({ onClose }) => {

return (
  <div className='cart-sidebar-container'>
    <div className="cart-sidebar-header d-flex align-items-center justify-content-between">
    <div className='mb-0'><h2>YOUR BAG</h2></div>
    <div className='d-flex align-items-center justify-content-center gap-3'>
      <div className='icon'>
        <BsBag />
      </div>
      <div className='icon'>
        <CiHeart />
      </div>
      <button className='close-btn p-0' onClick={onClose}>
        <IoClose />
      </button>
    </div>
  </div>

  <div className="cart-sidebar-content">
     <div className="cart-sidebar-product-card">
         <div className='cart-sidebar-img-container'>
            <img src={img} alt="image" />
         </div>
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between">
          <div className='cart-new-tag-bg'>
            <span>NEW</span>
          </div> 
          <div>
              <CiHeart />
          </div>
        </div>
        <div className="d-flex">
            <h3 className='mb-0'>Collective Mesh Wordmark Jersey</h3>
        </div>
        <div className="d-flex cart-product-title">
            <span>Core Olive/Haze Green/Soft White</span>
            <span>Oversized Fit</span>
            <span>XL</span>
        </div>
        <div className="d-flex align-items-center justify-content-between price-quantity-container">
          <div>
            <p className='cart-product-price mb-0'>$46</p>
          </div>
          <div className='quantity-selector d-flex align-items-center justify-content-center gap-4'>
            <button> - </button>
            <span> 1 </span>
            <button> + </button>
          </div>
        </div>
      </div>
    </div>
 
  <div className="recommendations-section">
      <h2>ADD A LITTLE EXTRA</h2>
      <h3>Add one or more of these items to get free delivery</h3>

      {/* <CartSidebarSlider> */}
      <div className="recommendation-cards-container-slider">
        <div className="d-flex align-items-center justify-content-between recommendations-card">
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='recommendation-img-container'>
              <img src={img} alt="image" />
            </div>
            <div className='recommendation-product-card-title'>
              <p className='mb-0'>Quarter Socks 5pk</p>
              <span className='recommendation-price'>$20</span>
            </div>
          </div>
          <div className='recommendation-add-section d-flex align-items-center justify-content-center gap-2'>
            <i className='plus-icon'></i>
            <span className='recommendation-add'>ADD</span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between recommendations-card">
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='recommendation-img-container'>
              <img src={img} alt="image" />
            </div>
            <div className='recommendation-product-card-title'>
              <p className='mb-0'>Quarter Socks 5pk</p>
              <span className='recommendation-price'>$20</span>
            </div>
          </div>
          <div className='recommendation-add-section d-flex align-items-center justify-content-center gap-2'>
            <i className='plus-icon'></i>
            <span className='recommendation-add'>ADD</span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between recommendations-card">
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='recommendation-img-container'>
              <img src={img} alt="image" />
            </div>
            <div className='recommendation-product-card-title'>
              <p className='mb-0'>Quarter Socks 5pk</p>
              <span className='recommendation-price'>$20</span>
            </div>
          </div>
          <div className='recommendation-add-section d-flex align-items-center justify-content-center gap-2'>
            <i className='plus-icon'></i>
            <span className='recommendation-add'>ADD</span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between recommendations-card">
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='recommendation-img-container'>
              <img src={img} alt="image" />
            </div>
            <div className='recommendation-product-card-title'>
              <p className='mb-0'>Quarter Socks 5pk</p>
              <span className='recommendation-price'>$20</span>
            </div>
          </div>
          <div className='recommendation-add-section d-flex align-items-center justify-content-center gap-2'>
            <i className='plus-icon'></i>
            <span className='recommendation-add'>ADD</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between recommendations-card">
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='recommendation-img-container'>
              <img src={img} alt="image" />
            </div>
            <div className='recommendation-product-card-title'>
              <p className='mb-0'>Quarter Socks 5pk</p>
              <span className='recommendation-price'>$20</span>
            </div>
          </div>
          <div className='recommendation-add-section d-flex align-items-center justify-content-center gap-2'>
            <i className='plus-icon'></i>
            <span className='recommendation-add'>ADD</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between recommendations-card">
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='recommendation-img-container'>
              <img src={img} alt="image" />
            </div>
            <div className='recommendation-product-card-title'>
              <p className='mb-0'>Quarter Socks 5pk</p>
              <span className='recommendation-price'>$20</span>
            </div>
          </div>
          <div className='recommendation-add-section d-flex align-items-center justify-content-center gap-2'>
            <i className='plus-icon'></i>
            <span className='recommendation-add'>ADD</span>
          </div>
        </div>
      </div>
      
      {/* </CartSidebarSlider> */}
      <div className="discount-section">
          <h2>DISCOUNT CODE</h2>
          <div className="discount-form d-flex align-items-center justify-content-start gap-3">
            <input type="text" placeholder='Enter code' />
            <button>APPLY</button>
          </div>
      </div>

       <div className="order-summary-section">
          <h2>ORDER SUMMARY</h2>
          <div className="d-flex align-items-center justify-content-between">
              <p>Sub Total</p>
              <p>$46</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <p>Estimated Shipping</p>
              <p>$5</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <b><p>Total</p></b>
              <b><p>$51</p></b>
          </div>
      </div>
     </div>
    </div>

<div className="cart-sidebar-footer">
  <div className='cart-checkout-btn-container'>
    <Link to="/checkout">
      <button className='cart-checkout-btn'>
         <span className='me-2'><BsFillBagFill /></span> CHECKOUT SECURELY
      </button>
    </Link>
  </div>
  <div className='cart-payment-icons-container d-flex align-items-center justify-content-center gap-2'>
    <img src={visa} alt="visa-icon" />
    <img src={masterCard} alt="masterCard-icon" />
    <img src={paypal} alt="paypal-icon" />
    <img src={applePay} alt="applePay-icon" />
    <img src={klarna} alt="klarna-icon" />
    <img src={amex} alt="amex-icon" />
    <img src={afterPay} alt="afterPay-icon" />
  </div>
 </div>
</div>
  )
}

export default CartSidebar