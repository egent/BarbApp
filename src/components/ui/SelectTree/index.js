import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '@services/i18n';
import * as S from './styled';

const SelectTree = ({label, selected, navigation}) => {
  return (
    <S.Container>
      <S.Label>{_.t(label)}</S.Label>
      <S.Field
        onPress={() => navigation.navigate('ServiceCategories')}
        activeOpacity={0.8}>
        <S.Values>{selected}</S.Values>
        <S.IconContainer>
          <Icon name="chevron-right" size={25} color="#B4B4B4" />
        </S.IconContainer>
      </S.Field>
    </S.Container>
  );
};

export default SelectTree;
