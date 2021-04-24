import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchInput = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Icon name="search" size={24} color="#A9A9A9" style={styles.icon} />
        <TextInput style={styles.input} />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF5F8',
    borderRadius: 8,
  },
  icon: {marginHorizontal: 10},
  input: {
    position: 'relative',
    fontFamily: 'Poppins-Regular',
    borderRadius: 12,
    color: 'black',
    flex: 1,
    fontSize: 16,
    padding: 5,
  },
});

export default SearchInput;
