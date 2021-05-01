import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Container from '../components/Container';
import CardPage from '../components/CardPage';
import SearchInput from '../components/SearchInput';
import Tab from '../components/Tab';
import {connect} from 'react-redux';
import {produkData} from '../redux/actions/produk.action';
import {warungData} from '../redux/actions/warung.action';

export class TabScreen extends Component {
  state = {
    isLoading: false,
    message: '',
    search: '',
  };

  async componentDidMount() {
    await this.props.produkData(this.props.auth.token);
    await this.props.warungData(this.props.auth.token);
  }

  search = async value => {
    const {auth} = this.props;
    this.setState({search: value});
    await this.props.produkData(auth.token, value);
    await this.props.warungData(auth.token, value);
  };

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
          search={
            <SearchInput
              placeholder="search"
              onChangeText={value => this.search(value)}
            />
          }>
          <CardPage nospace>
            <Tab />
          </CardPage>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  produk: state.produk,
  warung: state.warung,
});

const mapDispatchToProps = {produkData, warungData};

export default connect(mapStateToProps, mapDispatchToProps)(TabScreen);
