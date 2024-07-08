const initialState = [];
const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "random":
      const newArray = [...state, action.payload];
      return newArray;

    default:
      return state;
  }
  return state;
};

export default randomReducer;
