import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class TextInputComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }
  togglePasswordVisiblity = () => {
    const {showPassword} = this.state;
    this.setState({showPassword: !showPassword});
  };
  render() {
    const {showPassword} = this.state;
    return (
      <React.Fragment>
        <Text style={styles.subtitle}>{this.props.title}</Text>
        <View style={styles.form}>
          <TextInput
            {...this.props}
            style={styles.input}
            secureTextEntry={
              this.props.password ? (showPassword ? false : true) : false
            }
          />
          {this.props.password && (
            <TouchableOpacity onPress={() => this.togglePasswordVisiblity()}>
              <Icon
                style={styles.icon}
                name={showPassword ? 'eye' : 'eye-off'}
                color="rgba(169, 169, 169, 0.6)"
                size={24}
              />
            </TouchableOpacity>
          )}
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF5F8',
    borderRadius: 8,
  },
  formError: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  icon: {
    marginHorizontal: 20,
  },
  input: {
    padding: 5,
    position: 'relative',
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    color: '#3A3D42',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
  },
});
