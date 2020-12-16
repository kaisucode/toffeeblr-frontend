
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import networkReducer from './userdata/userdataSlice';

export default configureStore({
  reducer: {
    network: networkReducer,
  }
});


