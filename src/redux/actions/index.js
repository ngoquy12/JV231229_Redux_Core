import * as types from "../constants";

export const act_increase = () => {
  return {
    type: types.INCREASE,
  };
};

export const act_decrease = () => {
  return {
    type: types.DECREASE,
  };
};

export const act_reset = () => {
  return {
    type: types.RESET,
  };
};

export const act_random = (data) => {
  return {
    type: types.RAMDOM,
    payload: data,
  };
};
