import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';
import { getAllSellers } from '../actions/sellerActions';
import Map from '../components/Map/Map';
import SellerCard from '../components/Cards/SellerCard';

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

const Sellers = ({ sellers, getAllSellers, className }) => {
  useEffect(() => {
    getAllSellers();
    return () => undefined;
  }, [getAllSellers]);

  const [position, setPosition] = useState({
    lat: 36.8514415,
    lng: 10.2096083,
  });
  const sellersView = sellers.map((seller) => (
    <SellerCard
      seller={seller}
      onMouseOver={() => console.log({
        lat: seller.coordinate_lat,
        lng: seller.coordinate_lng,
      })
        || setPosition({ lat: seller.coordinate_lat, lng: seller.coordinate_lng })
      }
    />
  ));
  return (
    <Layout>
      <div className={`${className}`}>
        <div className="listing">{sellersView}</div>
        <div className="my-map-container">
          <div className="my-map">
            <Map position={position} zoom="15" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  sellers: state.sellers.sellers,
});
export default compose(
  connect(
    mapStateToProps,
    { getAllSellers }
  ),
  withRouter,
  withStyle
)(Sellers);
