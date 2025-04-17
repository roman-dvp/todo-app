import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoFilter } from '../types/todo';

const initialState: TodoFilter = {
  status: 'all',
  priority: 'all',
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.status = action.payload.status;
      state.priority = action.payload.priority;
      state.search = action.payload.search;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer; 