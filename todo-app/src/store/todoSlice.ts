import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { nanoid } from 'nanoid';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      },
      prepare: (todo: Omit<Todo, 'id' | 'createdAt'>) => ({
        payload: {
          ...todo,
          id: nanoid(),
          createdAt: new Date().toISOString(),
        },
      }),
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer; 