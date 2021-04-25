import React from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ProductScreen from '../screens/ProductScreen';
import WarungScreen from '../screens/WarungScreen';

const FirstRoute = () => <ProductScreen />;

const SecondRoute = () => <WarungScreen />;

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = props => (
  <TabBar
    {...props}
    inactiveColor="#BABABA"
    activeColor="#7DC2FF"
    pressColor="#58C7A0"
    indicatorStyle={{
      backgroundColor: '#58C7A0',
      height: 3,
      borderRadius: 8,
    }}
    labelStyle={{fontFamily: 'Poppins-SemiBold'}}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#D4D4D4',
    }}
  />
);

const Tab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'produk'},
    {key: 'second', title: 'warung'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <TabView
      style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default Tab;
