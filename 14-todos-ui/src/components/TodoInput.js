import React, { useContext, useState } from "react";
import TodosContext from "../contexts/TodosContext";

import * as actions from "../actions/todos";

export default function TodoInput({ todo, onEditSuccess }) {
  const [title, setTitle] = useState(todo ? todo.title : "");
  const context = useContext(TodosContext);
  const { dispatch } = context;
  const handleKeyUp = (e) => {
    if (e.keyCode !== 13) {
      return false;
    }
    let title = e.target.value.trim();
    if (todo) {
      onEditSuccess(true);
      //dispatch(actions.editTodo(todo.id, { title }));
      return;
    }
    if (!todo && title) {
      dispatch(actions.addTodo(title));
      e.target.value = "";
    }
  };
  return (
    <>
      <input
        value={title}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={(e) => handleKeyUp(e)}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
}
