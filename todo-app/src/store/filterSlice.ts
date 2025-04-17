import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoFilter } from '../types/todo';

const initialState: TodoFilter = {
  status: 'all',
  priority: 'all',
  search: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer; 