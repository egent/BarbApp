import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tab from './Tab';

const TabContainer = ({active, navigation, tabLeft, tabRight}) => {
  return (
    <View style={styles.tabContainer}>
      <Tab
        name={tabLeft.name}
        screen={tabLeft.screen}
        navigation={navigation}
        active={active}
      />
      <Tab
        name={tabRight.name}
        screen={tabRight.screen}
        navigation={navigation}
        active={active}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabContainer;
