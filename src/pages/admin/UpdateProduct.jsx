import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {updateProduct, getAllProducts} from '../../actions/productActions';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik/dist/index';
import AdminLayout from './AdminLayout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import moment from "moment";
import {getAllCategories} from "../../actions/categoryActions";

const withStyle = component => styled(component)`
  width: 100%;
  height: 800px;
  margin: 0 auto;
  position: relative;
  font-family: Roboto, sans-serif;
  
  input {
    margin: 10px 0;
  }
  
  .landing-search__btn {
    float: right;
    padding-top: 1px;
    padding-bottom: 1px;
    
  }
  
  .landing-search {
      width: 80%;
      float: right;
  }


  .date-picker {
    border: 1px solid rgba(128, 128, 128, 0.32);
    width: 100%;
    color: grey;
    border-radius: 5px;
    height: 40px;
  }
  .react-datepicker-wrapper {
    width: 50% !important;
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

const UpdateProduct = ({ updateProduct, categories, getAllProducts, getAllCategories ,product, className, history }) => {
    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, []);
  const [image, setImage] = useState({});
    const [discountBeginDate, setDiscountBeginDate] = useState(new Date());
    const [discountEndDate, setDiscountEndDate] = useState(new Date());
    console.log(product);
  return (
    <AdminLayout>
      <div className={`${className}`}>
        { product && <Formik
          initialValues={{
            ...product,
            category: 1,
          }}
          onSubmit={values => {
            updateProduct({ ...values, beginDate: moment(discountBeginDate).format('YYYY-MM-DD HH:mm:ss'),
                endDate: moment(discountEndDate).format('YYYY-MM-DD HH:mm:ss'),  image, seller: 1 });
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
                      placeholder="Nom du produit"
                      name="name"
                      value={values.name}
                      id="search-input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="search-input">
                    <Input
                      type="text"
                      highlighted
                      autoCapitalize
                      placeholder="Prix"
                      name="price"
                      value={values.price}
                      id="search-input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="search-input">
                    <Input
                      type="text"
                      highlighted
                      autoCapitalize
                      placeholder="Discount"
                      name="discount"
                      value={values.discount}
                      id="search-input"
                      onChange={handleChange}
                    />
                  </div>
                    <div className="search-input">
                        <DatePicker
                            selected={discountBeginDate}
                            onChange={setDiscountBeginDate}
                            className="date-picker"
                            locale="fr"
                            showTimeSelect
                            dateFormat="Pp"
                        />
                        <DatePicker
                            selected={discountEndDate}
                            onChange={setDiscountEndDate}
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
                            placeholder="Description"
                            name="description"
                            value={values.description}
                            id="search-input"
                            onChange={handleChange}
                            rows="3"
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
                      onChange={({ target: { files } }) => setImage(files[0])}
                    />
                  </div>
                  <div className="half" />
                  <div className="half">
                    <Button
                      animated
                      rounded
                      color="white"
                      background="#ff5a5f"
                      classNames={['landing-search__btn']}
                      onClick={handleSubmit}
                    >
                      Ajouter
                    </Button>
                  </div>
                </form>
              </div>
            );
          }}
        </Formik>}
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state, {
    match: {
        params: { productId },
    },
}) => ({
  categories: state.categories.categories,
  product: state.products.products.find(({ id }) =>  id === parseFloat(productId)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { updateProduct, getAllProducts, getAllCategories }
  ),
    withStyle
)(UpdateProduct);
