export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
}

export function completeTodo(id) {
  return {
    type: "COMPLETE_TODO",
    payload: {
      id,
    },
  };
}

export function addTodo(title) {
  return {
    type: "ADD_TODO",
    payload: {
      title,
    },
  };
}

export function editTodo(id, title) {
  return {
    type: "EDIT_TODO",
    payload: {
      id,
      title,
    },
  };
}
