import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import CardPage from '../components/CardPage';
import FormInput from '../components/FormInput';
import {ColorsTheme} from '../theme/color';

export class RegisterScreen extends Component {
  gotoRegist = () => {
    this.props.navigation.navigate('register-screen');
  };
  render() {
    return (
      <Container head title="Welcome to" subtitle="Masukkan email dan password">
        <CardPage>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FormInput
              keyboardType="email-address"
              title="Email"
              placeholder="Masukkan email"
            />
            <FormInput
              title="Password"
              placeholder="Masukkan password"
              password
            />
            <Button
              onPress={() => this.props.navigation.navigate('product-screen')}
              title="Masuk"
              type="success"
              mt={20}
            />
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
              <Text style={styles.descGray}>Belum punya akun? </Text>
              <TouchableOpacity onPress={this.gotoRegist}>
                <Text style={styles.desc}>Buat akun</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </CardPage>
      </Container>
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

export default RegisterScreen;
