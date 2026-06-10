import React, { useState } from 'react'
import '../css/Checkout.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import visa from '../images/visa-card.jpg'
import masterCard from '../images/mastercard-card.jpg'
import paypal from '../images/paypal-card.jpg'
import applePay from '../images/applepay-card.jpg'
import klarna from '../images/klarna-pay-now.jpg'
import amex from '../images/amex-card.jpg'
import afterPay from '../images/after-pay.jpg'

const Checkout = () => {
  const [isCardSelected, setIsCardSelected] = useState(true);

return (
<div className='container'>
  <div className="row">
    <div className="col-md-7">
    <div className="d-flex flex-column checkout-section-left gap-3">
      <div className='express-checkout-section d-flex flex-column gap-2 align-items-center justify-content-center'>
          <h2>Express checkout</h2>
          <button className='shop-btn'>shop</button>
      </div>
      <div className='divider-section text-center'>
          <div>OR</div> 
      </div>
  <form action="#">
   <div className="d-flex flex-column gap-3">
      <div className="contact-section d-flex align-items-center justify-content-between">
        <h2>Contact</h2>
        <span className='sign-in-link'>
          <Link to="/login" className='text-black'>Sign in</Link>
        </span>
   </div>

  <div className="email-input-section">
      <input type="email" className="form-control p-2" id="email" placeholder="Email" />
  </div>

  <div className="delivery-form-section d-flex flex-column gap-3">
    <h2>DELIVERY</h2>
      <select className="form-select" aria-label="Default select example">
          <option selected>Country/Region</option>
          <option value="United States">United States</option>
    </select>
    <div className="row">
        <div className="col-6">
          <input type="text" className="form-control p-2" id="firstName" placeholder="First name" />
        </div>
        <div className="col-6">
          <input type="text" className="form-control p-2" id="lastName" placeholder="Last name" />
        </div>
    </div>
    <div className="input-group">
      <input type="text" className="form-control p-2" placeholder="Address Line 1" aria-label="address1" />
      <span className="input-group-text"><CiSearch /></span>
    </div>
        <div>
          <input type="text" className="form-control p-2" id="address2" placeholder="Address Line 2" />
        </div>
        <div className="row">
          <div className="col-4">
              <input type="text" className="form-control p-2" id="city" placeholder="City" />
          </div>
          <div className="col-4">
            <select className="form-select" aria-label="Default select example">
                <option selected>State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
                <option value="Alaska">Alaska</option>
            </select>
          </div>
          <div className="col-4">
              <input type="number" className="form-control p-2" id="city" placeholder="Zip code" />
          </div>
        </div>
        <div className='input-group'>
          <input type="tel" className="form-control p-2" id="phone" placeholder="Phone" />
          <span className='input-group-text'><CiCircleQuestion /></span>
        </div>
  </div>

  <div className="shipping-section">
      <h2>SHIPPING METHOD</h2>
      <div className='shipping-text'>
          <p>Enter your shipping address to view available shipping methods.</p>
      </div>
  </div>

<div className="payment-section-radio-btn">
    <h2>PAYMENT</h2>
    <p className='payment-text'>All transactions are secure and encrypted.</p>
    <div className="form-check radio-btn-container">
        <div>
            <input
                className="form-check-input"
                type="radio"
                name="Payment Radio"
                id="payment-radio"
                checked={isCardSelected}
                onChange={() => setIsCardSelected(!isCardSelected)}
            />
            <div className="d-flex align-items-center justify-content-between">
                <label className="form-check-label fw-bold" htmlFor="payment-radio">
                    Credit/Debit Card
                </label>
                <div className='d-flex align-items-center checkout-payment-icons-container gap-2'>
                    <img src={visa} alt="visa-icon" />
                    <img src={masterCard} alt="masterCard-icon" />
                    <img src={amex} alt="amex-icon" />
                </div>
            </div>
        </div>
    </div>
</div>

{isCardSelected && (
  <div className="credit-debit-form">
    <div className="input-group">
      <input type="number" className="form-control p-2" placeholder="Card number" />
      <span className="input-group-text"><CiLock /></span>
    </div>
    <div className="row">
      <div className="col-6">
          <input type="text" className="form-control p-2" placeholder="Expiration date (MM / YY)" />
      </div>
      <div className="col-6">
        <div className="input-group">
            <input type="number" className="form-control p-2" placeholder="Security code" />
            <span className="input-group-text"><CiCircleQuestion /></span>
        </div>
      </div>
    </div>
    <div>
      <input type="text" className="form-control p-2" placeholder="Name on card" />
    </div>
  </div>
)}
  <div>
      
  </div>
   </div>
  </form>
  </div>
 </div>

 <div className="col-md-5">

 </div>

  </div>
 </div>
  )
}

export default Checkout