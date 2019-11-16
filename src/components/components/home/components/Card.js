import React from 'react';

function Card(props) {
  const {image, title, rating, description, creator} = props;
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="" />
      <div>{rating}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-creator">{creator}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
