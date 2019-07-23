import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_ORDERS: {
      return {
        ...state,
        orders: payload,
      };
    }
    case actions.UPDATE_ORDER: {
      const { orders } = state;
      return {
        ...state,
        orders: orders.map(order => {
          if (order.id === payload.id) {
            return payload;
          }
          return order;
        }),
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
