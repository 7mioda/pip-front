import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  color: #fff;
  margin-top: 30px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  min-height: 24em;
  .home-host__banner {
    max-width: 1200px;
    height: 100%;
    display: flex;
    margin: 20px auto;
    .banner__item {
      width: 50%;
      padding-top: 10%;
      margin-left: 50px;
      height: 400px;
      p {
        display: block;
        width: 80%;
        font-weight: 400;
        color: rgb(72, 72, 72);
        margin-bottom: 20px;
      }
    }
    .banner__image {
      width: 50%;
      background: url('/img/home2.svg') right top / 60% 88% no-repeat;
    }
    .banner__image2 {
      width: 50%;
      background: url('/img/home4.svg') left top / 60% 88% no-repeat;
    }
  }
`;
