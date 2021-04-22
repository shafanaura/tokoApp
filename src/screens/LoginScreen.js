import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonComp from '../components/ButtonComp';
import ContainerComp from '../components/ContainerComp';
import TextInputComp from '../components/TextInputComp';
import {ColorsTheme} from '../theme/color';

export class LoginScreen extends Component {
  gotoRegist = () => {
    this.props.navigation.navigate('register-screen');
  };
  render() {
    return (
      <React.Fragment>
        <ContainerComp
          title="Welcome to"
          subtitle="Masukkan email dan password">
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInputComp
              keyboardType="email-address"
              title="Email"
              placeholder="Enter your email"
            />
            <TextInputComp
              title="Password"
              placeholder="Enter your password"
              password
            />
            <ButtonComp title="Masuk" type="success" mt={20} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.or}>OR</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.descGray}>Masuk dengan </Text>
              <TouchableOpacity onPress={this.gotoRegist}>
                <Text style={styles.desc}>nomor telepon</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ContainerComp>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  or: {
    backgroundColor: ColorsTheme.inputbg,
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.body,
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  descGray: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: ColorsTheme.body,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.primary,
  },
});

export default LoginScreen;
