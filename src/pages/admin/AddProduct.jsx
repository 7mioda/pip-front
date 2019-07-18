import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addProduct } from '../../actions/productActions';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik/dist/index';
import AdminLayout from './AdminLayout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddProduct = ({ addProduct, categories, history }) => {
  const [image, setImage] = useState({});
  console.log(categories);
  return (
    <AdminLayout>
      <p>Add Product</p>
      <div style={{ width: '500px', marginLeft: '150px' }}>
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: '',
            image: '',
            discountEndDate: new Date(),
            discountBeginDate: new Date(),
            discount: 1,
            status: '',
            category: 1,
          }}
          onSubmit={values => {
            addProduct({ ...values, image });
            history.push('/plantify.it/admin-seller/products');
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
                      classNames={['text-field']}
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
                      classNames={['text-field']}
                      autoCapitalize
                      placeholder="Description"
                      name="description"
                      value={values.description}
                      id="search-input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="search-input">
                    <Input
                      type="text"
                      highlighted
                      classNames={['text-field']}
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
                      classNames={['text-field']}
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
                      selected={values.discountBeginDate}
                      name="discountBeginDate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="search-input">
                    <DatePicker
                      selected={values.discountEndDate}
                      name="discountEndDate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="search-input">
                    <Input
                      type="file"
                      highlighted
                      classNames={['text-field']}
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
        </Formik>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { addProduct }
  )
)(AddProduct);
