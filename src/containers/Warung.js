import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import produk from '../data/produk';

export class Warung extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={produk}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Warung;
