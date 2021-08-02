import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const EmptyContainer = styled.View`
  margin: 20px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #7c7f84;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #6db7e8;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
