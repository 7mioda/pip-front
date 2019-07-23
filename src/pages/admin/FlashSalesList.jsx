import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AdminLayout from './AdminLayout';
import {
  Cell, Head, Row, Table,
} from '../../components/Table';
import Button from '../../components/Button/Button';
import {
  getAllFlashSales,
  removeFlashSale,
} from '../../actions/flashSaleActions';

const FlashSalesList = ({
  getAllFlashSales,
  flashSales,
  removeFlashSale,
  history,
}) => {
  useEffect(() => {
    getAllFlashSales();
    return () => undefined;
  }, [getAllFlashSales]);
  const flashSalesView = flashSales.map(
    ({
      id, name, description, image, begin_date, end_date, products,
    }) => (
      <Row key={id}>
        <Cell>{name || 'none'}</Cell>
        <Cell>{description || 'none'}</Cell>
        <Cell>{moment(begin_date).format('YYYY-MM-DD') || 'none'}</Cell>
        <Cell>{moment(end_date).format('YYYY-MM-DD') || 'none'}</Cell>
        <Cell>
          <img
            src={image || '/img/standard.jpg'}
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
            alt="avatar"
          />
        </Cell>
        <Cell>{products.length || 'none'}</Cell>
        <Cell>
          <img
            src="/img/edit.svg"
            onClick={() => history.push(`/plantify.it/admin-seller/update-flash-sale/${id}`)}
            style={{ width: '20px', height: '20px', margin: '0 5px' }}
            alt=""
          />
          <img
            src="/img/delete.svg"
            onClick={() => removeFlashSale(id)}
            style={{ width: '20px', height: '20px', margin: '0 5px' }}
            alt=""
          />
        </Cell>
      </Row>
    )
  );
  return (
    <AdminLayout>
      <Button
        color="#fff"
        background="#303952"
        type="button"
        style={{ float: 'right' }}
        onClick={() => history.push('/plantify.it/admin-seller/add-flash-sale')}
      >
        Ajouter un VenteFlash
      </Button>
      <Table>
        <Row>
          <Head>Libéllé</Head>
          <Head>Description</Head>
          <Head>Date debut</Head>
          <Head>Date fin</Head>
          <Head>Photo</Head>
          <Head>Nbr produits</Head>
          <Head>Actions</Head>
        </Row>
        {flashSalesView}
      </Table>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  flashSales: state.flashSales.flashSales,
});

export default compose(
  connect(
    mapStateToProps,
    { getAllFlashSales, removeFlashSale }
  ),
  withRouter
)(FlashSalesList);
