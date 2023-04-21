import {View, Text, StyleSheet, FlatList, Image, Button} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

export const ProductList = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const {logout} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        'https://3ef9gn5kk2.execute-api.ap-south-1.amazonaws.com/arnxt_prod/webar/product_list',
      )
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.imageURL}} />
      <Text style={styles.title}>{item.productName}</Text>
      <Text style={styles.price}>Rs {item.productPrice}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.productID.toString()}
        numColumns={2}
      />
      <Button title="Camera" onPress={() => logout()} />
      <Button title="Sign Out" onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
    color: '#808080',
  },
});
