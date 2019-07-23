import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import Stripe from '../components/Stripe/Stripe';
import {compose} from "ramda";
import {connect} from "react-redux";
import {submitPayment} from "../actions/OrderActions";
import {withRouter} from "react-router-dom";

const withStyle = (component) => styled(component)`
  max-width: 1120px;
  height: 500px;
  padding-top: 80px;
  margin: 0 auto;
  background: url('/img/help.svg') right bottom / 60% 60% no-repeat;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  .help__text {
    margin-top: 100px;
    width: 40%;
    float: left;
  }
  h2 {
    margin-bottom: 20px;
  }
`;

const Payment = ({ className, submitPayment, match: { params: { orderId } } }) => (
  <Layout>
    <div className={`${className}`}>
      <div className="help__text">
        <Stripe submitPayment={submitPayment} orderId={orderId} />
      </div>
    </div>
  </Layout>
);

export default compose(withRouter, connect(null, { submitPayment }), withStyle)(Payment);
