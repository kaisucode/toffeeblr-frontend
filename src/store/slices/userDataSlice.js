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
    followers: [], 
    following: [], 
    followerCount: -1, 
    followingCount: -1, 
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
    setFollowers: (state, action) => {
      state.followers = action.payload;
      state.followerCount = action.payload.length;
    }, 
    setFollowing: (state, action) => {
      state.following = action.payload;
      state.followingCount = action.payload.length;
    }, 
    setFollowerCount: (state, action) => {
      state.followerCount = action.payload;
    }, 
    setFollowingCount: (state, action) => {
      state.followingCount = action.payload;
    }, 
  },
});

export const { 
  setUsername, setToken, setStatus, setAuthState, setFeedContent, setExploreContent, 
  setFollowers, setFollowing, setFollowerCount, setFollowingCount } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsername = state => state.userData.username;
export const selectStatus = state => state.userData.status;
export const selectAuthState = state => state.userData.authState;
export const selectFeedContent = state => state.userData.feedContent;
export const selectExploreContent = state => state.userData.exploreContent;
export const selectFollowers = state => state.userData.followers;
export const selectFollowing = state => state.userData.following;
export const selectFollowerCount = state => state.userData.followerCount;
export const selectFollowingCount = state => state.userData.followingCount;

export default slice.reducer;

