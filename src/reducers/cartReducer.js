import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ADD_CART_PRODUCT: {
      const { products } = state;
      if (products.find(({ id }) => payload.id === id)) {
        return {
          ...state,
          products: products.map(product => {
            if (product.id === payload.id) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          }),
        };
      } else {
        return {
          ...state,
          products: [payload, ...products],
        };
      }
    }
    case actions.REMOVE_CART_PRODUCT: {
      const { products } = state;
      return {
        ...state,
        products: products.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_CART_PRODUCT: {
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

export default cartReducer;
