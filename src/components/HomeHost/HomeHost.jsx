import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';
import Button from '../Button/Button';
import withStyle from './withStyle';

const HomeHost = ({ className, history }) => (
  <div className={`${className}`}>
    <div className="home-host__banner">
      <div className="banner__item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
          consectetur culpa excepturi facilis fugit ipsam laudantium magnam,
          maxime molestias nisi obcaecati officia pariatur quas quos ratione
          saepe totam veritatis.
        </p>
        <Button
          onClick={() => history.push('/plantify.it/blog')}
          rounded
          color="#fff"
          background="#e93e8f"
          classNames={['home-host__btn']}
        >
          Blog
        </Button>
      </div>
      <div className="banner__image" />
    </div>
    <div className="home-host__banner">
      <div className="banner__image2" />
      <div className="banner__item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
          consectetur culpa excepturi facilis fugit ipsam laudantium magnam,
          maxime molestias nisi obcaecati officia pariatur quas quos ratione
          saepe totam veritatis.
        </p>
        <Button
          onClick={() => history.push('/plantify.it/products')}
          rounded
          color="#fff"
          background="#e93e8f"
          style={{ float: 'right', marginRight: '20px' }}
        >
          Nos produits
        </Button>
      </div>
    </div>
  </div>
);

export default compose(
  withStyle,
  withRouter
)(HomeHost);
