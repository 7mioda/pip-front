import styled from 'styled-components';

export default (component) => styled(component)`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  background: #fff;
  margin-bottom: 15px;
  font-family: Roboto, sans-serif;

  &:last-child {
    padding-bottom: 0;
  }
  .landing-search__btn {
    height: 40px;
    float: right;
    margin: 5px 2px;
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
  
  .card-comment {
    overflow: hidden;
    background: #fbfbfb;
  }
  .card-header {
    padding: 10px;
    position: relative;
  }

  .card-header-avatar {
    padding-left: 65px;
  }

  .card-avatar {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }

  .card-title {
    font-weight: bold;
    color: #000000;
    margin: 0 0 5px 0;
    font-size: 18px;
  }
  .card-date {
    color: rgba(0, 0, 0, 0.38);
    font-size: 12px;
  }

  .card-body {
    margin: 0 10px;
  }

  .card-body .fullwidth {
    width: calc(100% + 20px);
    display: block;
    margin: 0 -10px;
  }

  .card-body p:first-child {
    margin-top: 0;
  }

  .card-body p:last-child {
    margin-top: 0;
  }

  .card-footer {
    border-top: solid 1px #dbdbdb;
    background: #fbfbfb;
    display: flex;
    padding: 10px;
    font-size: 12px;
    color: #dbdbdb;
  }

  .card-footer a:hover {
    text-decoration: underline;
  }

  .card-like::before,
  .card-comments::before {
    content: '';
    display: inline-block;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    background: url(/img/thumb-up.svg) center center / 20px 18px no-repeat;
  }

  .card-comments::before {
    background: url(/img/comment.svg) center center / 18px 17px no-repeat;
  }

  .card-comments {
    margin-left: auto;
  }
`;
