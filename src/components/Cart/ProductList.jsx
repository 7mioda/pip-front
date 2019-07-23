import React from 'react';

//import './style.css';

function formatCurrency(value) {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

function ProductList(props) {
  return (
    <section className="container">
      <ul className="products">
        {props.products.map(product => (
          <li className="row" key={product.id}>
            <div className="col left">
              <div className="thumbnail">
                <a href="#">
                  <img
                    src={
                      product.image ||
                      'https://ryanacademy.ie/wp-content/uploads/2017/08/placeholder-Copy-5.png'
                    }
                    alt={product.name}
                  />
                </a>
              </div>
              <div className="detail">
                <div className="name">
                  <a href="#">{product.name}</a>
                </div>
                <div className="description">{product.description}</div>
                <div className="price">{formatCurrency(product.price)}</div>
              </div>
            </div>

            <div className="col right">
              <div className="quantity">
                <input
                  type="number"
                  className="quantity"
                  step="1"
                  value={product.quantity}
                  onChange={({ target: { value } }) =>
                    props.onChangeProductQuantity({
                      ...product,
                      quantity: value,
                    })
                  }
                />
              </div>

              <div className="remove">
                <svg
                  onClick={() => props.onRemoveProduct(product.id)}
                  version="1.1"
                  className="close"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  enableBackground="new 0 0 60 60"
                >
                  <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
