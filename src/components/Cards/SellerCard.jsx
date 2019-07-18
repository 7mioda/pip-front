import React from 'react';
import withStyle from './withStyleSeller';

const SellerCard = ({ className, seller = {}, ...rest }) => (
  <div className={`${className}`} {...rest}>
    <div className="card">
      <h2>Plantify.it</h2>
      <i className="fas fa-arrow-right"></i>
      <p>Plantify.it.</p>
      <div className="pic"></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-github"></i>
      </div>
      <button></button>
    </div>
  </div>
);

export default withStyle(SellerCard);
