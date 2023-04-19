import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImage}
        />
        <View style={styles.loginText}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              color: 'white',
              fontSize: 40,
            }}>
            Login
          </Text>
          <Image
            source={require('../assets/user.png')}
            style={styles.userImage}
          />
        </View>
        <View style={{marginTop: 2}}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              color: 'white',
              fontSize: 18,
            }}>
            Welcome to Partner Account
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>
        <View style={styles.needHelp}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                color: 'white',
                fontSize: 17,
              }}>
              Need Help
            </Text>
            <Image
              source={require('../assets/question.png')}
              style={styles.helpImage}
            />
          </View>

          <Image
            source={require('../assets/direction.png')}
            style={styles.directionImage}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#01091e',
  },
  logoImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
  },
  formContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  userImage: {
    tintColor: 'white',
    marginHorizontal: 10,
    width: 25, // set the desired width of the image
    height: 25, // set the desired height of the image
    resizeMode: 'contain', // resize the image to fit inside its container
  },
  helpImage: {
    tintColor: 'white',
    width: 15, // set the desired width of the image
    height: 15, // set the desired height of the image
    resizeMode: 'contain', // resize the image to fit inside its container
  },
  directionImage: {
    tintColor: 'yellow',
    width: 45, // set the desired width of the image
    height: 15, // set the desired height of the image
    resizeMode: 'contain', // resize the image to fit inside its container
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: '#181e30',
  },
  input: {
    marginLeft: 20,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'DMSans-Medium',
  },
  needHelp: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fcef00',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    padding: 6,
    fontFamily: 'DMSans-Bold',
  },
});
