import React from "react";

const init_state = {
  darkmode : false
};

const ThemeReducer = (state = init_state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkmode: !state.darkmode };

    default:
      return state;
  }
};

export default ThemeReducer;

