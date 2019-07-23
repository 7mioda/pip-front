import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import moment from 'moment';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik/dist/index';
import AdminLayout from './AdminLayout';
import { addFlashSale, updateFlashSale } from '../../actions/flashSaleActions';
import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import { getAllProducts } from '../../actions/productActions';
import fr from 'date-fns/locale/fr';
import ProductCard from '../../components/Cards/AdminProduct';
registerLocale('fr', fr);

const withStyle = component => styled(component)`
  width: 100%;
  height: 800px;
  position: relative;
  font-family: Roboto, sans-serif;
  .listing {
    width: 65%;
    color: #484848;
  }

  .listing > p {
    padding: 20px;
    font-weight: 300;
    font-size: 15px;
  }

  .listing > p::after {
    content: '';
    display: block;
    margin-top: 20px;
    height: 0.5px;
    background: #f4f4f4;
  }

  .listing-text-box {
    padding: 50px 20px 30px 20px;
  }

  .listing-text-box h1 {
    font-weight: 500;
    font-size: 24px;
    color: rgb(72, 72, 72);
  }

  .search-input {
    margin: 10px 0;
    display: flex;
  }

  .listing-text-box h4 {
    font-weight: 300;
    color: rgb(72, 72, 72);
  }

  .my-map-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
  }

  .my-map {
    width: 100%;
    position: sticky;
    top: 0;
    margin-left: 50px;
    padding: 15px;
    border: 1px solid #e1e1e1;
    overflow-y: hidden;
  }

  .date-picker {
    border: 1px solid rgba(128, 128, 128, 0.32);
    width: 100%;
    color: grey;
    border-radius: 5px;
    height: 40px;
  }
  .react-datepicker-wrapper {
    width: 100% !important;
  }

  .react-datepicker__input-container {
    width: 100% !important;
  }

  .textarea-input {
    border: 1px solid rgba(128, 128, 128, 0.32);
    width: 100%;
    color: grey;
    border-radius: 5px;
    padding: 20px;
    font-family: Cambay, sans-serif;
    transition: all ease-in 0.3s;
    outline: none;
  }

  textarea {
    resize: none;
  }
`;

const UpdateFlashSale = ({
                           updateFlashSale,
  flashSale,
  getAllProducts,
  products,
  className,
  history,
}) => {
  useEffect(() => {
    getAllProducts();
    return () => undefined;
  }, [getAllProducts]);
  const [image, setImage] = useState({});
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedProducts, setProducts] = useState([]);

  useEffect(() => {
    if(flashSale){
      setProducts([...flashSale.products.map(({ id }) => id)]);
    }
    return () => undefined;
  }, [flashSale]);
  const toggleSelected = product => {
    if (selectedProducts.includes(product.id)) {
      setProducts(selectedProducts.filter((id) => product.id !== id));
    } else {
      setProducts([...selectedProducts, product.id]);
    }
  };
  console.log('selectedProducts', selectedProducts);
  const productsView = products.map(product =>
    selectedProducts.includes(product.id) ? (
      <ProductCard
        key={product.id}
        selected
        product={product}
        number="3"
        onClick={() => toggleSelected(product)}
      />
    ) : (
      <ProductCard key={product.id} number="3"  product={product} onClick={() => toggleSelected(product)} />
    )
  );
  return (
    <AdminLayout>
      { flashSale && <div className={`${className}`}>
        <div className="my-map-container">
          <div className="my-map">
             <Formik
              initialValues={{ name: flashSale.name, description: flashSale.description, price: flashSale.price }}
              onSubmit={values => {
                updateFlashSale({
                  ...values,
                  beginDate: moment(beginDate).format('YYYY-MM-DD HH:mm:ss'),
                  endDate: moment(endDate).format('YYYY-MM-DD HH:mm:ss'),
                  image,
                  products: selectedProducts,
                  id: flashSale.id
                });
              }}
            >
              {props => {
                const { values, handleChange, handleSubmit } = props;
                return (
                  <div className="landing-search">
                    <form className="add-banker__form">
                      <div className="search-input">
                        <Input
                          type="text"
                          highlighted
                          autoCapitalize
                          placeholder="Nom du vente flash"
                          name="name"
                          value={values.name}
                          id="search-input"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="search-input">
                        <DatePicker
                          selected={beginDate}
                          onChange={setBeginDate}
                          className="date-picker"
                          locale="fr"
                          showTimeSelect
                          dateFormat="Pp"
                        />
                      </div>
                      <div className="search-input">
                        <DatePicker
                          selected={endDate}
                          onChange={setEndDate}
                          className="date-picker"
                          locale="fr"
                          showTimeSelect
                          dateFormat="Pp"
                        />
                      </div>
                      <div className="search-input">
                        <textarea
                          className="textarea-input textarea-input--grey"
                          cols="30"
                          name="description"
                          onChange={handleChange}
                          placeholder="Déscription..."
                          rows="3"
                        />
                      </div>
                      <div className="search-input">
                        <Input
                          type="text"
                          highlighted
                          autoCapitalize
                          placeholder="Prix du vente flash"
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="search-input">
                        <Input
                          type="file"
                          highlighted
                          autoCapitalize
                          placeholder="Nom"
                          name="photo"
                          value={image.filename}
                          id="search-input"
                          onChange={({ target: { files } }) =>
                            setImage(files[0])
                          }
                        />
                      </div>
                      <div className="half" />
                      <div className="half">
                        <Button
                          animated
                          rounded
                          color="white"
                          background="#ff5a5f"
                          style={{
                            float: 'right',
                            marginTop: '10px',
                            height: '40px',
                          }}
                          onClick={handleSubmit}
                        >
                          Modifier
                        </Button>
                      </div>
                    </form>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="listing" style={{ height: '100%' }}>
          {productsView}
        </div>
      </div>}
    </AdminLayout>
  );
};

const mapStateToProps = (state, {
  match: {
    params: { flashSaleId },
  },
}) => ({
  products: state.products.products,
  flashSale: state.flashSales.flashSales.find(({ id }) => id === parseFloat(flashSaleId)),
});


export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { updateFlashSale, getAllProducts }
  ),
  withStyle
)(UpdateFlashSale);
