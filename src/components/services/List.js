import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {ServiceItem} from '@components';
import {servicesManage, servicesSelect} from '@actions/services';

const ServicesList = ({data, active, updateItem}) => {
  const dispatch = useDispatch();
  const {isServicesManage, selectedServices} = useSelector(
    (state) => state.services,
  );

  useEffect(() => {
    return () => isServicesManage && dispatch(servicesManage(false));
  }, [dispatch, isServicesManage]);

  const manageItems = () => {
    if (!isServicesManage) {
      dispatch(servicesManage(true));
    }
  };

  const selectItem = (id) => {
    dispatch(servicesSelect(id));
  };

  return (
    <FlatList
      style={{padding: 10, flex: 1}}
      data={data}
      keyExtractor={({id}) => `service-id-${id}`}
      renderItem={({item, index}) => {
        if (active !== 'all' && item.status !== active) {
          return null;
        }
        return (
          <ServiceItem
            isServicesManage={isServicesManage}
            {...item}
            longPressHandler={manageItems}
            selectItem={selectItem}
            selectedItems={selectedServices}
            updateItem={() => updateItem(item)}
          />
        );
      }}
    />
  );
};

export default ServicesList;
