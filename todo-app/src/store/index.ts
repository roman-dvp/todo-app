import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todoSlice';
import filterReducer from './filterSlice';
import themeReducer from './themeSlice';

const todoPersistConfig = {
  key: 'todos',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);
const persistedFilterReducer = persistReducer(filterPersistConfig, filterReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    todos: persistedTodoReducer,
    filter: persistedFilterReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 