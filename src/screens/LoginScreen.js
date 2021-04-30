import React, {Component} from 'react';
import {
  ActivityIndicator,
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
import {login, autoLogin} from '../redux/actions/auth.action';
import {Formik} from 'formik';
import * as yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Validation = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export class LoginScreen extends Component {
  state = {
    message: '',
    isLoading: false,
  };
  componentDidMount() {
    const token = AsyncStorage.getItem('token');
    if (token) {
      this.props.autoLogin(token);
      console.log(token);
    }
  }
  isLogin = async values => {
    this.setState({isLoading: true});
    await this.props.login(values.email, values.password);
    if (typeof this.props.auth.token === 'string') {
      this.setState({isLoading: true});
      showMessage({
        message: 'Success to login',
        type: 'success',
      });
      this.setState({isLoading: false});
      this.props.navigation.navigate('home-screen');
    } else {
      this.setState({isLoading: false});
      showMessage({
        message: 'Wrong email or password',
        type: 'danger',
      });
    }
  };
  gotoRegist = () => {
    this.props.navigation.navigate('register-screen');
  };
  render() {
    return (
      <Container
        head
        title="Selamat datang"
        subtitle="Masukkan email dan password">
        <CardPage>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Formik
              validateOnMount={true}
              validationSchema={Validation}
              initialValues={{email: '', password: ''}}
              onSubmit={values => this.isLogin(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <FormInput
                    keyboardType="email-address"
                    title="Email"
                    placeholder="Masukkan email"
                    name="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errText}>{errors.email}</Text>
                  )}
                  <View style={styles.gap} />
                  <FormInput
                    title="Password"
                    placeholder="Masukkan password"
                    password
                    name="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errText}>{errors.password}</Text>
                  )}
                  {this.state.isLoading === false ? (
                    <Button
                      onPress={handleSubmit}
                      title="Masuk"
                      type="success"
                      mt={20}
                    />
                  ) : (
                    <>
                      <View style={styles.gap} />
                      <ActivityIndicator
                        size="large"
                        color={ColorsTheme.primary}
                      />
                    </>
                  )}
                </>
              )}
            </Formik>
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
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.body,
    padding: 10,
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
  errText: {
    color: ColorsTheme.error,
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    fontSize: 12,
  },
  gap: {
    marginVertical: 10,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {login, autoLogin};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
