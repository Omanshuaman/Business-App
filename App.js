import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from './pages/Login';
import {DetailsScreen} from './pages/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const handlePress = () => {};
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
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
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={handlePress}>
                <Image
                  source={require('./assets/back.png')}
                  resizeMode="cover"
                  style={styles.btnImg('50%')}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
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
export default App;
