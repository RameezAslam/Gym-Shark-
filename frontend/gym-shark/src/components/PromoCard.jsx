import React from 'react'

const PromoCard = ({ img, caption }) => {
  return (
     <figure className="promo-card">
        <div className="img-wrapper">
           <img src={img} alt={caption} />
        </div>
        <figcaption>{caption}</figcaption>
     </figure>
  )
}

export default PromoCard