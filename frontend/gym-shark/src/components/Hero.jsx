import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid hero-container'>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h3>GET AN EXTRA 30% OFF* LAST CHANCE STYLES</h3>
            <span>Shop our Last Chance styles and drop code EXTRA30 at checkout for an extra 30% off*.</span>
             <span>*selected styles only</span>
             <div className="d-flex align-items-center justify-content-center gap-3">
                <span className='fw-bold span-animated-underline'>Shop Women's</span><span className='fw-bold span-animated-underline'>Shop Men's</span>
             </div>
        </div>
    </div>
  )
}

export default Hero