//first step for using redux tool kit

import {} from "@reduxjs/toolkit"; //it comes from redux store
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
}); // configureStore always takes object
