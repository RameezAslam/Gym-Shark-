import React from 'react'


const Banner = ({bannerImg, bannerHeading, bannerText, bannerBtn, bannerBtnTwo}) => {
  return (
    <div className='container-fluid p-0 mt-2'>
      <div className='banner-container'>
        <img src={bannerImg} className='w-100 banner-img' alt="banner-img" />
        <div className='banner-text-wrapper'>
            <div className="banner-text-container">
                <h2>{bannerHeading}</h2>
                <p>{bannerText}</p>
                <div className="d-flex align-items-center gap-3">
                    <button className='banner-shop-btn'>{bannerBtn}</button>
                    {bannerBtnTwo && (
                       <button className='banner-shop-pink-btn'>{bannerBtnTwo}</button>
                    )}  
                </div>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Banner