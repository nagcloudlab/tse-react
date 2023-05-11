import React, { useContext, useState } from "react";
import TodosContext from "../contexts/TodosContext";
import * as actions from "../actions/todos";
import TodoInput from "./TodoInput";

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const context = useContext(TodosContext);
  const { dispatch } = context;
  const handleDelete = () => {
    dispatch(actions.deleteTodo(todo.id));
  };
  const handleComlete = () => {
    dispatch(actions.completeTodo(todo.id));
  };
  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={(e) => handleComlete()}
            className="toggle"
            type="checkbox"
            checked={todo.completed}
          />
          {!isEditing && (
            <label onDoubleClick={(e) => setIsEditing(true)}>
              {todo.title}
            </label>
          )}
          {isEditing && (
            <TodoInput
              todo={todo}
              onEditSuccess={(e) => {
                setIsEditing(false);
              }}
            />
          )}
          <button onClick={(e) => handleDelete()} className="destroy"></button>
        </div>
      </li>
    </>
  );
}
