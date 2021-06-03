import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import PriceCategory from '../../components/Price/PriceCategory';

const PriceList = () => {
  const {priceInfo} = useSelector((state) => state.user); 
  return (
    <FlatList 
      style={styles.container}
      keyExtractor={(item) => `price-cat-${item.id}`}
      data={priceInfo}
      renderItem={({item}) => <PriceCategory {...item} />}      
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  }
});

export default PriceList;
