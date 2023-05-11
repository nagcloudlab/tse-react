/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */

export function todosReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO": {
      let { title } = action.payload;
      let todo = {
        id: state.length + 1,
        title,
        completed: false,
      };
      return [...state, todo];
    }
    case "EDIT_TODO": {
      let { id, title } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { id, title, completed: todo.completed } : todo
      );
    }
    case "DELETE_TODO": {
      let { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    }
    case "COMPLETE_TODO": {
      let { id } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case "COMPLETE_ALL": {
      let areAllCompleted = state.every((todo) => todo.completed);
      return state.map((todo) => ({ ...todo, completed: !areAllCompleted }));
    }
    case "CLEAR_COMPLETED": {
      return state.filter((todo) => !todo.completed);
    }
    default:
      return state;
  }
}
