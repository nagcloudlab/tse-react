import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  const renderTodos = () => {
    return todos.map((todo, index) => {
      return <TodoItem key={index} todo={todo} />;
    });
  };

  return (
    <>
      <ul className="todo-list">{renderTodos()}</ul>
    </>
  );
}
