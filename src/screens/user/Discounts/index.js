import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TabContainer} from '@components';
import Preloader from '@components/PreLoader';
import {promosCatsRequest} from '@actions/services';
import * as S from './styled';

const Discounts = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(promosCatsRequest());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <S.Container>
      <TabContainer
        active={route.name}
        navigation={navigation}
        tabLeft={{name: 'myDiscounts', screen: 'Discounts'}}
        tabRight={{name: 'promocodeBarb', screen: 'PromocodeBarb'}}
      />
    </S.Container>
  );
};

export default Discounts;
