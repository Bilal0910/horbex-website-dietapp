import React from 'react';
import './Card.css';

function Card({img, rating, reviewCount, country, title, price, openSpots}) {

  let badgeText

  if (openSpots === 0 ) {
    badgeText = "SOLD OUT"
  } else if (openSpots != 0) {
    badgeText = "AVAILABLE"
  }

  return (
    <div className="card">
      {badgeText && <div className='card-badge'>{badgeText}</div>}
    <img src={img} alt='card' width="130px" className="card-image" />
    <div className="card-stats">
        <p className='card-star'>★</p>
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{country}</span>
    </div>
    <p className='knowledge'>{title}</p>
    <p className='pricetag'><span className="bold">From {price}</span> </p>
</div>


  )
}

export default Card
