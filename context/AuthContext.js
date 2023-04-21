import React, {createContext, useContext, useState, useEffect} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const AuthProvider = ({children}) => {
  const [test, setTest] = useState('test value');
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const login = async (userID, password, deviceID) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://3ef9gn5kk2.execute-api.ap-south-1.amazonaws.com/arnxt_prod/users/logindevice',
        {
          userID,
          password,
          deviceID,
        },
      );
      console.log(response.data);
      let userInfo = response.data;
      setUserInfo(userInfo);
      setUserToken(userInfo.Item.bossID);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      AsyncStorage.setItem('userToken', userInfo.Item.bossID);

      ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);

      const myObject = error.response.data;
      console.log(myObject.Message); // Output: "Password Wrong"
      ToastAndroid.show(
        `Error Occured : ${myObject.Message}`,
        ToastAndroid.SHORT,
      );
    }

    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');

    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');

      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
