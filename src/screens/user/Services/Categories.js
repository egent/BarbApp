import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {find, reject} from 'lodash';
import {useSelector, useDispatch} from 'react-redux';
import NestedList from '@components/ui/NestedList';
import {servicesCategorySelect} from '@actions/services';

const ServiceCategories = ({navigation}) => {
  const {servicesCategory, serviceCategorySelected} = useSelector(
    (state) => state.services,
  );
  const dispatch = useDispatch();

  const updateActive = (item) => {
    const isActive = checkActive(item);
    if (isActive) {
      removeItem(item);
    } else {
      const selected = [...serviceCategorySelected];
      selected.push(item);
      dispatch(servicesCategorySelect(selected));
    }
  };

  const removeItem = (item) => {
    let selected = reject(serviceCategorySelected, {id: item.id});

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
    dispatch(servicesCategorySelect(selected));
  };

  const checkActive = (item) => {
    const findItem = find(serviceCategorySelected, {id: item.id});
    return findItem ? true : false;
  };

  return (
    <NestedList
      activeItems={serviceCategorySelected}
      listItems={servicesCategory}
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

export default ServiceCategories;
