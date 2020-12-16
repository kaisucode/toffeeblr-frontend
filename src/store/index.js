
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userDataReducer from './slices/userDataSlice';

export default configureStore({
  reducer: {
    userData: userDataReducer,
  }
});


