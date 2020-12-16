
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './userdata/userdataSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
});


