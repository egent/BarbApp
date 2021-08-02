import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  flex-grow: 0;
  margin: 10px;
`;

export const MenuItem = styled.TouchableOpacity``;

export const MenuItemText = styled.Text`
  margin-right: 20px;
  font-size: 12px;
  color: ${(props) => (props.active ? '#000' : '#ababab')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export const IconContainer = styled.TouchableOpacity`
  background-color: transparent;
`;
