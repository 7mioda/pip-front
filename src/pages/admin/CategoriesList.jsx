import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AdminLayout from './AdminLayout';
import {
  Table, Cell, Row, Head,
} from '../../components/Table';
import Button from '../../components/Button/Button';
import { getAllCategories, removeCategory } from '../../actions/categoryActions';

const CategoriesList = ({
  getAllCategories, categories, removeCategory, history,
}) => {
  useEffect(() => {
    getAllCategories();
    return () => undefined;
  }, [getAllCategories]);
  const categoriesView = categories.map(
    ({
      id,
      name,
      description,
    }) => (
      <Row key={id}>
        <Cell>{id || 'none'}</Cell>
        <Cell>{name || 'none'}</Cell>
        <Cell>{description || 'none'}</Cell>
        <Cell>
          <img
            src="/img/edit.svg"
            onClick={() => history.push(`/plantify.it/admin-seller/update-category/${id}`)}
            style={{ width: '20px', height: '20px', margin: '0 5px' }}
            alt=""
          />
          <img
            src="/img/delete.svg"
            onClick={() => removeCategory(id)}
            style={{ width: '20px', height: '20px' }}
            alt=""
          />
        </Cell>
      </Row>
    )
  );
  return (
    <AdminLayout>
      <div style={{ width: '80%', margin: '50px' }}>
        <div style={{ float: 'right', marginBottom: '50px' }}>
          <Button
            color="#fff"
            background="#303952"
            type="button"
            style={{ float: 'right' }}
            onClick={() => history.push('/plantify.it/admin-seller/add-category')}
          >
                        Ajouter Categorie
          </Button>
        </div>
        <Table>
          <Row>
            <Head>id</Head>
            <Head>Libéllé</Head>
            <Head>Description</Head>
          </Row>
          {categoriesView}
        </Table>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default compose(
  connect(
    mapStateToProps,
    { getAllCategories, removeCategory }
  ),
  withRouter
)(CategoriesList);
