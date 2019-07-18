import React from 'react';

import './styles.css';

const ProductDtails = () => (
  <div className="App">
    <div className="wrapper">
      <div className="container">
        <img
          src="//cdn.shopify.com/s/files/1/1047/6452/products/product_grande.png?v=1446769025"
          alt="Nike Roshe Run - Mint"
        />
        <div className="right">
          <h1 className="title">Im the fuking title</h1>
          <h3 className="description">Description title</h3>
          <h2 className="price">
            <span>$150</span> $114.99
          </h2>
          <h3>Description</h3>
          <p>
            With a highly breathable upper and casual silhouette, the Nike Roshe
            Run is definitely a perfect model for summer. For Spring/Summer 2012
            a fresh Mint Green colorway's version of this 'yet classic' pair is
            now available to order.
          </p>
          <div className="options">
            <div className="option">
              <h3>Qty</h3>
              <div className="select-container">
                <select>
                  <option>(1)</option>
                  <option>(2)</option>
                  <option>(3)</option>
                  <option>(4)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="actions">
            <a href="#" className="button">
              Add to Cart
            </a>
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
    </div>
  </div>
);

export default ProductDtails;
