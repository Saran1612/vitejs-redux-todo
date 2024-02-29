import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.push({ id, text });
    },
    deleteTodo: (state, action) => {
      console.log(action, 'actioninsideSlice');
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      console.log(action, 'actionsjsjsj');
      const { id, text } = action.payload;
      console.log(id, text, 'dsjdsdsndsn');
      const duplicate = state.findIndex((todo) => todo.id === id);
      console.log(duplicate, 'duplicate');
      console.log(state, 'beforeee');
      if (duplicate !== -1) {
        state[duplicate].text = text;
      }
    },
    resetTodo: (state) => {
      return [];
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { addTodo, deleteTodo, resetTodo, updateTodo } = todoSlice.actions;

export const counterReducer = counterSlice.reducer;
export const todoReducer = todoSlice.reducer;
