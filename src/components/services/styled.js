import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  background-color: ${(props) => props.color};
  margin-bottom: 3px;
  height: 80px;
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

export const Info = styled.View`
  flex: 7;
`;

export const Cost = styled.View`
  flex: 2;
  align-items: flex-end;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #191b1c;
`;

export const Status = styled.Text`
  color: #6db7e8;
  font-size: 12px;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: #191b1c;
`;

export const Time = styled.Text`
  padding-top: 10px;
  font-size: 12px;
  color: #b4b4b4;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

export const Icon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;
