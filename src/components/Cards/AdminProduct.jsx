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
    <div className={`${className}`}>
      <div className="page-inner">
        {selected && <div className="selected" />}
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img
                {...rest}
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
                <div className="a-size">{description}</div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner" />
              </div>

              <a className="cart" href="#">
                <span className="price">{price} TND</span>
                {isAuthenticated ? (
                  <span className="add-to-cart">
                    <span
                      className="txt"
                      onClick={() =>
                        addToCartProduct({ ...product, quantity: 1 })
                      }
                    >
                      Ajouter au Panier
                    </span>
                  </span>
                ) : (
                  <span className="add-to-cart">
                    <span className="txt" onClick={() => openModal('product')}>
                      Login
                    </span>
                  </span>
                )}
              </a>
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
