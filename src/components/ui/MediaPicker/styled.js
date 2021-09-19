import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View``;

export const Legend = styled.Text`
  color: #7c7f84;
  font-size: 13px;
  margin-bottom: 10px;
`;

export const MediaAdd = styled.TouchableOpacity`
  border-color: #d4d6df;
  border-width: 1px;
  width: 94px;
  height: 94px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Icons = styled(Icon)`
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: #b6b8bc;
  font-size: 12px;
`;

export const Photo = styled.Image`
  width: 86px;
  height: 86px;
`;

export const PhotosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: -7;
  right: -7;
  /* background-color: #fff; */
`;

export const CloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const PhotoContainer = styled.View`
  margin-bottom: 10px;
  margin-right: 20px;
  border-color: #d4d6df;
  border-width: 1px;
  padding: 3px;
  width: 94px;
  height: 94px;
`;
