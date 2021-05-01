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
import {register} from '../redux/actions/auth.action';
import {Formik} from 'formik';
import * as yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import {connect} from 'react-redux';

const Validation = yup.object().shape({
  nama: yup
    .string()
    .min(4, ({min}) => `Name must be at least ${min} characters`)
    .required('Email is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export class RegisterScreen extends Component {
  state = {
    message: '',
    isLoading: false,
  };
  isRegist = async values => {
    this.setState({loading: true});
    await this.props.register(values.email, values.password, values.nama);
    if (this.props.auth.errorMsg === '') {
      showMessage({
        message: this.props.auth.message,
        type: 'success',
      });
      this.setState({loading: false});
    } else {
      this.setState({loading: false});
      showMessage({
        message: this.props.auth.errorMsg,
        type: 'danger',
      });
    }
  };
  back = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Container head title="Buat Akun TokoKu" subtitle="Isi data diri">
        <CardPage>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Formik
              validateOnMount={true}
              validationSchema={Validation}
              initialValues={{email: '', password: '', nama: ''}}
              onSubmit={values => this.isRegist(values)}>
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
                    title="Nama"
                    placeholder="Masukkan Nama"
                    name="nama"
                    onChangeText={handleChange('nama')}
                    onBlur={handleBlur('nama')}
                    value={values.nama}
                  />
                  {errors.nama && touched.nama && (
                    <Text style={styles.errText}>{errors.nama}</Text>
                  )}
                  <View style={styles.gap} />
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
                      title="Daftar"
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
              <Text style={styles.descGray}>Sudah punya akun? </Text>
              <TouchableOpacity onPress={this.back}>
                <Text style={styles.desc}>masuk</Text>
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

const mapDispatchToProps = {register};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
