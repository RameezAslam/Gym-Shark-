import React, { useState } from 'react'
import lightweight from '../images/single-product/lightweight.jpg'
import breathable from '../images/single-product/Breathable.jpg'
import featureOne from '../images/single-product/features-img-1.jpg'
import featureTwo from '../images/single-product/features-img-3.jpg'
import ProductSlider from './sub-components/ProductSlider'

const SingleProductDetails = () => {
    const [activeSection, setActiveSection] = useState("Designed");

  return (
    <div className='container-fluid px-3 px-lg-5 mt-5'>
        <div className="d-flex flex-nowrap align-items-center justify-content-start gap-2 overflow-x-auto">
            <button className={`section-btn ${activeSection === "Designed" ? "active" : ""}`} onClick={() => setActiveSection("Designed")}>Designed For</button>
            <button className={`section-btn ${activeSection === "Description" ? "active" : ""}`} onClick={() => setActiveSection("Description")}>Description</button>
            <button className={`section-btn ${activeSection === "Features" ? "active" : ""}`} onClick={() => setActiveSection("Features")}>Features</button>
        </div>
        <div className="row">
            <div className="col-12">
                {activeSection === "Designed" && (
                    <div className="row">
                       <div className="col-md-6 design-section">
                          <p className='design-section-main-heading'>Designed for lifting. This jersey is oversized and is made from lightweight, breathable mesh fabric.</p>
                          <div className='design-features d-flex flex-column gap-4'>
                             <div className="d-flex gap-2">
                                <div className='lightweight-img-container'>
                                    <img src={lightweight} alt="lightweight-img" />
                                </div>
                                <div>
                                    <h3>Lightweight</h3>
                                    <p>Super lightweight for a weightless feel.</p>
                                </div>
                             </div>
                             <div className="d-flex gap-2">
                                <div className='breathable-img-container'>
                                    <img src={breathable} alt="breathable-img" />
                                </div>
                                 <div>
                                    <h3>Breathable</h3>
                                    <p>Air and moisture flow through the fabric, allowing your body to breathe so you don't overheat.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-6">
                          <div className='designed-for-section-image-container'>
                                <img src={featureOne} alt="" />
                          </div>     
                       </div>
                    </div>
                )}
            </div>
            <div className="col-12">
                {activeSection === "Description" && (
                    <div className="description-section">
                        <b>BUILT TO MAKE HISTORY</b>
                        <p>Shape the new era in GSLC, the premium, golden-era-inspired lifter’s collection that’s built to make history.</p>
                        <p><br /></p>
                        <ul>
                            <li>Breathable mesh panels</li>
                            <li>Bold distressed wordmark on the front & small wordmark on back of neck</li>
                            <li>Contrast colour blocks</li>
                            <li>V-neck style</li>
                        </ul>
                        <p><br /></p>
                        <b>SIZE & FIT</b>
                        <ul>
                            <li>Oversized fit</li>
                            <li>Model is 5'11" and wears XL</li>
                        </ul>
                        <p><br /></p>
                        <b>MATERIALS & CARE</b>
                        <ul>
                            <li>100% Polyester</li>
                        </ul>
                        <p><br /></p>
                        <p><br /></p>
                        <p>SKU: A4C5K-EDFC</p>
                        <p><br /></p>
                        <p>Not sure what size to choose? Check out our <a href="#">Size Guide</a></p>
                    </div>
                )}
            </div>
            <div className="col-12 features-section">
                {activeSection === "Features" && (
                 <div className="row">
                    <div className="sp-product-slider">
                        <ProductSlider> 
                          <div className='d-flex flex-column gap-3'>
                            <div className="features-section-img-container">
                                <img src={featureOne} alt="features-image" />
                            </div>
                            <div>
                                <h3>BREATHABLE MESH FABRIC</h3>
                                <p>Looks sick & keeps you cool</p>
                            </div>      
                          </div> 
                          <div className='d-flex flex-column gap-3'>
                            <div className="features-section-img-container">
                                <img src={featureOne} alt="features-image" />
                            </div>
                            <div>
                                <h3>BREATHABLE MESH FABRIC</h3>
                                <p>Looks sick & keeps you cool</p>
                            </div>      
                          </div> 
                          <div className='d-flex flex-column gap-3'>
                            <div className="features-section-img-container">
                                <img src={featureOne} alt="features-image" />
                            </div>
                            <div>
                                <h3>BREATHABLE MESH FABRIC</h3>
                                <p>Looks sick & keeps you cool</p>
                            </div>      
                          </div> 
                        </ProductSlider>
                    </div>
                    <div className="col-md-4 sp-without-slider">
                    <div className='d-flex flex-column gap-3'>
                     <div className="features-section-img-container">
                        <img src={featureOne} alt="features-image" />
                      </div>
                      <div>
                          <h3>BREATHABLE MESH FABRIC</h3>
                          <p>Looks sick & keeps you cool</p>
                      </div>      
                     </div>   
                    </div>
                    <div className="col-md-4 sp-without-slider">
                      <div className='d-flex flex-column gap-3'>
                        <div className="features-section-img-container">
                           <img src={featureOne} alt="features-image" />
                         </div>
                         <div>
                           <h3>BOLD DISTRESSED GRAPHIC</h3>
                           <p>For a worn-in, vintage look</p>
                         </div>     
                      </div>   
                    </div>
                     <div className="col-md-4 sp-without-slider">
                       <div className='d-flex flex-column gap-3'>
                         <div className="features-section-img-container">
                            <img src={featureTwo} alt="features-image" />
                         </div>
                         <div>
                            <h3>BOXY SILHOUETTE</h3>
                            <p>Makes you look even bigger.</p>
                         </div>   
                      </div>   
                   </div>
                </div>
                )}
            </div>
        </div>   
    </div>
  )
}

export default SingleProductDetails;