import React from 'react';

function Card(props) {
  const {image, title, rating, description} = props;
  return (
    <div class="card">
      <img class="card-img-top" src={image} alt="" />
      <div>{rating}</div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
