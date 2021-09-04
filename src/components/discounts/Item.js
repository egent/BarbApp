import React from 'react';
import styled from 'styled-components';
import _ from '@services/i18n';
import iconStop from '@assets/images/stop.png';
import iconPause from '@assets/images/pause.png';
import iconCheck from '@assets/images/check.png';
import iconPlay from '@assets/images/play.png';

const DiscountItem = ({
  updateItem,
  name,
  status,
  date_free,
  date_from,
  date_to,
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
    return <Icon source={icon} />;
  };

  return (
    <Container onPress={updateItem}>
      <LeftContainer>
        <Name>{name}</Name>
        <StatusContainer>
          {getIcon(status)}
          <Status>{_.t(status)}</Status>
        </StatusContainer>
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
  flex: 1;
  padding: 10px;
  background-color: #f4f4f5;
  margin-bottom: 3px;
  min-height: 60px;
`;

const LeftContainer = styled.View`
  flex: 8;
`;

const RightContainer = styled.View`
  flex: 2;
`;

const Name = styled.Text`
  font-size: 14px;
  color: #191b1c;
`;

const Icon = styled.Image`
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

export default DiscountItem;
