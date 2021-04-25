import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dataProduk from '../data/dataProduk';
import {ColorsTheme} from '../theme/color';

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
export class Products extends Component {
  formatData = (dataProduk, numColumns) => {
    const totalRows = Math.floor(dataProduk.length / numColumns);
    let totalLastRow = dataProduk.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataProduk.push({key: 'blank', empty: true});
      totalLastRow++;
    }
    return dataProduk;
  };

  _renderItem = ({item, index}) => {
    if (item.empty) {
      return <View style={[styles.card, styles.itemVisible]} />;
    }
    return (
      <TouchableOpacity style={styles.card}>
        <ImageBackground
          source={{uri: item.gambar}}
          style={styles.thumbnail}
          blurRadius={6}
          borderTopRightRadius={8}
          borderTopLeftRadius={8}>
          <Text style={styles.textMakanan}>{item.produk}</Text>
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
            <Text style={styles.name}>Warung {item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <FlatList
        data={this.formatData(dataProduk, numColumns)}
        numColumns={numColumns}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
    borderRadius: 12,
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
});

export default Products;
