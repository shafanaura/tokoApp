import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ColorsTheme} from '../theme/color';

const ButtonComp = props => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.button(props.type, props.mt)}>
        <Text style={styles.font(props.color)}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (type, mt) => ({
    marginVertical: mt ? mt : 0,
    padding: 10,
    backgroundColor:
      type === 'success' ? ColorsTheme.success : ColorsTheme.placeholder,
    borderRadius: 8,
  }),
  font: color => ({
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: color ? color : 'white',
  }),
});

export default ButtonComp;
