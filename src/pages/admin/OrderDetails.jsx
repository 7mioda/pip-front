import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import AdminLayout from './AdminLayout';
import {
  Cell, Head, Row, Table,
} from '../../components/Table';

const withStyle = (component) => styled(component)``;

const SellerDetails = ({ order, className }) => {
  console.log(order);
  const ordersView = order.order_lines.map(
    ({
      id,
      quantity,
      price,
      product,
    }) => (
      <Row key={id}>
        <Cell>{id || 'none'}</Cell>
        <Cell>{ quantity || 'none'}</Cell>
        <Cell>{ price || '1000'} TND </Cell>
        <Cell>
          <img
            src={product.image || '/img/standard.jpg'}
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
            alt="avatar"
          />
        </Cell>
        <Cell>{ product.id || 'none' }</Cell>
      </Row>
    )
  );
  return (
    <AdminLayout>
      <div className={`${className}`}>
        <Table>
          <Row>
            <Head>id</Head>
            <Head>quantité</Head>
            <Head>Prix</Head>
            <Head>Produit</Head>
            <Head>ID Produit</Head>
          </Row>
          {ordersView}
        </Table>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { orderId },
    },
  }
) => ({
  order:
        state.orders.orders.find((seller) => seller.id === parseFloat(orderId))
        || {},
});
export default compose(
  withRouter,
  connect(
    mapStateToProps
  ),
  withStyle
)(SellerDetails);
