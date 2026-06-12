import React, { useState, useEffect, useRef } from 'react'
import '../css/Checkout.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import img from "../images/single-product/small-img-1.jpg"
import visa from '../images/visa-card.jpg'
import masterCard from '../images/mastercard-card.jpg'
import paypal from '../images/paypal-card.jpg'
import applePay from '../images/applepay-card.jpg'
import klarna from '../images/klarna-pay-now.jpg'
import amex from '../images/amex-card.jpg'
import afterPay from '../images/after-pay.jpg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [isBillingSelected, setIsBillingSelected] = useState(false);
  const [isPaymentBillingSelected, setIsPaymentBillingSelected] = useState('shipping-address');
  const [openMobileCheckout, setOpenMobileCheckout] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const checkoutRightRef = useRef(null);
  const headerRef = useRef(null)

  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(window.innerHeight > 90) {
             setIsSticky(!entry.isIntersecting);
          } else {
              setIsSticky(false);
          }
        },
        { threshold: 0 }
      );

      if (headerRef.current) {
        observer.observe(headerRef .current);
      }

      const handleResize = () => {
        if (window.innerHeight <= 90) { 
          setIsSticky(false);
        }
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
      };
  }, [])

return (
<>
  <div ref={headerRef} className="container-fluid">
    <div className="checkout-header">
        <h1>GYMSHARK</h1>
    </div>
  </div>

 <div className='container'>
   <div className="row">

   <div className="container-fluid d-block d-lg-none col-12 mobile-checkout-right-main">
     <div 
        onClick={() => setOpenMobileCheckout(!openMobileCheckout)} 
        className='d-flex align-items-center justify-content-between mobile-checkout-right-texts'
      >
      <div className='d-flex align-items-center'>
          <span className='mobile-checkout-order-summary-text'>Order summary</span>
          {openMobileCheckout ? (
              <span className='arrow-icon'><MdKeyboardArrowUp /></span>
          ) : (
            <span className='arrow-icon'><MdKeyboardArrowDown /></span>
          )}
      </div>
      <div>
        <span className='mobile-checkout-price'>$46.00</span>
      </div>
    </div>

  {openMobileCheckout && (
    <div className="d-flex flex-column gap-3 mobile-checkout-right-section">
      <div className="d-flex align-items-center justify-content-between gap-2">
        <div className='d-flex align-items-center gap-2'>
          <div className='checkout-product-details-img-container'>
            <img src={img} alt="image" />
          </div>
          <div className='checkout-product-details-title'>
            <p className='mb-0'>Collective Mesh Wordmark Jersey - Core Olive/Haze Green/Soft White</p>
            <span className='checkout-product-details-size'>Extra Large</span>
          </div>
      </div>
        <div className='checkout-product-details-price'>$46.00</div>
    </div>
    <div className="checkout-discount-section">
      <div className="checkout-discount-form d-flex align-items-center justify-content-start gap-3">
        <input type="text" placeholder='Enter code' />
        <button>APPLY</button>
      </div>
    </div>

    <div className='referral-link'>
      <a href="#">Been referred by a friend?</a>
    </div>

    <div className="checkout-order-summary-section">
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
    )}
  </div>

  <div className="col-12 col-lg-6">
     <div className="d-flex flex-column checkout-section-left gap-3">
      <div className='express-checkout-section d-flex flex-column gap-2 align-items-center justify-content-center'>
          <h2>Express checkout</h2>
          <button className='shop-btn'>shop</button>
      </div>
    <div class="or-divider">
      <span class="line"></span>
      <span class="or-text">OR</span>
      <span class="line"></span>
    </div>
  <form action="#">
  <div className="d-flex flex-column gap-3">
    <div className="contact-section d-flex align-items-center justify-content-between mt-3">
        <h2>Contact</h2>
        <span className='sign-in-link'>
          <Link to="/login" className='text-black'>Sign in</Link>
        </span>
    </div>

  <div className="email-input-section">
      <input type="email" className="form-control p-2" id="email" placeholder="Email" />
  </div>

  <div className="delivery-form-section d-flex flex-column gap-3 my-3">
    <h2>DELIVERY</h2>
      <select className="form-select" aria-label="Default select example">
          <option selected>Country/Region</option>
          <option value="United States">United States</option>
     </select>
    <div className="row">
        <div className="col-12 mb-3 mb-sm-0 col-sm-6">
          <input type="text" className="form-control p-2" id="firstName" placeholder="First name" />
        </div>
        <div className="col-12 col-sm-6">
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
          <div className="mb-3 mb-sm-0 col-12 col-sm-4">
              <input type="text" className="form-control p-2" id="city" placeholder="City" />
          </div>
          <div className="mb-3 mb-sm-0 col-12 col-sm-4">
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
          <div className="mb-3 mb-sm-0 col-12 col-sm-4">
              <input type="number" className="form-control p-2" id="city" placeholder="Zip code" />
          </div>
        </div>
        <div className='input-group'>
          <input type="tel" className="form-control p-2" id="phone" placeholder="Phone" />
          <span className='input-group-text'><CiCircleQuestion /></span>
        </div>
  </div>

  <div className="shipping-section mb-3">
    <h2>SHIPPING METHOD</h2>
    <div className='shipping-text'>
        <p>Enter your shipping address to view available shipping methods.</p>
    </div>
  </div>

   <div className="payment-section-radio-btn">
      <h2 className='mb-2'>PAYMENT</h2>
      <p className='payment-text mb-2'>All transactions are secure and encrypted.</p>
   </div>

   <div className="form-check p-0 radio-btn-container-main">
      <div className='radio-btn-container'>
        <input
            className="form-check-input  mx-2"
            type="radio"
            name="Payment"
            id="credit-debit-radio"
            checked={selectedPaymentMethod === 'card'}
            onChange={() => setSelectedPaymentMethod('card')}
        />
        <div className="d-flex align-items-center justify-content-between">
          <label className="form-check-label fw-bold" htmlFor="credit-debit-radio">
              Credit/Debit Card
          </label>
          <div className='d-flex align-items-center checkout-payment-icons-container gap-2'>
              <img src={visa} alt="visa-icon" />
              <img src={masterCard} alt="masterCard-icon" />
              <img src={amex} alt="amex-icon" />
          </div>
        </div>
      </div>

    <div className="credit-debit-form">
  {selectedPaymentMethod === 'card' && (
    <div className='d-flex flex-column gap-3'>
    <div className="input-group">
        <input type='text' className="form-control p-2" placeholder="Card number" />
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
  <div className='d-flex align-items-center justify-content-start gap-2 billing-address-radio-container'>
    <input
        className="form-check-input"
        type="radio"
        name="Billing Radio"
        id="billing-radio"
        checked={isBillingSelected}
        onClick={() => setIsBillingSelected(!isBillingSelected)}
    />
      <label className="form-check-label fw-medium" htmlFor="billing-radio">
        Use shipping address as billing address
      </label>
    </div>
    </div>
    )}
    </div>
    
    <div className='billing-form'>
    {!isBillingSelected && (
    <div className="delivery-form-section d-flex flex-column gap-3 mt-4">
        <h2>Billing Address</h2>
          <select className="form-select" aria-label="Default select example">
              <option selected>Country/Region</option>
              <option value="United States">United States</option>
        </select>
        <div className="row">
            <div className="col-12 mb-3 mb-sm-0 col-sm-6">
              <input type="text" className="form-control p-2" id="firstName" placeholder="First name" />
            </div>
            <div className="col-12 col-sm-6">
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
              <div className="mb-3 mb-sm-0 col-12 col-sm-4">
                  <input type="text" className="form-control p-2" id="city" placeholder="City" />
              </div>
              <div className="mb-3 mb-sm-0 col-12 col-sm-4">
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
          <div className="col-12 col-sm-4">
              <input type="number" className="form-control p-2" id="city" placeholder="Zip code" />
          </div>
        </div>
        <div className='input-group'>
          <input type="tel" className="form-control p-2" id="phone" placeholder="Phone" />
          <span className='input-group-text'><CiCircleQuestion /></span>
        </div>
      </div>
      )}
    </div>

    <div className='radio-btn-container'>
          <input
              className="form-check-input mx-2"
              type="radio"
              name="Payment"
              id="paypal-radio"
              checked={selectedPaymentMethod === 'paypal'}
              onChange={() => setSelectedPaymentMethod('paypal')}
          />
          <div className="d-flex align-items-center justify-content-between">
              <label className="form-check-label fw-bold" htmlFor="paypal-radio">
                  PayPal
              </label>
              <div className='d-flex align-items-center checkout-payment-icons-container gap-2'>
                  <img src={paypal} alt="visa-icon" />
              </div>
          </div>
      </div>
      {selectedPaymentMethod === 'paypal' && (
        <div className="payment-options-accordion">
            <p>You'll be redirected to PayPal to complete your purchase</p>
     </div>
      )}
        
    <div className='radio-btn-container'>
          <input
              className="form-check-input mx-2"
              type="radio"
              name="Payment"
              id="afterpay-radio"
              checked={selectedPaymentMethod === 'afterpay'}
              onChange={() => setSelectedPaymentMethod('afterpay')}
          />
          <div className="d-flex align-items-center justify-content-between">
              <label className="form-check-label fw-bold" htmlFor="afterpay-radio">
                  Afterpay
              </label>
              <div className='d-flex align-items-center checkout-payment-icons-container gap-2'>
                  <img src={afterPay} alt="visa-icon" />
              </div>
          </div>
      </div>
      {selectedPaymentMethod === 'afterpay' && (
        <div className="payment-options-accordion">
            <p>You'll be redirected to Afterpay to complete your purchase</p>
    </div>
      )}
          
    <div className='radio-btn-container'>
        <input
            className="form-check-input mx-2"
            type="radio"
            name="Payment"
            id="klarna-radio"
            checked={selectedPaymentMethod === 'klarna'}
            onChange={() => setSelectedPaymentMethod('klarna')}
        />
        <div className="d-flex align-items-center justify-content-between">
            <label className="form-check-label fw-bold" htmlFor="klarna-radio">
                Klarna-Pay flexibly
            </label>
            <div className='d-flex align-items-center checkout-payment-icons-container gap-2'>
                <img src={klarna} alt="visa-icon" />
            </div>
        </div>
      </div>
      {selectedPaymentMethod === 'klarna' && (
        <div className="payment-options-accordion">
            <p>You'll be redirected to Klarna-Pay flexibly to complete your purchase</p>
    </div>
      )}

  <div className='radio-btn-container'>
        <input
            className="form-check-input mx-2"
            type="radio"
            name="Payment"
            id="Cash-pay-radio"
            checked={selectedPaymentMethod === 'cashapp'}
            onChange={() => setSelectedPaymentMethod('cashapp')}
        />
        <div className="d-flex align-items-center justify-content-between">
            <label className="form-check-label fw-bold" htmlFor="Cash-pay-radio">
                Cash App Pay
            </label>
            <div className='d-flex align-items-center checkout-payment-icons-container gap-2'>
                <img src={masterCard} alt="visa-icon" />
            </div>
        </div>
    </div>
      {selectedPaymentMethod === 'cashapp' && (
        <div className="payment-options-accordion">
          <p>You'll be redirected to Cash App Pay to complete your purchase</p>
      </div>
      )}
   </div>

{(selectedPaymentMethod === 'paypal' || selectedPaymentMethod === 'afterpay' || selectedPaymentMethod === 'klarna' || selectedPaymentMethod === 'cashapp') && (
 <div>
    <div className='radio-btn-container'>
          <input
              className="form-check-input mx-2"
              type="radio"
              name="payment-option-shipping-radio"
              id="use-shipping-address"
              checked={isPaymentBillingSelected === 'shipping-address'}
              onClick={() => setIsPaymentBillingSelected('shipping-address')}
          />
            <label className="form-check-label fw-bold" htmlFor="use-shipping-address">    
              Same as shipping address
            </label>
    </div>
    <div className='radio-btn-container'>
          <input
              className="form-check-input mx-2"
              type="radio"
              name="payment-option-billing-radio"
              id="use-billing-address"
              checked={isPaymentBillingSelected === 'billing-address'}
              onClick={() => setIsPaymentBillingSelected('billing-address')}
          />
            <label className="form-check-label fw-bold" htmlFor="use-billing-address">
                Use a different billing address
            </label>
    </div>
  </div>
  )}  

  {isPaymentBillingSelected === 'billing-address' ? (
     <div className='billing-form'>
    <div className="delivery-form-section d-flex flex-column gap-3 mt-4">
        <h2>Billing Address</h2>
          <select className="form-select" aria-label="Default select example">
              <option selected>Country/Region</option>
              <option value="United States">United States</option>
        </select>
        <div className="row">
            <div className="col-12 mb-3 mb-sm-0 col-sm-6">
              <input type="text" className="form-control p-2" id="firstName" placeholder="First name" />
            </div>
            <div className="col-12 col-sm-6">
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
              <div className="mb-3 mb-sm-0 col-12 col-sm-4">
                  <input type="text" className="form-control p-2" id="city" placeholder="City" />
              </div>
              <div className="mb-3 mb-sm-0 col-12 col-sm-4">
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
          <div className="col-12 col-sm-4">
              <input type="number" className="form-control p-2" id="city" placeholder="Zip code" />
          </div>
        </div>
        <div className='input-group'>
          <input type="tel" className="form-control p-2" id="phone" placeholder="Phone" />
          <span className='input-group-text'><CiCircleQuestion /></span>
        </div>
      </div>
   </div>
  ): (
    <></>
  )}

  <div className='d-flex align-items-center justify-content-between checkout-left-footer'>
    <div className='d-flex flex-column'>
      <span>Save my information for a faster checkout</span>
      <small>By paying, you agree to create a Shop account subject to Shop’s Terms and Privacy Policy</small>
    </div>
    <span>Not now</span>
  </div>
    <p className='checkout-terms-conditions'>
      By placing your order you agree to Gymshark's <a href="#">Terms and Conditions</a>, <a href="#">Privacy Notice</a> and <a href="#">Cookie Policy</a>.
    </p>
  
  {selectedPaymentMethod === "paypal" ? (
   <button className='paypal-btn'>
        Pay with <b>PayPal</b>
   </button>
    ) : (
     <button className='pay-btn'>PAY NOW</button>
  )}
   
  </div>
 </form>
 </div>
  </div>
      
 <div 
   ref={checkoutRightRef}
   className={`d-none d-lg-block col-lg-6 checkout-right-main ${isSticky ? "active" : ""}`}>
  <div className="d-flex flex-column gap-3 checkout-right-section">
   <div className="d-flex align-items-center justify-content-between gap-2">
    <div className='d-flex align-items-center gap-2'>
      <div className='checkout-product-details-img-container'>
        <img src={img} alt="image" />
      </div>
      <div className='checkout-product-details-title'>
        <p className='mb-0'>Collective Mesh Wordmark Jersey - Core Olive/Haze Green/Soft White</p>
        <span className='checkout-product-details-size'>Extra Large</span>
      </div>
    </div>
      <div className='checkout-product-details-price'>$46.00</div>
  </div>
  <div className="checkout-discount-section">
    <div className="checkout-discount-form d-flex align-items-center justify-content-start gap-3">
      <input type="text" placeholder='Enter code' />
      <button>APPLY</button>
    </div>
  </div>

  <div className='referral-link'>
    <a href="#">Been referred by a friend?</a>
  </div>

  <div className="checkout-order-summary-section">
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
  </div> 
 </div>
 </>

  )
}

export default Checkout