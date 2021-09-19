import {Dimensions} from 'react-native';
import styled from 'styled-components';

const {width} = Dimensions.get('window');

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  margin-left: ${width * 0.5 - 30}px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #6db7e8;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  z-index: 1000000000;
`;
