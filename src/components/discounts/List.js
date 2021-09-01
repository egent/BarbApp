import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {DiscountItem} from '@components';

const DiscountsList = ({data, updateItem, active}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={({id}) => `discount-id-${id}`}
      renderItem={({item}) => {
        if (active !== 'all' && item.status !== active) {
          return null;
        }
        return <DiscountItem {...item} updateItem={() => updateItem(item)} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {padding: 10, flex: 1},
});

export default DiscountsList;
