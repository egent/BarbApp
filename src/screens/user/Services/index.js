import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TabContainer from '@components/Price/TabContainer';
import HorizontalScrollingMenu from '@components/ui/HorizontalScrollingMenu';
import {PreLoader, ServicesList, BottomBlueButton} from '@components';
import _ from '@services/i18n';
import {
  servicesCategoryRequest,
  serviceDetailsRequest,
} from '@actions/services';

import * as S from './styled';

const Services = ({navigation}) => {
  const dispatch = useDispatch();
  const {services, loading, serviceListKey} = useSelector(
    (state) => state.services,
  );
  const data = services.procedures;

  const [active, setActive] = useState('all');

  useEffect(() => {
    dispatch(servicesCategoryRequest());
  }, [dispatch]);

  if (loading) {
    return <PreLoader />;
  }

  const checkSave = () => {};

  const onPressMenu = (menu) => {
    setActive(menu);
  };

  const pressAdd = () => {
    navigation.navigate('ServicesForm');
  };

  const updateItem = (service) => {
    dispatch(serviceDetailsRequest({procedure_id: service.id}));
    navigation.navigate('ServicesForm', {serviceId: service.id});
  };

  return (
    <S.Container>
      <TabContainer
        price={false}
        navigation={navigation}
        checkSave={checkSave}
      />
      <HorizontalScrollingMenu
        data={services}
        onPress={onPressMenu}
        active={active}
      />
      {data && data.length > 0 ? (
        <ServicesList
          active={active}
          data={data}
          key={`services-list-${serviceListKey}`}
          updateItem={updateItem}
        />
      ) : (
        <S.EmptyContainer>
          <S.EmptyText>{_.t('services_empty')}</S.EmptyText>
        </S.EmptyContainer>
      )}

      <BottomBlueButton onPress={pressAdd} />
    </S.Container>
  );
};

export default Services;
