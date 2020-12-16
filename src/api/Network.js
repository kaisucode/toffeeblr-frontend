import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setStoredUsername } from '../store/userdata/userdataSlice';

const url = "http://localhost:8123/";

export const postRequest = async (resource, data) => {
  const res = await axios.post(url + resource, data);
  return res;
}

export const getRequest = async (resource) => {
  const res = await axios.get(url + resource);
  return res;
}

const fakeAxiosFunc = () => {
  const fakeAxiosPromise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 2);
    if (num === 0){
      console.log("should succeed");
      resolve({message: "axios success!"});
    }
    else{
      console.log("should fail");
      reject({message: "axios error"});
    }
  });
  return fakeAxiosPromise;
};

export const Signup = createAsyncThunk(
  'counter/setStoredUsernameThunk', 
  async (userData, { dispatch, rejectWithValue }) => {
    fakeAxiosFunc().then((res) => {
      console.log("then: " + JSON.stringify(res));
      dispatch(setStoredUsername(res.message));
      // store username & token in redux 
      // set up redirect info and status for render
      return res.message;
    }, (err) => {
      console.log("error: " + JSON.stringify(err));
      return rejectWithValue(err.message);
    });
  }
);

export const Login = (userData) => {
  console.log("login parameter here: " + userData.username);
}

