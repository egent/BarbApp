import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {includes} from 'lodash';
import _ from '@services/i18n';
import iconStop from '@assets/images/stop.png';
import iconPause from '@assets/images/pause.png';
import iconCheck from '@assets/images/check.png';
import iconPlay from '@assets/images/play.png';

const DiscountItem = ({
  id,
  name,
  status,
  date_free,
  date_from,
  date_to,
  longPressHandler,
  updateItem,
  isManage,
  selectItem,
  selectedItems,
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
    } else if (status === 'expired') {
      icon = iconPause;
    }
    return <IconImage source={icon} />;
  };

  const select = () => {
    selectItem(id);
  };

  const selected = includes(selectedItems, id) ? true : false;

  return (
    <Container onPress={updateItem} onLongPress={longPressHandler}>
      <LeftContainer>
        {isManage && (
          <CheckBoxContainer onPress={select}>
            {selected ? (
              <CheckBoxActive>
                <Icon name={'check'} color={'#E5E5E6'} size={25} />
              </CheckBoxActive>
            ) : (
              <CheckBox />
            )}
          </CheckBoxContainer>
        )}
       <Info>
         <Name>{name}</Name>
          <StatusContainer>
            {getIcon(status)}
            <Status>{_.t(status)}</Status>
          </StatusContainer>
       </Info>
      </LeftContainer>
      <RightContainer>
        {date_free > 0 ? (
          <TermLess>{_.t('termLess')}</TermLess>
        ) : (
          <>
            <Date>{date_from}</Date>
            <Date>{date_to}</Date>
          </>
        )}
      </RightContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  background-color: #f4f4f5;
  margin-bottom: 3px;
  height: 80;
`;

const LeftContainer = styled.View`
  flex: 8;
  flex-direction: row;
`;

const Info = styled.View`
  flex: 6;
`;

const RightContainer = styled.View`
  flex: 2;
`;

const Name = styled.Text`
  font-size: 14px;
  color: #191b1c;
`;

const IconImage = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const StatusContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const Status = styled.Text`
  font-size: 12px;
  color: #6db7e8;
`;

const TermLess = styled.Text`
  color: #bdbdbe;
  font-size: 10px;
`;

const Date = styled.Text`
  color: #bdbdbe;
  font-size: 10px;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  flex: 1.1;
`;

export const CheckBox = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: #fff;
  border-color: #707070;
  border-width: 1px;
`;

export const CheckBoxActive = styled.View`
  width: 28px;
  height: 28px;
  background-color: #F50263;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;

export default DiscountItem;
