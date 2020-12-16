import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStoredUsername, selectUserdata } from '../store/userdata/userdataSlice';
import * as Network from '../api/Network';

export default function useSignup(userData){
  const dispatch = useDispatch();
  // const oldUserData = useSelector(selectUserdata);

  // sends API call with credentials
  // check promise
  // Network.Login(username, password);

  // dispatch(setStoredUsername(username));

  // if successful 
  //    store username & token in redux 
  //    return username or other identifier for user feed redirect
  // else return error
  return ;
}

