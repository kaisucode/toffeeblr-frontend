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
    authState: 0, 
    feedContent: [], 
    exploreContent: [], 
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    }, 
    setToken: (state, action) => {
      state.token = action.payload;
      state.authState = 1;
    }, 
    setStatus: (state, action) => {
      state.status = action.payload;
    }, 
    setAuthState: (state, action) => {
      state.authState = action.payload;
    }, 
    setFeedContent: (state, action) => {
      state.feedContent = action.payload;
    }, 
    setExploreContent: (state, action) => {
      state.exploreContent = action.payload;
    }, 
  },
});

export const { setUsername, setToken, setStatus, setAuthState, setFeedContent, setExploreContent } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsername = state => state.userData.username;
export const selectStatus = state => state.userData.status;
export const selectAuthState = state => state.userData.authState;
export const selectFeedContent = state => state.userData.feedContent;
export const selectExploreContent = state => state.userData.exploreContent;

export default slice.reducer;

