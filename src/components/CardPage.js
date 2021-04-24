import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardPage = props => {
  return (
    <View style={[styles.card, styles.space(props.nospace)]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  space: nospace => ({
    padding: nospace ? 0 : 15,
  }),
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flex: 1,
  },
});

export default CardPage;
