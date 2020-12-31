import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { 
  setUsername, 
  setToken, 
  setStatus, 
  setFeedContent, 
  setExploreContent, 
} from 'store/slices/userDataSlice';

const url = "http://localhost:3000/";

export const postRequest = async (resource, data) => {
  const res = await axios.post(url + resource, data, {
    headers: {
      'Authorization': localStorage.getItem("jwtToken")
    }
  });
  return res;
}

export const getRequest = async (resource) => {
  const res = await axios.get(url + resource, {
    headers: {
      'Authorization': localStorage.getItem("jwtToken")
    }
  });
  return res;
}

export const Login = createAsyncThunk(
  'userData/loginThunk', 
  async (userData, { dispatch, rejectWithValue }) => {

    postRequest("auth/login/", userData).then((res) => {
      localStorage["jwtToken"] = res.data.token;
      dispatch(setToken(res.data.token));
      dispatch(setUsername(res.data.username));
      dispatch(setStatus(200));
      return;
    }, (err) => {
      console.log("error in Network.Login: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const Signup = createAsyncThunk(
  'userData/signupThunk', 
  async (userData, { dispatch, rejectWithValue }) => {

    postRequest("users/", { user: userData }).then((res) => {
      dispatch(Login(userData));
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

export const GetFeedContent = createAsyncThunk(
  'userData/getFeedContentThunk', 
  async (data, { dispatch, rejectWithValue }) => {
    getRequest("feed/").then((res) => {
      dispatch(setFeedContent(res.data.posts));
      dispatch(setStatus(200));
      return;
    }, (err) => {
      console.log("error in Network.getFeed: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const GetExploreContent = createAsyncThunk(
  'userData/getExploreContentThunk', 
  async (data, { dispatch, rejectWithValue }) => {
    getRequest("explore/").then((res) => {
      dispatch(setExploreContent(res.data.posts));
      dispatch(setStatus(200));
      return;
    }, (err) => {
      console.log("error in Network.getExploreContent: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

