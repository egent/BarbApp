import React from 'react';
import {includes} from 'lodash';
import _ from '@services/i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styled';
import iconStop from '@assets/images/stop.png';
import iconPause from '@assets/images/pause.png';
import iconCheck from '@assets/images/check.png';
import iconPlay from '@assets/images/play.png';

const ServiceItem = ({
  id,
  name,
  status,
  vip,
  price,
  duration,
  longPressHandler,
  isServicesManage,
  selectItem,
  selectedItems,
  updateItem,
}) => {
  const getIcon = (s) => {
    let icon = null;
    if (s === 'stop') {
      icon = iconStop;
    } else if (s === 'draft') {
      icon = iconPause;
    } else if (s === 'check') {
      icon = iconCheck;
    } else if (status === 'active') {
      icon = iconPlay;
    }
    return <S.Icon source={icon} />;
  };

  const select = () => {
    selectItem(id);
  };

  const selected = includes(selectedItems, id) ? true : false;

  return (
    <S.Container
      color={selected ? '#E5E5E6' : '#f4f4f5'}
      onLongPress={longPressHandler}
      onPress={updateItem}>
      {isServicesManage && (
        <S.CheckBoxContainer onPress={select}>
          {selected ? (
            <S.CheckBoxActive>
              <Icon name={'check'} color={'#E5E5E6'} size={25} />
            </S.CheckBoxActive>
          ) : (
            <S.CheckBox />
          )}
        </S.CheckBoxContainer>
      )}
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.IconContainer>
          {getIcon(status)}
          <S.Status>{_.t(status)}</S.Status>
        </S.IconContainer>
      </S.Info>
      <S.Cost>
        <S.Price>
          {price} {_.t('uah')}
        </S.Price>
        <S.Time>
          {duration} {_.t('min')}
        </S.Time>
      </S.Cost>
    </S.Container>
  );
};

export default ServiceItem;
