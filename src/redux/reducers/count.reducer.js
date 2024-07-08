const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;

    case "decrease":
      if (state === 0) {
        return Math.ceil(Math.random() * 1000);
      }
      return state - 1;

    case "reset":
      return 0;

    default:
      return state;
  }
};

export default countReducer;
