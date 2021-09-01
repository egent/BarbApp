import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '@services/i18n';
import * as S from './styled';

const HorizontalScrollingMenu = ({data, onPress, active, promos = false}) => {
  let menu = [];
  try {
    menu = Object.keys(data.types);
    // menu.reverse();
  } catch (error) {}
  const listRef = useRef(null);

  const getCountItemsProcedures = (type) => {
    let result = '';
    let count = 0;
    if (type === 'all') {
      result = `(${data.procedures.length})`;
    } else {
      data.procedures.map((d) => d.status === type && count++);
      result = `(${count})`;
    }

    return result;
  };

  const getCountItemsPromos = (type) => {
    let result = '';
    let count = 0;
    if (type === 'all') {
      result = `(${data.promos.length})`;
    } else {
      data.promos.map((d) => d.status === type && count++);
      result = `(${count})`;
    }

    return result;
  };

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
        data={menu}
        keyExtractor={(item, index) => `horizontal-menu-${index}`}
        renderItem={({item, index}) => {
          if (item === 'uid') {
            return null;
          }
          const m = item.trim();
          return (
            <S.MenuItem activeOpacity={0.8} onPress={() => onPress(m)}>
              <S.MenuItemText active={m === active ? true : false}>
                {_.t(m)}{' '}
                {promos ? getCountItemsPromos(m) : getCountItemsProcedures(m)}
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
