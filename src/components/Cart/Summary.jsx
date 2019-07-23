import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../actions/OrderActions';
import moment from "moment";

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
  const {
    tax = 2, discount = 0, products, addOrder,
  } = props;
  const total = subTotal - discount + tax;


  const submitOrder = () => {
    const orderLines = products.map((
      { id, quantity, price }
    ) => ({ product: id, quantity, price }));
    console.log('totalPrice', total);
    addOrder({
      totalPrice: total, note: 'a', user: 3, orderLines, createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    });
  };

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
      <div className="checkout">
        <button type="button" onClick={() => submitOrder()}>Check Out</button>
      </div>
    </section>
  );
};


export default connect(null, { addOrder })(Summary);
