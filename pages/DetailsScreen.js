import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
const url =
  'https://3ef9gn5kk2.execute-api.ap-south-1.amazonaws.com/arnxt_prod/brands/details';

export function DetailsScreen({navigation}) {
  const {logout, userInfo} = useContext(AuthContext);
  const myObject = userInfo;
  console.log(myObject.Item.brand);
  const brandID = myObject.Item.brand;
  const [brandDetails, setBrandDetails] = useState([]);

  const getBrandDetails = async brandID => {
    try {
      const response = await axios.post(url, {brandID});
      // return response.data;
      setBrandDetails(response.data);
    } catch (error) {
      console.error('Error in getting brand details: ', error);
      return null;
    }
  };
  useEffect(() => {
    getBrandDetails(brandID);
    console.log(brandDetails.iconUrl);
  }, [brandID]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('ProductList'); // replace 'NewPage' with your desired page name
    }, 1000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);
  if (!brandDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={{uri: brandDetails.iconUrl}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Info</Text>
          <Text style={styles.text1}>{brandDetails.infoText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#01091e',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 220,
    alignSelf: 'center',
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    padding: 5,
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
  },
});
