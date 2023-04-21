import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Login} from '../pages/Login';
import {DetailsScreen} from '../pages/DetailsScreen';
import {AuthContext} from '../context/AuthContext';
const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AppStackScreens() {
  return (
    <AppStack.Navigator initialRouteName="Details">
      <AppStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#01091e',
          },
          headerTintColor: '#01091e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </AppStack.Navigator>
  );
}

function AuthStackScreens() {
  const handlePress = () => {};

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#01091e',
          },
          headerTintColor: '#01091e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
              <Image
                source={require('../assets/back.png')}
                resizeMode="cover"
                style={styles.btnImg('50%')}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </AuthStack.Navigator>
  );
}
const AppNav = () => {
  const isLoggedIn = false;
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStackScreens /> : <AuthStackScreens />}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnImg: dimension => ({
    width: dimension,
    height: dimension,
    tintColor: 'white', // Add this line to make the icon white
  }),
});
export default AppNav;
