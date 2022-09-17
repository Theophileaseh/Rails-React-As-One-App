import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messageReducer from './messages';

export default configureStore({
  reducer: {
    messages: messageReducer,
  },
  middleware: [logger, thunk],
});