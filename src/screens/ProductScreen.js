import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Container from '../components/Container';
import CardPage from '../components/CardPage';
import SearchInput from '../components/SearchInput';
import Tab from '../components/Tab';

export class ProductScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Container
          go={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={36}
                color="white"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          }
          search={<SearchInput />}>
          <CardPage nospace>
            <Tab />
          </CardPage>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProductScreen;
