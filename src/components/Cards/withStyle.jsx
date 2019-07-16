import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  width: calc((100% / 3) - 2.5%);
  color: rgb(118, 118, 118);
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 10px;
  font-family: Roboto, sans-serif;
  padding-bottom: 30px;
  height: 380px;
  display: inline-block;
  cursor: pointer;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 13px 21px -5px rgba(0, 0, 0, 0.3);
  &:hover {
    .card__body {
      height: 40%;
    }
    .card__cover {
      display: block;
    }
  }

  .card__cover {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: rgba(255, 0, 185, 0.1);
    overflow: hidden;
    .card__button {
      margin-left: 50%;
      margin-top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .card__slider {
    width: 100%;
    height: 90%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      -moz-border-radius-topright: 5px;
      -moz-border-radius-topleft: 5px;
    }
  }

  .card__body {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10%;
    background: #fff;
    overflow: hidden;
    padding: 5px;
  }

  .card__body h3 {
    padding: 2px 0;
    text-transform: uppercase;
    font-weight: 500;
  }
  .card__body h2 {
    padding: 2px 0;
    color: rgb(73, 73, 73);
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 270px;
  }

  .currency {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 2px;
  }

  .euro {
    background: url('/img/euro.svg') center center / 10px 10px no-repeat;
  }

  p {
    padding: 2px 0;
    font-weight: 300;
    font-size: 12px;
  }
  @media only screen and (min-width: 1260px) and (max-width: 1350px) {
    width: calc((100% / 2) - 3%);
    margin-right: 1%;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 1260px) {
    width: calc((100% / 2) - 40px);
    margin-right: 1%;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 650px) {
    width: calc(100% - 40px);
    margin-right: 20px;
    margin-left: 20px;
  }
`;
