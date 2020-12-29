import { createSlice } from '@reduxjs/toolkit';

// 0 no action taken yet
// 1 success
// 2 error

export const slice = createSlice({
  name: 'userData',
  initialState: {
    username: "no username",
    token: "",
    status: 200, 
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    }, 
    setUsername: (state, action) => {
      state.username = action.payload;
    }, 
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
});

export const { setUsername, setToken, setStatus } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUserData = state => state.userData;
export const selectUsername = state => state.userData.username;
export const selectSignupStatus = state => state.userData.signupStatus;
export const selectLoginStatus = state => state.userData.loginStatus;
export const selectStatus = state => state.userData.status;

export default slice.reducer;

