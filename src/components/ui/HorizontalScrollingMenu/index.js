import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '@services/i18n';
import * as S from './styled';

const HorizontalScrollingMenu = ({data}) => {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <S.Container>
      <S.IconContainer
        onPress={() =>
          listRef.current.scrollToOffset({animated: true, offset: 0})
        }>
        <Icon size={18} color="#ababab" name="chevron-left" />
      </S.IconContainer>

      <S.List
        ref={listRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Object.keys(data.types)}
        keyExtractor={(item, index) => `horizontal-menu-${index}`}
        renderItem={({item, index}) => {
          if (item === 'uid') {
            return null;
          }
          return (
            <S.MenuItem activeOpacity={0.8} onPress={() => {}}>
              <S.MenuItemText active={index === active ? true : false}>
                {_.t(item.trim())}
              </S.MenuItemText>
            </S.MenuItem>
          );
        }}
      />
      <S.IconContainer onPress={() => listRef.current.scrollToEnd()}>
        <Icon size={18} color="#ababab" name="chevron-right" />
      </S.IconContainer>
    </S.Container>
  );
};

export default HorizontalScrollingMenu;
