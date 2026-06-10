import React from 'react'
import { IoClose } from "react-icons/io5";
import '../css/Sidebar.css'
import imgOne from '../images/single-product/small-img-1.jpg'

const LookSidebar = ({ onClose }) => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <div className='d-flex flex-column gap-2 mb-4'>
            <h5 className='mb-0'>GET THE LOOK</h5>
            <p>2 Items</p>
        </div>
        <button className='close-btn' onClick={onClose}>
          <IoClose />
        </button>
      </div>
      <div className='sidebar-content d-flex flex-column gap-4'>
        <div>
        <div className='d-flex align-items-center justify-content-start gap-3 mb-3'>
            <div className='sidebar-img-container'><img src={imgOne} alt="img" /></div>
            <div className='d-flex flex-column sidebar-img-content'>
                <p className='mb-0'>Collective Mesh Wordmark Jersey</p>
                <span>Core Olive/Haze Green/Soft White</span>
                <span>$46</span>
            </div>
         </div>
         <div className="sidebar-select-size d-flex justify-content-between align-items-center">
              <p className='mb-0'>Select a size</p>
              <a href="#">Size Guide</a>
          </div>
          <div className='sidebar-size-chart-container'> 
              <div className="sidebar-size-chart">
                  <span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span><span>3XL</span>
              </div>
           </div>
           <div className="sidebar-add-to-cart-btn">
             ADD TO BAG
           </div>
        </div>

        <div>
          <div className='d-flex align-items-center justify-content-start gap-3 mb-3'>
            <div className='sidebar-img-container'><img src={imgOne} alt="img" /></div>
            <div className='d-flex flex-column sidebar-img-content'>
                <p className='mb-0'>Collective Mesh Wordmark Jersey</p>
                <span>Core Olive/Haze Green/Soft White</span>
                <span>$46</span>
            </div>
         </div>
         <div className="sidebar-select-size d-flex justify-content-between align-items-center">
              <p className='mb-0'>Select a size</p>
              <a href="#">Size Guide</a>
          </div>
          <div className='sidebar-size-chart-container'> 
              <div className="sidebar-size-chart">
                  <span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span><span>3XL</span>
              </div>
           </div>
           <div className="sidebar-add-to-cart-btn">
             ADD TO BAG
           </div>
          </div>
       </div>
    </div>
  )
}

export default LookSidebar