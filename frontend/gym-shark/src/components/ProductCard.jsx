import React from 'react'
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const ProductCard = ({ productImg, productBoldName, productName, productText, productRating, productInfo, productPrice, productColor }) => {
  return (
    <div className='d-flex flex-column gap-2 product-card'>
      <Link to='/product/:id'>
        <div className='product-img-container'>
            <img src={productImg} className='product-img' alt="Men Shorts" />
            <div className='size-chart-container'> 
              <div className="size-chart">
                  <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
              </div>
           </div>
        </div>
     </Link> 
        <div className="d-flex flex-column gap-2 justify-content-start product-body">

          {productBoldName && (
             <h5>{productBoldName}</h5>
          )}   
          {productText && (
              <span className='product-card-text'>{productText}</span>
          )}

          <div className="d-flex flex-column flex-lg-row justify-content-start align-items-start justify-content-lg-between align-items-lg-center">
              <span className='product-card-name order-2 order-lg-1'>{productName}</span>

              {productRating && (
                <div className='d-flex align-items-center order-1 order-lg-2'>
                    <IoMdStar />
                    <span className='product-card-rating'>{productRating}</span>
                </div>
              )}
          </div>
          
            <span className='product-card-info'>{productInfo}</span>
            {productColor && (
                <span className='product-card-color'>{productColor}</span>
            )}
            <span className='product-card-price'>{productPrice}</span>
         </div> 
   </div>
  )
}

export default ProductCard