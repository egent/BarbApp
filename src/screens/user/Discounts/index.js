import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BottomBlueButton, DiscountsList} from '@components';
import Preloader from '@components/PreLoader';
import HorizontalScrollingMenu from '@components/ui/HorizontalScrollingMenu';

import {promosCatsRequest, promoDetailsRequest} from '@actions/services';
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
    dispatch(promoDetailsRequest({promo_id: item.id}));
    navigation.navigate('DiscountForm');
  };

  return (
    <S.Container>
      {/* <TabContainer
        active={route.name}
        navigation={navigation}
        tabLeft={{name: 'myDiscounts', screen: 'Discounts'}}
        tabRight={{name: 'promocodeBarb', screen: 'PromocodeBarb'}}
      /> */}

      <HorizontalScrollingMenu
        data={promos}
        onPress={onPressMenu}
        active={active}
        promos
      />

      <DiscountsList
        data={promos?.promos?.filter((item) => {
          if (active === 'all' || item.status === active) {
            return item;
          }
        })}
        updateItem={updateItem}
      />

      <BottomBlueButton onPress={pressAdd} />
    </S.Container>
  );
};

export default Discounts;
