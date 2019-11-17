import React from 'react';
import { uCard, uCardImgTop, uCardRating, uCardBody, uCardTitle, uCardCreator, uCardText } from './styles';

function Card(props) {
  const {image, title, rating, description, creator} = props;
  return (
    <div className={uCard}>
      <img className={uCardImgTop} src={image} alt="" />
      <div className={uCardRating}>{rating}</div>
      <div className={uCardBody}>
        <h5 className={uCardTitle}>{title}</h5>
        <h5 className={uCardCreator}>{creator}</h5>
        <p className={uCardText}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
