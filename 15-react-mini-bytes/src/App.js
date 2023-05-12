import Bar from "./hooks/Bar";
import Ex from "./hooks/Ex";
import Foo from "./hooks/Foo";
import ResponsiveBox from "./styling/ResponsiveBox";
import Counter from "./testing/Counter";

function App() {
  return (
    <div className="container">
      <h1 className="display-1">react-mini-bytes</h1>
      <hr />
      <Foo />
      <br />
      <Bar />
    </div>
  );
}

export default App;
