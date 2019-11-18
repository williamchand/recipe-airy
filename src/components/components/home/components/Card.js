import React from 'react';
import { uCard, uCardImgTop, uCardRating, uCardRatingBlock, uCardBody, uCardTitle, uCardCreator, uCardText, uHide } from './styles';

function Card(props) {
  const {image, title, rating, description, creator} = props;
  return (
    <div className={uCard}>
      <img className={uCardImgTop} src={image} alt="" />
      <div className={rating > 4 ? uCardRating : uHide}><div className={uCardRatingBlock}>{rating.toFixed(1)}</div></div>
      <div className={uCardBody}>
        <div className={uCardTitle}><b>{title}</b></div>
        <div className={uCardCreator}>By: {creator}</div>
        <div className={uCardText}>{description}</div>
      </div>
    </div>
  );
}

export default Card;
