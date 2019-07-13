import React from 'react';
import withStyle from './withStyle';

// props = user: { avatar, name }, content, image, likes, comments,

const Post = ({ className }) => (
  <article className={`${className} card`}>
    <header className="card-header card-header-avatar">
      <img
        src="/img/avatar.png"
        width="45"
        height="45"
        alt=""
        className="card-avatar"
      />
      <div className="card-title">Mon pseudo</div>
      <div className="card-date">Il y a 10 minutes</div>
    </header>
    <div className="card-body">
      <p>
        <img src="/img/image.jpg" alt="" className="fullwidth" />
      </p>
      <p>
        Oh right. I forgot about the battle. I just told you! You've killed me!
        You don't know how to do any of those. Hey, you add a one and two zeros
        to that or we walk! No! Don't jump!
      </p>
      <p>
        I'm sure those windmills will keep them cool. Who am I making this out
        to? Yes, if you make it look like an electrical fire. When you do things
        right, people won't be sure you've done anything at all. Whoa a real
        live robot; or is that some kind of cheesy New Year's costume?
      </p>
    </div>
    <div className="card-footer">
      <a className="card-like" href="#">
        120 pouces
      </a>
      <a className="card-comments" href="#">
        120 commentaires
      </a>
    </div>
  </article>
);

export default withStyle(Post);
