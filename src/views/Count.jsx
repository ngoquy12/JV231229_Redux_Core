import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";

export default function Count() {
  const count = useSelector((state) => state.count); // Lấy dữ liệu bên trong store
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // Bắn action lên reducer
    dispatch(actions.act_increase());
  };

  const handleDecrease = () => {
    dispatch(actions.act_decrease());
  };

  const handleReset = () => {
    dispatch(actions.act_reset());
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
