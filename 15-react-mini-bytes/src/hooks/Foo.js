import React from "react";
import { useCounter } from "./custom-hooks";

export default function Foo() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useCounter();
  return (
    <div className="card">
      <div className="card-header bg-success">Foo</div>
      <div className="card-body">
        <button
          onClick={(e) => setCount(count + 1)}
          className="btn btn-primary"
        >
          +1
        </button>
        <hr />
        <span>{count}</span>
      </div>
    </div>
  );
}
