import styled from 'styled-components';

export default (component) => styled(component)`

    border: solid 1px #DBDBDB;
    border-radius: 3px;
    background: #FFF;
    margin-bottom: 15px;

    &:last-child {
        padding-bottom: 0;
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
    color: rgba(0,0,0,.38);
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
    border-top: solid 1px #DBDBDB;
    background: #FBFBFB;
    display: flex;
    padding: 10px;
    font-size: 12px;
    color: #DBDBDB;
}


.card-footer a:hover {
    text-decoration: underline;
}

.card-like::before,
.card-comments::before
{
    content: '';
    display: inline-block;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    background: url(img/thumb-up.svg) center center / 20px 18px  no-repeat ;
}

.card-comments::before {
    background: url(img/comment.svg) center center / 18px 17px no-repeat ;;
}

.card-comments {
    margin-left: auto;
}

`;
