import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllProducts, removeProduct } from '../../actions/productActions';
import AdminLayout from './AdminLayout';
import {
  Table, Cell, Row, Head,
} from '../../components/Table';
import Button from '../../components/Button/Button';

const ProductsList = ({
  getAllProducts, products, removeProduct, history,
}) => {
  useEffect(() => {
    getAllProducts();
    return () => undefined;
  }, [getAllProducts]);
  const productsView = products.map(
    ({
      id,
      name,
      description,
      status,
      image,
      created_at,
      discount,
      category: { id: cat_id, name: cat_name },
    }) => (
      <Row key={id}>
        <Cell>{name || 'none'}</Cell>
        <Cell>{description || 'none'}</Cell>
        <Cell>{status || 'none'}</Cell>
        <Cell>{cat_name || 'none'}</Cell>
        <Cell>{moment(created_at).format('YYYY-MM-DD') || 'none'}</Cell>
        <Cell>
          <img
            src={image || '/img/standard.jpg'}
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
            alt="avatar"
          />
        </Cell>
        <Cell>{discount || 'none'}</Cell>
        <Cell>
          <img
            src="/img/edit.svg"
            onClick={() => history.push(`/team-will-bank/admin/banker/${id}`)}
            style={{ width: '20px', height: '20px', margin: '0 5px' }}
            alt=""
          />
          <img
            src="/img/delete.svg"
            onClick={() => removeProduct(id)}
            style={{ width: '20px', height: '20px' }}
            alt=""
          />
        </Cell>
      </Row>
    )
  );
  return (
    <AdminLayout>
      <p>Bankers</p>
      <Button
        color="#fff"
        background="#303952"
        type="button"
        style={{ float: 'right' }}
        onClick={() => history.push('/plantify.it/admin-seller/add-product')}
      >
        Ajouter un Produit
      </Button>
      <Table>
        <Row>
          <Head>Libéllé</Head>
          <Head>Description</Head>
          <Head>Statut</Head>
          <Head>Catégorie</Head>
          <Head>Date de création</Head>
          <Head>photo</Head>
          <Head>Remise</Head>
          <Head>Actions</Head>
        </Row>
        {productsView}
      </Table>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default compose(
  connect(
    mapStateToProps,
    { getAllProducts, removeProduct }
  ),
  withRouter
)(ProductsList);
