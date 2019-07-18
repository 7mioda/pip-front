import { AUTH, LOGOUT, ERROR } from '../actions/types';

// Defining initial State
const initialState = {
  isAuthenticated: false,
  user: {},
  errors: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errors: [],
      };
    }
    case ERROR: {
      return {
        ...state,
        errors: [action.payload],
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        errors: [],
      };
    }
    default:
      return state;
  }
};

export default authReducer;
