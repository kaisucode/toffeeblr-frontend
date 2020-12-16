import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setStoredUsername, signupUsernameExists, signupSuccess } from 'store/slices/userDataSlice';

const url = "http://localhost:8123/";

export const postRequest = async (resource, data) => {
  const res = await axios.post(url + resource, data);
  return res;
}

export const getRequest = async (resource) => {
  const res = await axios.get(url + resource);
  return res;
}

export const Signup = createAsyncThunk(
  'userData/setStoredUsernameThunk', 
  async (userData, { dispatch, rejectWithValue }) => {

    postRequest("users/", { user: userData }).then((res) => {
      dispatch(setStoredUsername(userData.username));
      dispatch(signupSuccess());

      // Do login here
      // store token in redux 
      // set up redirect info and status for render
      return;
    }, (err) => {
      if (err.message === "Request failed with status code 422"){
        console.log("Username creation error");
        dispatch(signupUsernameExists());
      }
      else{
        console.log("error in Network.Signup: " + JSON.stringify(err));
      }
      return rejectWithValue(err.message);
    });
  }
);

export const Login = (userData) => {
  console.log("login parameter here: " + userData.username);
}

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

