import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styled';

const BottomBlueButton = ({onPress}) => (
  <S.ButtonContainer>
    <S.ButtonAdd activeOpacity={0.8} onPress={onPress}>
      <Icon name="plus" color="#fff" size={48} />
    </S.ButtonAdd>
  </S.ButtonContainer>
);

export default BottomBlueButton;
