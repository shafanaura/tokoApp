import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ColorsTheme} from '../theme/color';

const Container = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.space]}>
        <View>{props.go}</View>
        <View>
          {props.title && <Text style={styles.fontHead}>{props.title}</Text>}
          {props.subtitle && (
            <Text style={styles.fontsubtitle}>{props.subtitle}</Text>
          )}
        </View>
        <View style={{flex: 1}}>{props.search}</View>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsTheme.primary,
  },
  space: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flex: 1,
  },
  fontHead: {
    paddingTop: 10,
    marginBottom: -5,
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  fontsubtitle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Container;
