import React from 'react';
import { compose } from 'ramda';
import { withRouter } from 'react-router-dom';
import withStyle from './withStyle';
import Button from '../Button/Button';

const HomeRecommendation = ({ className, history }) => (
  <div className={`${className}`}>
    <div>
      <h2>Vos données en toute sécurité</h2>
      <div className="recommendation_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
          consectetur culpa excepturi facilis fugit ipsam laudantium magnam,
          maxime molestias nisi obcaecati officia pariatur quas quos ratione
          saepe totam veritatis.
        </p>
        <Button
          onClick={() => history.push('/plantify.it/sellers')}
          rounded
          color="#fff"
          background="#e93e8f"
          style={{ float: 'right' }}
        >
          Nos Vendeurs
        </Button>
      </div>
    </div>
  </div>
);

export default compose(
  withStyle,
  withRouter
)(HomeRecommendation);
