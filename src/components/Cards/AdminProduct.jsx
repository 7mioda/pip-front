import React from 'react';
import withStyle from './withStyleAdminProduct';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { openModal } from '../../actions/uiActions';

const ProductCard = ({
  className,
  selected,
  product,
  openModal,
  addToCartProduct,
  isAuthenticated,
  ...rest
}) => {
  const {
    id,
    name,
    description,
    price,
    seller: { idSeller, sellerName },
    image,
  } = product;
  return (
    <div className={`${className}`} {...rest}>
      <div className="page-inner">
        {selected && <div className="selected" />}
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img
                className="img"
                src={
                  'https://ryanacademy.ie/wp-content/uploads/2017/08/placeholder-Copy-5.png'
                }
                alt=""
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{name}</span>
                  <span className="p-company">{sellerName}</span>
                </div>
                <div className="a-size">{price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose(
  connect(
    null,
    { openModal }
  ),
  withStyle
)(ProductCard);
