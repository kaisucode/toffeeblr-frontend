
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './userdata/userdataSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});


