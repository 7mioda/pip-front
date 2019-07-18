import React from 'react';

function formatCurrency(value) {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'TND',
  });
}

const Summary = (props) => {
  const subTotal = props.products.reduce(
    (total, product) => total + product.price * +product.quantity,
    0
  );
  const { tax = 2, discount = 0 } = props;
  const total = subTotal - discount + tax;

  const itemCount = props.products.reduce(
    (quantity, product) => quantity + +product.quantity,
    0
  );

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={props.onEnterPromoCode} />
        <button type="button" onClick={props.checkPromoCode} />
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <span className="count">{itemCount} items in the bag</span>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};

export default Summary;
