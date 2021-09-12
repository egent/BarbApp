import React from 'react';
import {TouchableOpacity, Image, Animated, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {promoStatusUpdateRequest} from '@actions/services';
import iconTrash from '@assets/images/trash.png';
import iconPause from '@assets/images/pause_circle.png';

const HeaderDiscountList = ({isManage, selected}) => {
  const dispatch = useDispatch();
  const opacity = isManage ? 1 : 0;

  const onPressDraft = () => {
    dispatch(
      promoStatusUpdateRequest({discounts: selected, operation: 'draft'}),
    );
  };

  const onPressRemove = () => {
    dispatch(
      promoStatusUpdateRequest({discounts: selected, operation: 'remove'}),
    );
  };

  return (
    <Animated.View style={[styles.container, {opacity}]}>
      <TouchableOpacity onPress={onPressDraft}>
        <Image source={iconPause} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRemove}>
        <Image source={iconTrash} style={styles.image} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default HeaderDiscountList;
