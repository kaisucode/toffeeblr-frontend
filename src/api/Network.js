import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { 
  setUsername, 
  setToken, 
  signupUsernameExists, 
  signupSuccess, 
  loginSuccess,
  loginFail 
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
      dispatch(signupSuccess());

      // Do login here
      // store token in redux 
      // set up redirect info and status for render
      return;
    }, (err) => {
      if (err.response.status === 422){
        dispatch(signupUsernameExists());
      }
      else{
        console.log("error in Network.Signup: " + JSON.stringify(err));
      }
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
      dispatch(loginSuccess());
      return;
    }, (err) => {
      console.log(JSON.stringify(err));
      console.log(err.response.status);
      if (err.response.status === 401){
        dispatch(loginFail());
        console.log("login failed");
      }
      else{
        console.log("error in Network.Signup: " + JSON.stringify(err));
      }
      return rejectWithValue(err.message);
    });
  }
);

// const fakeAxiosFunc = () => {
//   const fakeAxiosPromise = new Promise((resolve, reject) => {
//     const num = Math.floor(Math.random() * 2);
//     if (num === 0){
//       console.log("should succeed");
//       resolve({message: "axios success!"});
//     }
//     else{
//       console.log("should fail");
//       reject({message: "axios error"});
//     }
//   });
//   return fakeAxiosPromise;
// };

