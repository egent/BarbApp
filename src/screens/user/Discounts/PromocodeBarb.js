import React from 'react';
import {TabContainer} from '@components';
import * as S from './styled';

const PromocodeBarb = ({navigation, route}) => {
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

export default PromocodeBarb;
