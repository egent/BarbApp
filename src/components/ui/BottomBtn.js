import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import _ from '../../services/i18n';
import {priceSaveRequest} from '../../actions/user';

const BottomBtn = ({show}) => {
  const dispatch = useDispatch();
  if (!show) {
    return null;
  }

  const save = () => {
    dispatch(priceSaveRequest());
  };

  return (
    <TouchableOpacity onPress={save} activeOpacity={0.95} style={styles.container}>
      <Text style={styles.txt}>{_.t('save')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6DB7E8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0, 
    left: 0,
    width: '100%',
  },
  txt: {
    color: '#fff',
    fontSize: 14,
  }
});

export default BottomBtn;
