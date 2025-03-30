import useCounterStore from "./store/counterStore";
import "./styles.css";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="container">
      <div className="card">
        <h2>Zustand</h2>
        <p>{count}</p>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
