import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {find, reject} from 'lodash';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NestedList from '@components/ui/NestedList';
import {promosCatsSelect} from '@actions/services';

const PromoCategories = ({navigation}) => {
  const {promosCats, promoCatsSelected} = useSelector(
    (state) => state.services,
  );
  const dispatch = useDispatch();

  const updateActive = (item) => {
    const isActive = checkActive(item);
    if (isActive) {
      removeItem(item);
    } else {
      const selected = [...promoCatsSelected];
      selected.push(item);
      dispatch(promosCatsSelect(selected));
    }
  };

  const removeItem = (item) => {
    let selected = reject(promoCatsSelected, {id: item.id});

    if (item.children !== false) {
      item.children.map((level3) => {
        selected = reject(selected, {id: level3.id});
        level3.children !== false &&
          level3.children.map((level4) => {
            selected = reject(selected, {id: level4.id});
            level4.children !== false &&
              level4.children.map((level5) => {
                selected = reject(selected, {id: level5.id});
              });
          });
      });
    }
    dispatch(promosCatsSelect(selected));
  };

  const checkActive = (item) => {
    const findItem = find(promoCatsSelected, {id: item.id});
    return findItem ? true : false;
  };

  return (
    <NestedList
      activeItems={promoCatsSelected}
      listItems={promosCats}
      listWrapperStyle={styles.listWrapper}
      childrenPath={'children'}
      opacity={0.8}
      itemKey={(item) => item.id}
      onItemPressed={updateActive}
      // onLastItemPressed={(item) => {
      //   console.log('LAST ELEMENT', item.name);
      // }}
      itemContent={(item) => {
        const isActive = checkActive(item);
        return (
          <View
            style={[
              styles.itemWrapper,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                paddingLeft: 20 * item.level,
                backgroundColor: isActive ? '#e7e7e9' : '#F4F4F5',
              },
            ]}>
            {isActive && <Icon name="check-bold" color="#000" size={24} />}
            <Text
              style={[
                styles.itemText,
                // eslint-disable-next-line react-native/no-inline-styles
                {fontWeight: isActive ? 'bold' : 'normal'},
              ]}>
              {item.name}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
    marginVertical: 1,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  listWrapper: {
    flex: 1,
    marginVertical: 10,
  },
  itemText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 8,
    width: '100%',
  },
});

export default PromoCategories;
