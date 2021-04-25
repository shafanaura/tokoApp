import React, {Component} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import dataProduk from '../data/dataProduk';
import {ColorsTheme} from '../theme/color';

export class WarungScreen extends Component {
  _renderItem = ({item, index}) => {
    if (item.empty) {
      return <View />;
    }
    return (
      <View style={styles.rowCard}>
        <ImageBackground
          source={{uri: item.warung}}
          style={styles.img}
          blurRadius={2}
          borderRadius={8}>
          <Icon name="heart" style={styles.iconHeart} />
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.warung}>Warung {item.name}</Text>
          <Text style={styles.keterangan}>{item.keterangan}</Text>
          <View style={styles.row}>
            <IconAwesome style={styles.icon} name="map-marker" />
            <Text style={styles.alamat}>{item.alamat}</Text>
          </View>
          <View style={styles.row}>
            <IconAwesome style={styles.icon} name="user" />
            <Text style={styles.alamat}>{item.pemilik}</Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.row}>
              <IconAwesome name="location-arrow" style={styles.km} />
              <Text style={styles.text}>{item.jarak} Km</Text>
            </View>
            <View style={styles.row}>
              <IconAwesome name="star" style={styles.star} />
              <Text style={styles.text}>{item.star}</Text>
            </View>
            <Text style={styles.type(item.status)}>
              {item.status === 0 ? 'Buka' : 'Tutup'}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={dataProduk}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  rowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 1,
    borderRadius: 8,
    marginBottom: 15,
  },
  img: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    marginRight: 10,
  },
  iconHeart: {
    margin: 5,
    fontSize: 24,
    color: 'white',
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warung: {
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.title,
  },
  keterangan: {
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.body,
    fontSize: 12,
  },
  alamat: {
    fontFamily: 'Poppins-Regular',
    color: ColorsTheme.label,
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
    color: ColorsTheme.label,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  type: status => ({
    fontFamily: 'Poppins-SemiBold',
    color: status === 0 ? ColorsTheme.secondary : ColorsTheme.error,
    fontSize: 12,
    backgroundColor: status === 0 ? '#e3f2ff' : '#ffeceb',
    paddingHorizontal: 10,
    borderRadius: 12,
  }),
  km: {
    marginRight: 10,
    color: ColorsTheme.primary,
  },
  star: {
    marginRight: 10,
    color: ColorsTheme.warning,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: ColorsTheme.body,
    fontSize: 12,
  },
});

export default WarungScreen;
