import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  sellers: [],
};

const sellerReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_SELLERS: {
      return {
        ...state,
        sellers: payload,
      };
    }
    default:
      return state;
  }
};

export default sellerReducer;
