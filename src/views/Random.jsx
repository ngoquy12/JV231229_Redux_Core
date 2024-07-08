import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";

export default function Random() {
  const random = useSelector((state) => state.random);
  const dispatch = useDispatch();

  const handleRandom = () => {
    const newNumber = Math.ceil(Math.random() * 10);
    dispatch(actions.act_random(newNumber));
  };
  return (
    <div>
      <h1>{JSON.stringify(random)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
