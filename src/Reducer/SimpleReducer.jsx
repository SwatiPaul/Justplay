import React from "react";

const init_state = {
  number: 0,
};

const SimpleReducer = (state = init_state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + 1 };
    case "DECREMENT":
      return { ...state, number: state.number - 1 };
    case "INCREMENT_TEN":
      return { ...state, number: state.number + 10 };
    case "DECREMENT_TEN":
      return { ...state, number: state.number - 10 };
    case "INCREMENT_TWICE":
      return { ...state, number: state.number * 2 };

    default:
      return state;
  }
};

export default SimpleReducer;
