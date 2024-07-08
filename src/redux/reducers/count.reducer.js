import * as types from "../constants";

const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      return state + 1;

    case types.DECREASE:
      if (state === 0) {
        return Math.ceil(Math.random() * 1000);
      }
      return state - 1;

    case types.RESET:
      return 0;

    default:
      return state;
  }
};

export default countReducer;
