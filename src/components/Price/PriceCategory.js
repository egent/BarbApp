import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PriceCategoryItems from '../../components/Price/PriceCategoryItems';

const PriceCategory = ({id, name, items, checked}) => {
  const [showCat, setShowCat] = useState(Boolean(checked));

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowCat(!showCat);
        }}
        activeOpacity={0.8}
        style={styles.cat}>
        <View style={styles.folder}>
          <Icon name="folder" color="#F50263" size={24} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.arrow}>
          <Icon
            name={showCat ? 'chevron-down' : 'chevron-right'}
            color="#B4B4B4"
            size={24}
          />
        </View>
      </TouchableOpacity>
      {showCat && <PriceCategoryItems items={items} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    flex: 1,
  },
  cat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  folder: {
    flex: 1,
  },
  name: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 10,
  },
  arrow: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default PriceCategory;
