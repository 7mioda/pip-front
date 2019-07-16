import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    case actions.ADD_PRODUCT: {
      const { products } = state;
      return {
        ...state,
        products: [payload, ...products],
      };
    }
    case actions.REMOVE_PRODUCT: {
      const { products } = state;
      return {
        ...state,
        products: products.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_PRODUCT: {
      const { products } = state;
      return {
        ...state,
        products: products.map(product => {
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

export default productsReducer;
