import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MenuItem = ({
  navigation,
  icon,
  name,
  qty,
  symbol = '',
  screenName = '',
  screenParams = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.menuContainer}
      onPress={() => {
        navigation.navigate(screenName, screenParams);
      }}>
      <View style={styles.iconContainer}>
        <Icon name={icon} color="#6DB7E8" size={24} />

        {(qty > 0 || symbol.length > 0) && (
          <View style={styles.countContainer}>
            <Text style={styles.counter}>{qty > 0 ? qty : symbol}</Text>
          </View>
        )}
      </View>
      <Text style={styles.menuText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#fff',
    height: 54,
    alignItems: 'center',
    marginBottom: 3,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  countContainer: {
    position: 'absolute',
    top: -3,
    right: 5,
    backgroundColor: '#F50263',
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 10,
    textAlign: 'center',
    color: '#fff',
  },
  menuText: {
    color: '#191B1C',
    fontSize: 14,
  },
});

export default MenuItem;
