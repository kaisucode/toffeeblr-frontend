
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from 'store';
import { setStoredUsername, selectUserdata } from '../store/userdata/userdataSlice';

// export function Login(username, password){
//   console.log("network parameter here: " + username);
// }

export default function Signup(userData){
  const dispatch = useDispatch();
  // const oldUserData = useSelector(selectUserdata);

  // sends API call with credentials

  useEffect(() => {
    console.log("network parameter here: " + userData.username);
    dispatch(setStoredUsername(userData.username));
  }, []);


  // if successful 
  //    store username & token in redux 
  //    return username or other identifier for user feed redirect
  // else return error

  return null;
}

