import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {BlurView} from '@react-native-community/blur';
import {AuthContext} from '../context/AuthContext';

export function Login({navigation}) {
  const {login} = useContext(AuthContext);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleLogin = () => {
    // handle login logic here
    console.log(test);
  };
  const handleNeedHelpPress = () => {
    setOpen(!open);
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
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="User ID"
              onChangeText={setUserId}
              value={userId}
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
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.needHelp} onPress={handleNeedHelpPress}>
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
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login(userId, password, '6e998dae37994c1e8a9f0f27712316b2a');
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={open}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={1000}
          reducedTransparencyFallbackColor="white"
        />
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Bold',
                    color: 'white',
                    fontSize: 22,
                  }}>
                  Need Help
                </Text>
                <TouchableOpacity
                  onPress={handleNeedHelpPress}
                  style={{
                    paddingVertical: 10,
                  }}>
                  <Image
                    source={require('../assets/close.png')}
                    style={styles.helpImage}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 2,
                  marginTop: 10,
                  width: '70%',
                }}
              />
              <View
                style={{
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Medium',
                    color: '#cccdd2',
                    fontSize: 16,
                    marginVertical: 10,
                  }}>
                  Company Name:
                </Text>

                <TextInput
                  style={styles.input1}
                  placeholder="Excel Wallpaper"
                  placeholderTextColor="#888"
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Medium',
                    color: '#cccdd2',
                    fontSize: 16,
                    marginVertical: 10,
                  }}>
                  Email ID:
                </Text>

                <TextInput
                  style={styles.input1}
                  placeholder="Email"
                  placeholderTextColor="#888"
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Medium',
                    color: '#cccdd2',
                    fontSize: 16,
                    marginVertical: 8,
                  }}>
                  Issues Encountered:
                </Text>

                <View style={styles.input1}>
                  <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item
                      label="Password not Working"
                      value="Password not Working"
                      color="white"
                    />
                    <Picker.Item
                      label="Forgot Password"
                      value="Forgot Password"
                      color="white"
                    />
                  </Picker>
                </View>
                <TouchableOpacity style={styles.submit}>
                  <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 2,
                  marginTop: 50,
                }}
              />
              <Text
                style={{
                  fontFamily: 'DMSans-Medium',
                  color: 'white',
                  fontSize: 14,
                  marginVertical: 10,
                  textAlign: 'center',
                }}>
                We will return back to you in 7 days.
              </Text>
            </View>
          </View>
        </ScrollView>
      </Modal>
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
    height: 220,
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
    marginTop: 30,
    backgroundColor: '#181e30',
  },
  input: {
    marginLeft: 20,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'DMSans-Medium',
  },
  input1: {
    borderRadius: 5,
    fontSize: 14,
    fontFamily: 'DMSans-Medium',
    backgroundColor: '#181e30',
  },
  needHelp: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fcef00',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  submit: {
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
  submitText: {
    color: 'black',
    fontSize: 20,
    padding: 3,
    fontFamily: 'DMSans-Bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#01091e',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    // For iOS
    shadowColor: '#cffee6',
    shadowOffset: {width: -2, height: -2},
    shadowOpacity: 0.18,
    shadowRadius: 115,

    // For Android
    elevation: 5,
    flexDirection: 'column',
    flex: 0.7,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
