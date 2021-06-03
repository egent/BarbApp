import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import _ from '../../services/i18n';

const TabContainer = ({price}) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => {}}
        style={[
          price === true
            ? styles.activeTabContainer
            : styles.defaultTabContainer,
        ]}>
        <Text
          style={[
            price === true ? styles.tabActive : styles.tabDefault,
            styles.tab,
          ]}>
          {_.t('price')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={
          price === false
            ? styles.activeTabContainer
            : styles.defaultTabContainer
        }>
        <Text
          style={[
            price === false ? styles.tabActive : styles.tabDefault,

            styles.tab,
          ]}>
          {_.t('services')}
        </Text>
      </TouchableOpacity>
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

export default TabContainer;
