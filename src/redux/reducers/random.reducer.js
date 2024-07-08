import { RAMDOM } from "../constants";

const initialState = [];
const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case RAMDOM:
      const newArray = [...state, action.payload];
      return newArray;

    default:
      return state;
  }
};

export default randomReducer;
