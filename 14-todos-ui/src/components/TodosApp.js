import React, { useState, useReducer, useEffect } from "react";
import TodosFooter from "./TodosFooter";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import { todosReducer } from "../reducers/todos";
import TodosContext from "../contexts/TodosContext";

export default function TodosApp() {
  const [todosPending, setTodosPending] = useState(0);
  const [filter, setFilter] = useState("ALL");
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      title: "Learn React",
      completed: true,
    },
    {
      id: 2,
      title: "Learn Redux",
      completed: false,
    },
  ]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (filter === "ALL") {
      setFilteredTodos(todos);
    } else if (filter === "ACTIVE") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else if (filter === "COMPLETED") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    }
  }, [filter, todos]);

  useEffect(() => {
    const pendingTodosCount = todos.filter((todo) => !todo.completed).length;
    setTodosPending(pendingTodosCount);
  }, [todos]);

  const handleToggleAll = () => {
    dispatch({
      type: "COMPLETE_ALL",
    });
  };

  return (
    <section className="todoapp">
      <TodosContext.Provider
        value={{
          dispatch,
        }}
      >
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <section className="main">
          <input
            id="toggle-all"
            onChange={(e) => handleToggleAll()}
            className="toggle-all"
            type="checkbox"
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList todos={filteredTodos} />
        </section>
        <TodosFooter
          todosPending={todosPending}
          currentFilter={filter}
          onNewFilter={(filter) => setFilter(filter)}
        />
      </TodosContext.Provider>
    </section>
  );
}
