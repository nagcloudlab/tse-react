import React, { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

export default function TodoFooter({
  todosPending,
  currentFilter,
  onNewFilter,
}) {
  const context = useContext(TodosContext);
  const { dispatch } = context;
  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };
  return (
    <>
      <footer className="footer">
        <span className="todo-count">{todosPending} Left</span>
        <ul className="filters">
          <li>
            <a
              onClick={(e) => onNewFilter("ALL")}
              href="#/"
              className={currentFilter === "ALL" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={currentFilter === "ACTIVE" ? "selected" : ""}
              onClick={(e) => onNewFilter("ACTIVE")}
              href="#/active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={currentFilter === "COMPLETED" ? "selected" : ""}
              onClick={(e) => onNewFilter("COMPLETED")}
              href="#/completed"
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          onClick={(e) => handleClearCompleted()}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}
