import { combineReducers } from "redux";
import countReducer from "./count.reducer";
import randomReducer from "./random.reducer";

const reducers = combineReducers({
  count: countReducer,
  random: randomReducer,
});

export default reducers;
