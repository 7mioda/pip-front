import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import Post from '../components/Post/Post';

const withStyle = (component) => styled(component)`
  padding: 0 20px;
  max-width: 1050px;
  margin: 20px auto;

  .sidebar {
    display: flex;
    flex-wrap: wrap;
    color: rgba(0, 0, 0, 0.5);
  }

  .sidebar a {
    display: block;
    width: 50%;
    padding: 0.6em 0 0.6em 10px;
    transition: all 0.3s;
    border: solid 1px transparent;
  }

  .sidebar a::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 13px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 20px;
    opacity: 0.67;
    background: url(img/home.svg) center center / contain no-repeat;
    transition: opacity 0.3s;
  }

  .sidebar .sidebar-messages::before {
    background: url(img/messages.svg) center center / contain no-repeat;
  }

  .sidebar .sidebar-event::before {
    background: url(img/event.svg) center center / contain no-repeat;
  }

  .sidebar .sidebar-groupes::before {
    background: url(img/amis.svg) center center / contain no-repeat;
  }

  .sidebar .sidebar-amis::before {
    background: url(img/amis.svg) center center / contain no-repeat;
  }

  .sidebar a:hover,
  .sidebar a.active {
    color: #000;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    background: #fff;
    font-weight: bold;
  }

  .sidebar a:hover::before,
  .sidebar a:active::before {
    opacity: 1;
  }
`;

const Home = ({ className }) => (
  <Layout>
    <div className={`${className}`}>
      <nav className="sidebar">
        <a href="#" className="sidebar-home active">
          Fil d'actualité
        </a>
        <a href="#" className="sidebar-messages">
          Messages
        </a>
        <a href="#" className="sidebar-event">
          Evènement
        </a>
        <a href="#" className="sidebar-groupes">
          Groupes
        </a>
        <a href="#" className="sidebar-amis">
          Amis
        </a>
      </nav>
      <div className="main">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <aside className="aside">
        <article className="card">
          <header className="card-header card-header-avatar">
            <img
              src="img/avatar.png"
              width="45"
              height="45"
              alt=""
              className="card-avatar"
            />
            <div className="card-title">Mon pseudo</div>
            <div className="card-date">Inscrit il y a 10 ans</div>
          </header>
          <div className="card-body">
            <p>
              Oh right. I forgot about the battle. I just told you! You've
              killed me! You don't know how to do any of those. Hey, you add a
              one and two zeros to that or we walk! No! Don't jump!
            </p>
          </div>
        </article>
        <div className="sidebar-title">Suggestion</div>
        <div className="friends-list">
          <div className="friend">
            <img
              src="https://picsum.photos/73/73?random"
              alt=""
              className="friend-avatar"
            />
            <div className="friend-body">
              <a className="friend-name" href="#">
                John Doe
              </a>
              <div className="friend-connections">15 amis mutuels</div>
              <a className="friend-add" href="#">
                Ajouter en amis
              </a>
            </div>
          </div>
          <div className="friend">
            <img
              src="http://lorempixel.com/73/73/people/5"
              alt=""
              className="friend-avatar"
            />
            <div className="friend-body">
              <a className="friend-name" href="#">
                John Doe
              </a>
              <div className="friend-connections">15 amis mutuels</div>
              <a className="friend-add" href="#">
                Ajouter en amis
              </a>
            </div>
          </div>
          <div className="friend">
            <img
              src="http://lorempixel.com/73/73/people/4"
              alt=""
              className="friend-avatar"
            />
            <div className="friend-body">
              <a className="friend-name" href="#">
                John Doe
              </a>
              <div className="friend-connections">15 amis mutuels</div>
              <a className="friend-add" href="#">
                Ajouter en amis
              </a>
            </div>
          </div>
          <div className="friend">
            <img
              src="http://lorempixel.com/73/73/people/3"
              alt=""
              className="friend-avatar"
            />
            <div className="friend-body">
              <a className="friend-name" href="#">
                John Doe
              </a>
              <div className="friend-connections">15 amis mutuels</div>
              <a className="friend-add" href="#">
                Ajouter en amis
              </a>
            </div>
          </div>
          <div className="friend">
            <img
              src="http://lorempixel.com/73/73/people/2"
              alt=""
              className="friend-avatar"
            />
            <div className="friend-body">
              <a className="friend-name" href="#">
                John Doe
              </a>
              <div className="friend-connections">15 amis mutuels</div>
              <a className="friend-add" href="#">
                Ajouter en amis
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </Layout>
);

export default withStyle(Home);
