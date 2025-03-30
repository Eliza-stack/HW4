import Counter from "./Counter";
import "./styles.css"; 

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Redux Example</h1>
      <Counter />
    </div>
  );
};

export default App;
