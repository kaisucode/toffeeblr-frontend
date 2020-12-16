
import { setStoredUsername } from '../store/userdata/userdataSlice';
import { createAsyncThunk } from '@reduxjs/toolkit'

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

export const Signup2 = createAsyncThunk(
  'counter/setStoredUsernameThunk', 
  async (userData, { dispatch, rejectWithValue }) => {

    fakeAxiosFunc().then((res) => {
      console.log("then: " + JSON.stringify(res));
      // set up redirect info and status for render
      //    store username & token in redux 
      //    return username or other identifier for user feed redirect
      dispatch(setStoredUsername(res.message));
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

// const apiPost = (data) => {
//   const res = await axios.post(`http://localhost:8123/`, data);
//   return res.data;
// };


export const Signup = (userData) => dispatch => {
  console.log("thunk parameter here: " + userData.username);

  // apiPost("hai dis is the frontend").then((res) => {
  //   return res;
  // }, (err) => {
    // throw err;
  // });

  // try {
  const aResult = fakeAxiosFunc();

  // fakeAxiosFunc().then(res => {
  //   console.log(res.message);
  //   dispatch(setStoredUsername(res.message));
  // });


  aResult.then((res) => {
    console.log("res: " + res.message);
    // should store both res and the username
    
    // dispatch(setStoredUsername(res.message));
    dispatch(setStoredUsername(userData.username));
  }, (err) => {
    console.log("err: " + err);
  });

  // const res = "Hi";
  console.log(aResult);
  return aResult;


  // } catch (e) {
  //   throw new Error("axios error but from thunk");
  // }

  // return new Promise((res, rej) => {
  //   res("aaa");
  // })
  //   .catch((result) => {
  //     throw new Error("helloo!! error!!" + result);
  //   });

  // api call


  // else return error
  //
  // return "api success";
  // Promise.resolve("fake error");
};

