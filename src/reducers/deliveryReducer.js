import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  deliveries: [],
};

const deliveryReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_DELIVERIES: {
      return {
        ...state,
        deliveries: payload,
      };
    }
    case actions.REMOVE_DELIVERY: {
      const { deliveries } = state;
      return {
        ...state,
        deliveries: deliveries.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_DELIVERY: {
      const { deliveries } = state;
      return {
        ...state,
        deliveries: deliveries.map(delivery => {
          if (delivery.id === payload.id) {
            return payload;
          }
          return delivery;
        }),
      };
    }
    default:
      return state;
  }
};

export default deliveryReducer;
