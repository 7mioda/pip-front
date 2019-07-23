import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import { getAllProducts } from '../actions/productActions';
import Layout from './Layout';
import {openModal} from "../actions/uiActions";
import { addProduct } from '../actions/cartActions';

const withStyle = (component) => styled(component)`
font-family: Roboto, sans-serif;
margin: 50px 80px;
.wrapper {
    display: table-cell;
    height: 100%;
    padding: 20px;
    vertical-align: middle;
}
.container {
    position: relative;
    display: table;
    height: auto;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    border-radius: 15px;
}
.left {
    position: relative;
    width: 100%;
    font-size: 15px;
    background-color: #55e1c7;
    background: linear-gradient(to bottom, #84fbcd 0%, #4ac9cc 100%);
    background: -moz-linear-gradient(top, #84fbcd 0%, #4ac9cc 100%);
    background: -webkit-linear-gradient(top, #84fbcd 0%, #4ac9cc 100%);
    text-align: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    z-index: 0;
}
@media (min-width: 400px) {
    .left {
        display: table-cell;
        vertical-align: middle;
        width: 30%;
        height: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 15px;
    }
}
.left .logo {
    display: inline-block;
    height: 50px;
    width: 60px;
    margin: 20px 0 -20px 0;
    border-radius: 50%;
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%222%201.073%20196%2069.854%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M23.62%2070.898c-5.84-.23-10.618-1.83-14.353-4.798-.713-.567-2.412-2.267-2.98-2.984-1.517-1.904-2.546-3.76-3.233-5.815-2.114-6.33-1.026-14.64%203.11-23.76%203.544-7.807%209.012-15.55%2018.55-26.273%201.404-1.578%205.59-6.193%205.615-6.193.01%200-.22.396-.505.876-2.48%204.154-4.603%209.048-5.76%2013.283-1.855%206.797-1.632%2012.63.657%2017.153%201.58%203.116%204.286%205.814%207.33%207.307%205.33%202.61%2013.13%202.827%2022.66.632.655-.15%2033.16-8.78%2072.235-19.176C166.02%2010.752%20197.997%202.253%20198%202.26c.012.01-90.78%2038.86-137.91%2059.015-7.465%203.19-9.46%203.997-12.97%205.23-8.97%203.148-17.005%204.65-23.5%204.393z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center center;
}
@media (min-width: 400px) {
    .left .logo {
        position: absolute;
        top: 50px;
        left: 50%;
        margin: 0 0 0 -30px;
    }
}
.left .image-align {
    display: table;
    width: 100%;
    height: 100%;
}
.left .image-align .image {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
}
.left .image-align .image img {
    max-width: 100%;
    max-height: 250px;
}
@media (min-width: 400px) {
    .left .image-align .image img {
        position: relative;
        left: -22%;
        width: 115%;
        max-width: none;
        max-height: none;
    }
}
.left .pagination {
    padding-bottom: 20px;
}
@media (min-width: 400px) {
    .left .pagination {
        bottom: 50px;
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        margin-bottom: 0;
    }
}
.left .pagination input[type="radio"] {
    display: none;
}
.left .pagination label {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: #188571;
    border-radius: 50%;
    margin: 0 5px 0 0;
    font-size: 0;
    z-index: 1;
    cursor: pointer;
}
.left .pagination input[type="radio"]:checked + label {
    background: #fff;
}
.right {
    position: relative;
    width: 100%;
    padding: 50px 40px;
    background-color: #fff;
    z-index: 1;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
@media (min-width: 400px) {
    .right {
        display: table-cell;
        vertical-align: middle;
        height: 100%;
        border-bottom-left-radius: 0;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}
.right .description {
    margin-bottom: 5px;
    font-style: italic;
    color: #bababa;
}
.right .price {
    color: #ff3d64;
    letter-spacing: -0.5px;
}
.right .price span {
    color: #333;
    text-decoration: line-through;
    margin-right: 5px;
}
.right .options {
    display: table;
    table-layout: auto;
    width: 100%;
    margin-bottom: 20px;
}
@media (min-width: 600px) {
    .right .options {
        margin-bottom: 55px;
    }
}
.right .options h3 {
    margin-bottom: 10px;
}
.right .options .option {
    width: 100%;
    margin: 0 0 20px;
}
@media (min-width: 600px) {
    .right .options .option {
        display: table-cell;
        min-width: 115px;
        margin: 0 20px 0 0;
        padding: 0 0 0 20px;
        border-left: solid 2px #eee;
    }
    .right .options .option:first-child {
        padding-left: 0;
        border-left: none;
    }
}
.right .options .option input[type="radio"] {
    display: none;
}
.right .options .option label {
    position: relative;
    display: inline-block;
    height: 28px;
    width: 28px;
    border: solid 4px #fff;
    border-radius: 50%;
    margin: 0 3px 0 0;
    font-size: 0;
    z-index: 3;
    cursor: pointer;
}
.right .options .option label.mint {
    background: #55e1c7;
}
.right .options .option label.yellow {
    background: #ffee71;
}
.right .options .option label.purple {
    background: #6654af;
}
.right .options .option label.black {
    background: #000;
}
.right .options .option label.grey {
    background: #bababa;
}
.right .options .option input[type="radio"]:checked + label.mint:after {
    border: solid 2px #55e1c7;
}
.right .options .option input[type="radio"]:checked + label.yellow:after {
    border: solid 2px #ffee71;
}
.right .options .option input[type="radio"]:checked + label.purple:after {
    border: solid 2px #6654af;
}
.right .options .option input[type="radio"]:checked + label.black:after {
    border: solid 2px #000;
}
.right .options .option input[type="radio"]:checked + label.grey:after {
    border: solid 2px #bababa;
}
.right .options .option input[type="radio"]:checked + label:after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    z-index: -99;
}
.right .options .option .select-container {
    font-size: 15px;
    position: relative;
    display: inline-block;
}
@media (min-width: 400px) {
    .right .options .option .select-container {
        display: inline-block;
    }
}
.right .options .option .select-container select {
    width: 100%;
    padding-right: 20px;
    background: transparent;
    border: 0;
    font-family: "Fjalla One", "Helvetica Neue", Arial, sans-serif;
    font-size: inherit;
    color: #bababa;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: none;
    box-shadow: none;
}
.right .options .option .select-container select::-ms-expand {
    display: none;
}
.right .options .option .select-container::after {
    content: "\\25BE";
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
}
.action {
    position: relative;
}
.button {
    font-size: 15px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 30px;
    padding: 15px 25px 15px 65px;
    background: #ff3d64;
    border-radius: 5px;
    border: none;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
}
@media (min-width: 400px) {
    .button {
        margin: 0;
    }
}
.button:hover {
    text-decoration: underline;
}
.button:before {
    content: "";
    position: absolute;
    top: 15px;
    left: 20px;
    height: 25px;
    width: 30px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2247.736%22%20height%3D%2241.916%22%3E%3Ccircle%20cx%3D%2216.126%22%20cy%3D%2238.458%22%20r%3D%223.458%22%20fill%3D%22%23FFF%22%2F%3E%3Ccircle%20cx%3D%2235.876%22%20cy%3D%2238.458%22%20r%3D%223.458%22%20fill%3D%22%23FFF%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M38.5%2029H16.52c-.332-.007-.78-.11-.987-.22.018-.35.284-1.726%202.924-4.78h19.28l10-20H10.488c.315-.42.51-.935.51-1.5C11%201.12%209.88%200%208.5%200h-6C1.12%200%200%201.12%200%202.5S1.12%205%202.5%205h4.4l7.053%2016.58c-2.28%202.797-4.332%206.27-3.01%209.266C12.297%2033.904%2016.04%2034%2016.494%2034H38.5c1.38%200%202.5-1.12%202.5-2.5S39.88%2029%2038.5%2029z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.share {
    font-size: 15px;
    display: block;
}
@media (min-width: 400px) {
    .share {
        float: right;
        position: relative;
        display: inline-block;
    }
    .share:hover ul {
        display: block;
    }
}
.share .share-icon {
    display: inline-block;
    font-weight: 600;
}
@media (min-width: 400px) {
    .share .share-icon {
        height: 33px;
        width: 30px;
        margin: 10px 0 0 10px;
        background-color: transparent;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2238%22%20height%3D%2242.6%22%3E%3Cpath%20fill%3D%22%23BABABA%22%20d%3D%22M35.4%2032.7c-2-1.2-4.6-.8-6.3.8L10.5%2022.7c.2-1%20.2-1.8%200-2.8L29%209c1.8%201.7%204.3%202%206.4%201%202.5-1.6%203.3-4.8%202-7.4C35.7%200%2032.5-.8%2030%20.6c-2%201.3-3%203.8-2.4%206L8.8%2017.4c-1.4-1.3-3.6-1.7-5.5-1-2.7%201.2-4%204.3-3%207%201.2%202.7%204.3%204%207%202.8.6-.2%201-.6%201.6-1L27.6%2036c-.6%202.2.3%204.7%202.4%206%202.7%201.3%206%20.5%207.3-2%201.5-2.6.6-5.8-2-7.3z%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        text-indent: -9999px;
    }
}
.share ul {
    display: inline-block;
}
@media (min-width: 400px) {
    .share ul {
        display: none;
        position: absolute;
        top: 0;
        right: 100%;
        margin-left: -20px;
        padding: 10px 20px;
        background-color: #fff;
        border-radius: 10px;
    }
    .share ul:after {
        content: "";
        position: absolute;
        display: block;
        top: 22px;
        left: 100%;
        height: 10px;
        width: 10px;
        margin-left: -5px;
        background-color: #fff;
        transform: rotate(45deg);
    }
}
.share ul li {
    display: inline-block;
}
.share ul li a {
    color: inherit;
    text-decoration: none;
}
.share ul li a:hover {
    text-decoration: underline;
}
`;

const ProductDetails = ({ product, getAllProducts, isAuthenticated, addProduct, openModal, className }) => {
  useEffect(() => {
    getAllProducts();
    return () => undefined;
  }, [getAllProducts]);
  console.log(product);
  return (
    <Layout>
      <div className={`${className}`}>
        <div className="left">
          <img src={product.image || "https://ryanacademy.ie/wp-content/uploads/2017/08/placeholder-Copy-5.png"} alt=""/>
        </div>
        <div className="right">
          <h1 className="title">{product.name}</h1>
          <h2 className="price">
            {product.price} TND
          </h2>
          <h3>Description</h3>
          <p>
            {product.description}
          </p>
          <div className="actions">
            { isAuthenticated ? <a href="#" className="button" onClick={() =>  addProduct({ ...product, quantity: 1 })}>
              Ajouter au panier
            </a>
            : <a href="#" className="button" onClick={() => openModal('login')}>
                  Login
                </a>
            }
            <div className="share">
              <span className="share-icon">Share:</span>
              <ul>
                <li>
                  <a href="#" className="facebook">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    Google+
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { productId },
    },
  }
) => ({
  product:
    state.products.products.find(
      (product) => product.id === parseFloat(productId)
    ) || {},
  isAuthenticated: state.auth.isAuthenticated,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getAllProducts, addProduct, openModal }
  ),
  withStyle
)(ProductDetails);
