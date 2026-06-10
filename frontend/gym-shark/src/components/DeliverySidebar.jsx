import React from 'react'
import { IoClose } from "react-icons/io5";
import '../css/Sidebar.css'

const DeliverySidebar = ({ onClose }) => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <h5 className='mb-0'>DELIVERY & RETURNS</h5>
        <button className='close-btn' onClick={onClose}>
          <IoClose />
        </button>
      </div>
      <div className='sidebar-content delivery-sidebar-content'>
        <div className='sidebar-content-bold'>
           <b>Standard Shipping - $5 USD</b>
        </div>
          <ul>
              <li>Estimated Delivery 3-6 working days. *Once your order has shipped.</li>
              <li>Free Standard Delivery on orders $75</li>
          </ul>
          <div className="sidebar-content-bold">
              <b>Express Shipping - $15 USD</b>
          </div>
          <ul>
              <li>Estimated delivery 3 working days. *Order by 2pm for same-day processing.</li>
          </ul>
          <div className="sidebar-content-bold">
              <b>Returns</b>
          </div>
          <ul>
              <li>Free 30-Day Return Policy, excluding final sale items, underwear, bottles, and swimwear.</li>
          </ul>
      </div>
    </div>
  )
}

export default DeliverySidebar