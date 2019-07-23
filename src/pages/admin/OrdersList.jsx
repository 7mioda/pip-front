import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import moment from 'moment';
import AdminLayout from './AdminLayout';
import {
  Table, Cell, Row, Head,
} from '../../components/Table';
import { getAllOrders, validateOrder } from '../../actions/OrderActions';
import 'moment/locale/fr';

moment.locale('fr');

const CategoriesList = ({
  getAllOrders, orders, history, validateOrder,
}) => {
  useEffect(() => {
    getAllOrders();
    return () => undefined;
  }, [getAllOrders]);
  const ordersView = orders.map(
    ({
      id,
      created_at,
      validated_at,
      total_price,
    }) => (
      <Row key={id} onClick={() => history.push(`/plantify.it/admin-seller/orders/${id}`)}>
        <Cell>{id || 'none'}</Cell>
        <Cell>{ moment(created_at).fromNow() || 'none'} TND </Cell>
        <Cell>{ total_price || '1000'}</Cell>
        <Cell>{ (validated_at && moment(created_at).fromNow()) || 'none'}</Cell>
        <Cell>
          { validated_at !== null ? 'Validé' : (
            <img
              onClick={(event) => { event.stopPropagation(); validateOrder(id);}}
              src="/img/checked.svg"
              style={{ width: '20px', height: '20px' }}
              alt=""
            />
          )}
        </Cell>
      </Row>
    )
  );
  return (
    <AdminLayout>
      <div style={{ width: '80%', margin: '50px' }}>
        <Table>
          <Row>
            <Head>id</Head>
            <Head>Date de création</Head>
            <Head>Prix Total</Head>
            <Head>Date de validation</Head>
             <Head>valider</Head>
          </Row>
          {ordersView}
        </Table>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

export default compose(
  connect(
    mapStateToProps,
    { getAllOrders, validateOrder }
  ),
  withRouter
)(CategoriesList);
