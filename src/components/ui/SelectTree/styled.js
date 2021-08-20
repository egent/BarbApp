import {Dimensions} from 'react-native';
import styled from 'styled-components';
const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width - 20}px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  padding-bottom: 5px;
  color: #7c7f84;
  font-size: 13px;
`;

export const Field = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #d4d6df;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding-left: 5px;
  padding: 5px 10px;
`;

export const Values = styled.Text`
  flex: 10;
`;

export const IconContainer = styled.View`
  flex: 0.5;
  align-items: flex-end;
`;
