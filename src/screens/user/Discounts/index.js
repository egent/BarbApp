import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TabContainer, BottomBlueButton, DiscountsList} from '@components';
import Preloader from '@components/PreLoader';
import HorizontalScrollingMenu from '@components/ui/HorizontalScrollingMenu';

import {promosCatsRequest} from '@actions/services';
import * as S from './styled';

const Discounts = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {loading, promos} = useSelector((state) => state.services);
  const [active, setActive] = useState('all');

  useEffect(() => {
    dispatch(promosCatsRequest());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  const onPressMenu = (menu) => {
    setActive(menu);
  };

  const pressAdd = () => {
    navigation.navigate('DiscountForm');
  };

  const updateItem = (item) => {
    console.log('update item', item);
  };

  return (
    <S.Container>
      <TabContainer
        active={route.name}
        navigation={navigation}
        tabLeft={{name: 'myDiscounts', screen: 'Discounts'}}
        tabRight={{name: 'promocodeBarb', screen: 'PromocodeBarb'}}
      />
      <HorizontalScrollingMenu
        data={promos}
        onPress={onPressMenu}
        active={active}
        promos
      />

      <DiscountsList
        data={promos?.promos}
        updateItem={updateItem}
        active={active}
      />

      <BottomBlueButton onPress={pressAdd} />
    </S.Container>
  );
};

export default Discounts;
