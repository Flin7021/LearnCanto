import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';
import favoriteReducer from './reducers/favoriteReducer';
import flashcardReducer from './reducers/flashcardReducer';

// Configure the store with reducers and middleware
const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
    flashcard: flashcardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

console.log(store.getState());

export default store;
