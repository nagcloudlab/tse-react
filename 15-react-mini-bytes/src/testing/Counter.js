import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="card">
      <div className="card-header">Counter</div>
      <div className="card-body">
        <button
          data-testid="increment"
          onClick={(e) => setCount(count + 1)}
          className="btn btn-primary"
        >
          +1
        </button>
        <hr />
        <span data-testid="result">{count}</span>
      </div>
    </div>
  );
}
