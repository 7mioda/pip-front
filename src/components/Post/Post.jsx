import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import withStyle from './withStyle';
import {addComment, addLike, deleteComment, deleteLike, deletePost} from '../../actions/PostActions';
import Button from '../Button/Button';

moment.locale('fr');

// props = user: { avatar, name }, content, image, likes, comments,

const Post = ({
  className, post, addLike, addComment, isAuthenticated, deleteLike, deletePost, deleteComment,
}) => {
  const [showComments, setShowComments] = useState(false);
  const toggleLike = (data) => {
    if (isAuthenticated) {
      const like = post.likes.find((lik) => lik.user.id === parseFloat(data.user));
      if (like) {
        deleteLike({ id: like.id, post: post.id });
      } else {
        addLike(data);
      }
    }
  };
  return (
    <article className={`${className} card`}>
      <header className="card-header card-header-avatar">
        { isAuthenticated &&
        post.user &&
        parseFloat(localStorage.getItem('id')) === post.user.id
        && <button style={{ float: 'right', borderRadius: '50%', width: '20px', height: '20px' }} onClick={() => deletePost(post.id)} >x</button>}
        <img
          src="/img/avatar.png"
          width="45"
          height="45"
          alt=""
          className="card-avatar"
        />
        <div className="card-title">Mon pseudo</div>
        <div className="card-date">{moment(post.created_at).fromNow()}</div>
      </header>
      <div className="card-body">
        <p>
          <img src={post.image || '/img/image.jpg'} alt="" className="fullwidth" />
        </p>
        <p>
          {post.content}
        </p>
      </div>
      <div className="card-footer">
        <a className="card-like" onClick={() => toggleLike({ user: localStorage.getItem('id'), post: post.id })}>
          {post.likes.length} pouces
        </a>
        <a className="card-comments" onClick={() => setShowComments(!showComments)}>
          {post.comments.length} commentaires
        </a>
      </div>
      { showComments && (
        <div className="card-comment">
          { post.comments.length > 0 && post.comments.map((comment) => (
            <div style={{ position: 'relative' }}>
              { isAuthenticated &&
              comment.user &&
              parseFloat(localStorage.getItem('id')) === comment.user.id
              && <button style={{ float: 'right', borderRadius: '50%', width: '20px', height: '20px' }} onClick={() => deleteComment({post: post.id, id: comment.id})} >x</button>}
              <div className="card-comment">
                <img
                  src="/img/avatar.png"
                  width="45"
                  height="45"
                  alt=""
                />
                <p>{moment(comment.created_at).fromNow()}</p>
                <p>{ comment.content }</p>
              </div>
            </div>
          )) }
          { isAuthenticated && (
            <Formik
              initialValues={{
                comment: '',
              }}
              onSubmit={(values) => {
                addComment({
                  content: values.comment, user: localStorage.getItem('id'), post: post.id, createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                });
              }}
            >
              {(props) => {
                const { values, handleChange, handleSubmit } = props;
                return (
                  <div className="landing-search">
                    <form className="add-banker__form">
                      <div className="search-input">
                        <textarea
                          className="textarea-input textarea-input--grey"
                          cols="30"
                          placeholder="Commentaire..."
                          name="comment"
                          value={values.description}
                          id="search-input"
                          onChange={handleChange}
                          rows="1"
                        />
                      </div>
                      <div className="half" />
                      <div className="half">
                        <Button
                          animated
                          rounded
                          color="white"
                          background="#ff5a5f"
                          classNames={['landing-search__btn']}
                          onClick={handleSubmit}
                        >
                                        Commenter
                        </Button>
                      </div>
                    </form>
                  </div>
                );
              }}
            </Formik>
          )}
        </div>
      )}
    </article>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default compose(connect(mapStateToProps, { addLike, addComment, deleteLike, deletePost, deleteComment }), withStyle)(Post);
