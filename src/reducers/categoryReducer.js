import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_CATEGORIES: {
      return {
        ...state,
        categories: payload,
      };
    }
    case actions.ADD_CATEGORY: {
      const { categories } = state;
      return {
        ...state,
        categories: [payload, ...categories],
      };
    }
    case actions.REMOVE_CATEGORY: {
      const { categories } = state;
      return {
        ...state,
        categories: categories.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_CATEGORY: {
      const { categories } = state;
      return {
        ...state,
        categories: categories.map(product => {
          if (product.id === payload.id) {
            return payload;
          }
          return product;
        }),
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
