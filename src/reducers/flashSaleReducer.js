import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  flashSales: [],
};

const flashSalesReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ALL_FLASH_SALES: {
      return {
        ...state,
        flashSales: payload,
      };
    }
    case actions.ADD_FLASH_SALE: {
      const { flashSales } = state;
      return {
        ...state,
        flashSales: [...flashSales, payload],
      };
    }
    case actions.REMOVE_FLASH_SALE: {
      const { flashSales } = state;
      return {
        ...state,
        flashSales: flashSales.filter(element => element.id !== payload),
      };
    }
    case actions.UPDATE_FLASH_SALE: {
      const { flashSales } = state;
      return {
        ...state,
        flashSales: flashSales.map(flashSale => {
          if (flashSale.id === payload.id) {
            return payload;
          }
          return flashSale;
        }),
      };
    }
    default:
      return state;
  }
};

export default flashSalesReducer;
