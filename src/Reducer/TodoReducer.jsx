import React from "react";

const init_todo = {
  todos: [],
};

const TodoReducer = (state = init_todo, action) => {
  switch (action.type) {
    case "Add_Todo":
      return { ...state, todos: [...state.todos, action.payload] };

    case "Remove_Todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };

    case "Edit_Todo":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? action.payload.updatedVal : todo
        ),
      };

    default:
      return state;
  }
};

export default TodoReducer;
