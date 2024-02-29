import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, todoReducer } from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;
