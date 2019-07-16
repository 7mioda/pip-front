import React from 'react';
import withStyle from './withStyle';
import Button from '../Button/Button';

const ProductCard = ({
  className,
  product: { image, name, description, price },
  ...rest
}) => (
  <div className={`${className}`} {...rest}>
    <div className="card__slider">
      <img src={image || '/img/standard.jpg'} alt="" />
    </div>
    <div className="card__cover">
      <button className="card__button">
        <Button outline> Details </Button>
      </button>
    </div>
    <div className="card__body">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  </div>
);

export default withStyle(ProductCard);
