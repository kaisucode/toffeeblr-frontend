import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { 
  setUsername, 
  setToken, 
  setStatus
} from 'store/slices/userDataSlice';

const url = "http://localhost:3000/";

export const postRequest = async (resource, data) => {
  const res = await axios.post(url + resource, data);
  return res;
}

export const getRequest = async (resource) => {
  const res = await axios.get(url + resource);
  return res;
}

export const Signup = createAsyncThunk(
  'userData/signupThunk', 
  async (userData, { dispatch, rejectWithValue }) => {

    postRequest("users/", { user: userData }).then((res) => {
      dispatch(setUsername(userData.username));
      dispatch(setStatus(200));

      // Do login here
      // store token in redux 
      // set up redirect info and status for render
      return;
    }, (err) => {
      console.log("error in Network.Signup: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const Login = createAsyncThunk(
  'userData/loginThunk', 
  async (userData, { dispatch, rejectWithValue }) => {

    postRequest("auth/login/", userData).then((res) => {
      dispatch(setToken(res.token));
      dispatch(setUsername(res.username));
      dispatch(setStatus(200));
      return;
    }, (err) => {
      console.log("error in Network.Signup: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const MakePost = createAsyncThunk(
  'userData/makePostThunk', 
  async (postData, { dispatch, rejectWithValue }) => {
    console.log("posting data...");
    console.log(JSON.stringify(postData));
  }
);

