import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabContainer from '@components/Price/TabContainer';
import HorizontalScrollingMenu from '@components/ui/HorizontalScrollingMenu';
import PreLoader from '@components/PreLoader';
import _ from '@services/i18n';
import {servicesRequest, servicesCategoryRequest} from '@actions/services';

import * as S from './styled';

const Services = ({navigation}) => {
  const dispatch = useDispatch();
  const {services, loading} = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(servicesRequest());
    dispatch(servicesCategoryRequest());
  }, [dispatch]);

  if (loading) {
    return <PreLoader />;
  }

  const checkSave = () => {
    // todo ...
  };

  return (
    <S.Container>
      <TabContainer
        price={false}
        navigation={navigation}
        checkSave={checkSave}
      />
      <HorizontalScrollingMenu data={services} />
      <S.EmptyContainer>
        <S.EmptyText>{_.t('services_empty')}</S.EmptyText>
      </S.EmptyContainer>
      <S.ButtonContainer>
        <S.ButtonAdd>
          <Icon name="plus" color="#fff" size={48} />
        </S.ButtonAdd>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Services;
