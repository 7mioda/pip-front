import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_POSTS: {
      return {
        ...state,
        posts: payload,
      };
    }
    case actions.ADD_POST: {
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    }
    case actions.UPDATE_POST: {
      const { posts } = state;
      return {
        ...state,
        posts: posts.map(post => {
          if (post.id === payload.id) {
            return payload;
          }
          return post;
        }),
      };
    }
    default:
      return state;
  }
};

export default postReducer;
