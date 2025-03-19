//second step for using redux tool kit
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "hello",
    },
  ],
};

//createSlice eventually takes object
export const todoSlice = createSlice({
  name: "todo", //it will show react dev tools
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload, //payload is object
      };
      //we can call api for fetching data
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//we have to export two part of reducer to be used anywhere
//we will update state through these reducers functionality
export const { addTodo, removeTodo } = todoSlice.actions; //this will be used in the components
export default todoSlice.reducer; //every reducer have to be exported
