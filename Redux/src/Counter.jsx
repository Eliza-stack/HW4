import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/counterSlice";
import "./styles.css"; 

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Redux Toolkit</h2>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default Counter;
