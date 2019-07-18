import styled from 'styled-components';

export default (component) => styled(component)`
  position: absolute;
  top: 0;
  z-index: 50;
  width: 15%;

  .menu {
    display: block;
    height: 100%;
    position: fixed;
    background: #fff;
    color: rgb(72, 72, 72);
    -webkit-box-shadow: 9px 2px 5px -4px rgba(191, 151, 191, 1);
    -moz-box-shadow: 9px 2px 5px -4px rgba(191, 151, 191, 1);
    box-shadow: 9px -14px 5px -4px rgba(191, 151, 191, 1);
  }
  .menu-item {
    height: auto;
  }
  .menu-item__dropdown {
    display: block;
    position: static;
    width: 100%;
    box-shadow: none;
    border-style: none;
  }
  .menu-item__title {
    position: relative;
    color: rgb(72, 72, 72);
    height: 50px;
    text-align: left;
  }
  .menu-item__title:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: inline-block;
    height: 2px;
    width: 0;
    background: #474747;
    transition: width ease-in-out 0.7s;
  }
  .menu-item__title:hover:after {
    width: 100%;
  }

  .menu__logo {
    position: absolute;
    display: inline-block;
    border: none;
    width: 34px;
    height: 34px;
    background: url('/static/img/airbnb-pink-logo.svg');
    top: 50%;
    transform: translateX(-140%);
    left: 24px;
    z-index: 100;
  }

  .menu__logo {
    top: 12px;
    cursor: pointer;
  }

  .menu__logo:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('/icons/close_menu.svg') center center / cover no-repeat;
    margin-left: 105%;
  }

  .inactive:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('/icons/open_menu.svg') center center / cover no-repeat;
    margin-left: 105%;
  }

  .menu--active {
    transform: translateX(15%);
  }

  .menu--inactive {
    transform: translateX(-150%);
  }
`;
