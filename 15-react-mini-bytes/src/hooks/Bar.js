import React from "react";
import { useCounter } from "./custom-hooks";

export default function Bar() {
  const [count, setCount] = useCounter();
  const [name, setName] = React.useState("John Doe");

  return (
    <div className="card">
      <div className="card-header bg-danger">Bar</div>
      <div className="card-body">
        <button
          onClick={(e) => setCount(count + 1)}
          className="btn btn-primary"
        >
          +1
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={(e) => setName("Nag")}>
          Change Name
        </button>
        <hr />
        <span>{count}</span>
        &nbsp;
        <span>{name}</span>
      </div>
    </div>
  );
}
