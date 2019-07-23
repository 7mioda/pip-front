import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styled from 'styled-components';
import moment from 'moment';
import AdminLayout from './AdminLayout';
import {
  Table, Cell, Row, Head,
} from '../../components/Table';
import Button from '../../components/Button/Button';
import { getAllDeliveries, updateDelivery } from '../../actions/deliveryActions';
import Map from '../../components/Map/Map';
import 'moment/locale/fr';

moment.locale('fr');

const withStyle = (component) => styled(component)`
  position: relative;
  min-height: 800px;
  .listing {
    width: 70%;
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

  .listing-text-box h4 {
    font-weight: 300;
    color: rgb(72, 72, 72);
  }

  .my-map-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
  }

  .my-map {
    width: 100%;
    position: sticky;
    top: 0;
    height: 100vh;
  }

  .loading {
    font-size: 60px;
    position: absolute;
    bottom: 0;
    left: 35%;
    overflow: hidden;
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes loading {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 70px;
    }
  }
`;

const DeliveriesList = ({
  getAllDeliveries, deliveries, updateDelivery, history, className,
}) => {
  useEffect(() => {
    getAllDeliveries();
    return () => undefined;
  }, [getAllDeliveries]);
  console.log(deliveries);
  const [position, setPosition] = useState({
    lat: 36.8514415,
    lng: 10.2096083,
  });
  const deliveriesView = deliveries.map(
    ({
      id,
      status,
      address,
      created_at,
      validated_at,
      coordinate_lat,
      coordinate_lng,
      phone_number,
    }) => (
      <Row
        key={id}
        onMouseOver={() => setPosition({ lat: coordinate_lat, lng: coordinate_lng })
        }
      >
        <Cell>{status || 'none'}</Cell>
        <Cell>{address || 'none'}</Cell>
        <Cell>{moment(created_at).fromNow() || 'none'}</Cell>
        <Cell>{moment(validated_at).fromNow() || 'non livrée'}</Cell>
        <cell>{phone_number || 'none'}</cell>
        <Cell>
          { status === 'delivered' ? 'Livrée' : (
            <img
              onClick={() => updateDelivery({ id, status: 'delivered' })}
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
      <div className={`${className}`}>
        <div className="listing">
          <div style={{ width: '80%', margin: '50px' }}>
            <Table>
              <Row>
                <Head>Statut</Head>
                <Head>Addresse</Head>
                <Head>Date de création</Head>
                <Head>Date de validation</Head>
                <Head>Num tél</Head>
                <Head>Livrée</Head>
              </Row>
              {deliveriesView}
            </Table>
          </div>
        </div>
        <div className="my-map-container">
          <div className="my-map">
            <Map position={position} zoom="15" />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = (state) => ({
  deliveries: state.deliveries.deliveries,
});

export default compose(
  connect(
    mapStateToProps,
    { getAllDeliveries, updateDelivery }
  ),
  withRouter,
  withStyle
)(DeliveriesList);
