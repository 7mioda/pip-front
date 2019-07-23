import React from 'react';
import { withRouter } from 'react-router-dom';

import { compose } from 'ramda';
import Carousel from '../Carousel/Carousel';
import withStyle from './withStyleFlash';

//onClick={() => history.push(`/plantify.it/flash-sales/${flashSale.id}`)}
const FlashSaleCard = ({
  className, flashSale, history,
}) => (
  <div className={`${className}`} >
    <div className="card-slider">
      <Carousel>
        {
          flashSale.products.map((product) => <img src={product.image || 'https://ryanacademy.ie/wp-content/uploads/2017/08/placeholder-Copy-5.png'} onClick={() => history.push(`/plantify.it/flash-sales/${flashSale.id}`)} alt="" />)
        }
      </Carousel>
    </div>
    <div className="card-body">
      <h3>
        {flashSale.products.length} produits
      </h3>
      <h2>{flashSale.name}</h2>
      <p>
        {flashSale.price || ' '} TND
        <span className="currency euro" />
      </p>
    </div>
  </div>
);

export default compose(
  withStyle, withRouter
)(FlashSaleCard);
