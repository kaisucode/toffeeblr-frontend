import { createSlice } from '@reduxjs/toolkit';

// 0 no action taken yet
// 1 success
// 2 error

export const slice = createSlice({
  name: 'userData',
  initialState: {
    username: "no username",
    token: "",
    signupStatus: 0
  },
  reducers: {
    signupUsernameExists: (state) => {
      state.signupStatus = 2;
    },
    signupSuccess: (state) => {
      state.signupStatus = 1;
    },
    setStoredUsername: (state, action) => {
      console.log("reducer being called");
      state.username = action.payload;
    }
  },
});

export const { signupUsernameExists, signupSuccess, setStoredUsername } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUserData = state => state.userData;
export const selectSignupStatus = state => state.userData.signupStatus;

export default slice.reducer;

