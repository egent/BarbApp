import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet} from 'react-native';
import {DiscountItem} from '@components';
import {promosManage, promosSelect} from '@actions/services';

const DiscountsList = ({data, updateItem}) => {
  const dispatch = useDispatch();
  const {isPromoManage, selectedPromos} = useSelector(
    (state) => state.services,
  );
  useEffect(() => {
    return () => isPromoManage && dispatch(promosManage(false));
  }, [dispatch, isPromoManage]);

  const manageItems = () => {
    if (!isPromoManage) {
      dispatch(promosManage(true));
    }
  };

  const selectItem = (id) => {
    dispatch(promosSelect(id));
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={({id}) => `promo-id-${id}`}
      renderItem={({item}) => {
        return (
          <DiscountItem
            {...item}
            longPressHandler={manageItems}
            updateItem={() => updateItem(item)}
            selectItem={selectItem}
            selectedItems={selectedPromos}
            isManage={isPromoManage}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {padding: 10, flex: 1},
});

export default DiscountsList;
