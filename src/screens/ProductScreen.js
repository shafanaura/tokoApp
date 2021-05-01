import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {ColorsTheme} from '../theme/color';
import {produkData} from '../redux/actions/produk.action';
import {warungData} from '../redux/actions/warung.action';

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
export class ProductScreen extends Component {
  componentDidMount() {
    this.props.produkData(this.props.auth.token);
  }

  formatData = (detail, numColumns) => {
    const totalRows = Math.floor(detail.length / numColumns);
    let totalLastRow = detail.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      detail.push({key: 'blank', empty: true});
      totalLastRow++;
    }
    return detail;
  };

  _renderItem = ({item, index}) => {
    if (item.empty) {
      return <View />;
    }

    return (
      <TouchableOpacity style={styles.card}>
        <ImageBackground
          source={{uri: item.picture}}
          style={styles.thumbnail}
          blurRadius={2}
          borderTopRightRadius={8}
          borderTopLeftRadius={8}>
          <Text style={styles.textMakanan}>{item.nama_produk}</Text>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.row}>
            <Icon name="clock" style={styles.icon(item.status)} />
            <Text style={styles.subtitle(item.status)}>
              Warung {item.status === 0 ? 'Buka' : 'Tutup'}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon
              name="store"
              color={ColorsTheme.placeholder}
              size={16}
              style={{marginRight: 10}}
            />
            <Text style={styles.name}>Warung {item.nama_warung}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {data} = this.props.produk;
    return (
      <React.Fragment>
        {data.length > 0 ? (
          <FlatList
            data={this.formatData(data, numColumns)}
            numColumns={numColumns}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.unavailable}>Produk tidak ada</Text>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textMakanan: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    textAlignVertical: 'bottom',
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 12,
  },
  card: {
    flex: 1,
    height: WIDTH / numColumns,
    margin: 10,
    borderRadius: 8,
    elevation: 1,
  },
  itemVisible: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  thumbnail: {
    height: 110,
    resizeMode: 'cover',
  },
  content: {
    marginLeft: 10,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  icon: status => ({
    fontSize: 16,
    marginRight: 10,
    color: status === 0 ? ColorsTheme.success : ColorsTheme.error,
  }),
  subtitle: status => ({
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: status === 0 ? ColorsTheme.success : ColorsTheme.error,
  }),
  name: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.placeholder,
    flex: 1,
  },
  unavailable: {
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.placeholder,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
  produk: state.produk,
});

const mapDispatchToProps = {produkData, warungData};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
