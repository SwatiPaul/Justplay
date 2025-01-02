import React from 'react';
import { combineReducers } from 'redux';
import SimpleReducer from './SimpleReducer';
import TodoReducer from './TodoReducer';
import ThemeReducer from './ThemeReducer';


const RootReducer = combineReducers({
    // count : SimpleReducer,
    // todo: TodoReducer,
    theme : ThemeReducer,

})

export default RootReducer