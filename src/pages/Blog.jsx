import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Layout from './Layout';
import Post from '../components/Post/Post';
import {addPost, getAllPosts} from '../actions/PostActions';
import {Formik} from "formik";
import moment from "moment";
import Input from "../components/Input/Input";
import DatePicker from "react-datepicker/es";
import Button from "../components/Button/Button";

const withStyle = (component) => styled(component)`
  padding: 0 20px;
  max-width: 1050px;
  margin: 20px auto;
  font-family: Roboto, sans-serif;
  
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
    background: url(/img/home.svg) center center / contain no-repeat;
    transition: opacity 0.3s;
  }

  .sidebar .sidebar-messages::before {
    background: url(/img/messages.svg) center center / contain no-repeat;
  }

  .sidebar .sidebar-event::before {
    background: url(/img/event.svg) center center / contain no-repeat;
  }

  .sidebar .sidebar-groupes::before {
    background: url(/img/amis.svg) center center / contain no-repeat;
  }

  .sidebar .sidebar-amis::before {
    background: url(/img/amis.svg) center center / contain no-repeat;
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

const Blog = ({ className, getAllPosts, posts, addPost, isAuthenticated }) => {
    const [image, setImage] = useState({});
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  return (
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
            { isAuthenticated && <Formik
                initialValues={{
                    content: '',
                }}
                onSubmit={values => {
                    addPost({ ...values, createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                        updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), image });
                }}
            >
                {props => {
                    const { values, handleChange, handleSubmit } = props;
                    return (
                        <div className="landing-search">
                            <form className="add-banker__form">
                                <div className="search-input">
                        <textarea
                            className="textarea-input textarea-input--grey"
                            cols="30"
                            placeholder="Votre post"
                            name="content"
                            value={values.description}
                            id="search-input"
                            onChange={handleChange}
                            rows="3"
                        />
                                </div>
                                <div className="search-input">
                                    <Input
                                        type="file"
                                        highlighted
                                        autoCapitalize
                                        placeholder="Nom"
                                        name="photo"
                                        value={image.filename}
                                        id="search-input"
                                        onChange={({ target: { files } }) => setImage(files[0])}
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
                                        Ajouter
                                    </Button>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Formik>}
          {
            posts.map((post) => <Post post={post} />)
          }
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isAuthenticated: state.auth.isAuthenticated,
});

export default compose(connect(mapStateToProps, { getAllPosts, addPost }), withStyle)(Blog);
