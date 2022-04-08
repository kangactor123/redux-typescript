import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slicer/counterSlice";
import { CounterState } from "../reducer";

function Counter() {
  const counter = useSelector((state: CounterState) => state.counter.value);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  const handlePlusByAmount = () => {
    dispatch(incrementByAmount(5));
  };
  return (
    <div>
      <button onClick={handlePlus}>plus</button>
      <span>{counter}</span>
      <button onClick={handleMinus}>minus</button>
      <button onClick={handlePlusByAmount}>plusByAmount</button>
    </div>
  );
}

export default Counter;
