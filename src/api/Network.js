import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { 
  setUsername, 
  setToken, 
  setStatus, 
  setFollowers,
  setFollowing, 
  setFollowerCount, 
  setFollowingCount, 
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
  async (postData, { dispatch, getState, rejectWithValue }) => {

    postRequest("posts/", { post: postData }).then((res) => {
      console.log(JSON.stringify(res));
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }
);

export const GetFeedContent = createAsyncThunk(
  'userData/getFeedContentThunk', 
  async (data, { dispatch, rejectWithValue }) => {

    getRequest("feed/").then((res) => {
      dispatch(setFeedContent(res.data));
      dispatch(setStatus(200));
      dispatch(GetRelationshipData());
      return;
    }, (err) => {
      console.log("error in Network.GetFeedContent: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const GetExploreContent = createAsyncThunk(
  'userData/getExploreContentThunk', 
  async (data, { dispatch, rejectWithValue }) => {

    getRequest("explore/").then((res) => {
      dispatch(setExploreContent(res.data));
      dispatch(setStatus(200));
      dispatch(GetRelationshipData());
      return;
    }, (err) => {
      console.log("error in Network.GetExploreContent: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const GetSelfContent = createAsyncThunk(
  'userData/getSelfContentThunk', 
  async (data, { dispatch, rejectWithValue }) => {

    getRequest("auth/self/").then((res) => {
      dispatch(setUsername(res.data.username));
      dispatch(setFollowerCount(res.data.follower_count));
      dispatch(setFollowingCount(res.data.following_count));
      dispatch(setStatus(200));
      return;
    }, (err) => {
      console.log("error in Network.GetSelfBasicInfo: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const GetRelationshipData = createAsyncThunk(
  'userData/getRelationshipDataThunk', 
  async (data, { dispatch, rejectWithValue }) => {

    getRequest("relationships/").then((res) => {
      dispatch(setFollowers(res.data.followers));
      dispatch(setFollowing(res.data.following));
      dispatch(setStatus(200));
      return;
    }, (err) => {
      console.log("error in Network.GetRelationshipData: " + JSON.stringify(err));
      dispatch(setStatus(err.response.status));
      return rejectWithValue(err.message);
    });
  }
);

export const GetUserContentByUsername = async (username) => {
  var res = await getRequest(`usernames/${username}`);
  return res.data.user;
};

