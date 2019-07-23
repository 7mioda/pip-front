import React, {useEffect, useState} from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';
import Map from '../components/Map/Map';
import {Formik} from "formik";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {connect} from "react-redux";
import {addDelivery} from "../actions/deliveryActions";


const withStyle = (component) => styled(component)`
  position: relative;
  min-height: 800px;
  
  input {
    margin: 10px 0;
  }
  .landing-search__btn {
     margin-top: 20px;
     float: right;
     height: 40px;
     padding: 1px 20px;
  }
  .listing {
    width: 60%;
    padding: 150px 50px;
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

const Delivery = ({ className, addDelivery, match: { params: { orderId } }  }) => {
  console.log(orderId);
  const [position, setPosition] = useState({
    latitude: 36.8514415,
    longitude: 10.2096083,
  });
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        ({ coords: { longitude, latitude } }) =>
            setPosition({ longitude: longitude, latitude: latitude })
    );
    return () => undefined;
  }, []);

  return (
    <Layout>
      <div className={`${className}`}>
        <div className="listing">
          <Formik
              initialValues={{
                phoneNumber: '',
                address: '',
              }}
              onSubmit={values => {
                addDelivery({ ...values, order: orderId, coordinateLat: position.latitude , coordinateLng:  position.longitude, status: 'packaging'  });
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
                            placeholder="Numérp téléphone"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            id="search-input"
                            onChange={handleChange}
                        />
                      </div>
                      <div className="search-input">
                        <textarea
                            className="textarea-input textarea-input--grey"
                            cols="30"
                            placeholder="Addresse"
                            name="address"
                            value={values.address}
                            id="search-input"
                            onChange={handleChange}
                            rows="3"
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
                          Valider
                        </Button>
                      </div>
                    </form>
                  </div>
              );
            }}
          </Formik>
        </div>
        <div className="my-map-container">
          <div className="my-map">
            <Map position={{ lat: position.latitude, lng: position.longitude }} zoom="15" onClick={({ latlng : { lng, lat } }) => setPosition({ latitude: lat, longitude: lng })} />
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default compose(
  withRouter,
  connect(null, { addDelivery }),
  withStyle
)(Delivery);
