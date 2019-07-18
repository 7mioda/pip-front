import * as actions from '../actions/types';

// Defining initial State
const initialState = {
  notifications: [],
};

const notificationsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.ADD_NOTIFICATION: {
      const { notifications } = state;
      return {
        ...state,
        notifications: [payload, ...notifications],
      };
    }
    default:
      return state;
  }
};

export default notificationsReducer;
