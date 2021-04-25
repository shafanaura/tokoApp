import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';

const dataList = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}];

const numColumns = 3;
const WIDTH = Dimensions.get('window').width;
export class TestColoumn extends Component {
  formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({key: 'blank', empty: true});
      totalLastRow++;
    }
    return dataList;
  };

  _renderItem = ({item, index}) => {
    if (item.empty) {
      return <View style={[styles.itemStyle, styles.itemVisible]} />;
    }
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.formatData(dataList, numColumns)}
          numColumns={numColumns}
          data={dataList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    fontSize: 30,
    color: 'white',
  },
  itemStyle: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: WIDTH / numColumns,
    margin: 1,
  },
  itemVisible: {
    backgroundColor: 'transparent',
  },
});

export default TestColoumn;
