import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import _ from '@services/i18n';

const Tab = ({name, screen, active, navigation}) => {
  const isActive = active === screen ? true : false;
  const onPress = () => {
    navigation.navigate(screen);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        isActive ? styles.activeTabContainer : styles.defaultTabContainer,
      ]}>
      <Text
        style={[isActive ? styles.tabActive : styles.tabDefault, styles.tab]}>
        {_.t(name)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeTabContainer: {
    flex: 1,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#F50263',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTabContainer: {
    flex: 1,
  },
  tab: {
    textAlign: 'center',
    paddingVertical: 6,
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
  },
  tabActive: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tabDefault: {
    color: 'rgba(0, 0, 0, 0.4)',
  },
});

export default Tab;
