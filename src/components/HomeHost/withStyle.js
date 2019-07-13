import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  height: 609px;
  color: #fff;
  margin-top: 30px;
  font-family: Roboto, sans-serif;
  background: url(https://cdn.netlify.com/ca48bf1084ff26089e9a5cfb7d6bad566774a3ef/70735/img/v2/analytics/small-wave.svg) center center/auto 101% no-repeat;
  min-height: 24em;
  .home-host__banner {
    padding: 50px;
    & > h1 {
      font-weight: 300;
      width: 30%;
    }
  }
  .home-host__btn {
    margin-top: 20px;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 13px;
  }
`;
