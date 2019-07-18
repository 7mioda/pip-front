import styled from 'styled-components';

export default (component) => styled(component)`
  margin: 20px auto;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  background: url('/img/home1.svg') left bottom / 60% 90% no-repeat;
  height: 400px;
  max-width: 1200px;
  h2 {
    margin-bottom: 20px;
  }
  .recommendation_text {
    font-weight: 400;
    width: 30%;
    margin-top: 10%;
    float: right;
    & > p {
      margin-bottom: 20px;
    }
  }
`;
