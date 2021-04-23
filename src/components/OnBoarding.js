import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../components/ui/Button';
import _ from '../services/i18n';
import {onBoardingOff} from '../actions/user';

const {width} = Dimensions.get('window');

const OnBoarding = ({navigation}) => {
  const {name} = useSelector((state) => state.user.info_full);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.welcome}>{_.t('welcome')}</Text>
      <Text style={styles.onBoard}>{_.t('on_board')}</Text>
      <Button
        onPress={() => {
          console.log('tap set profile');
        }}
        btnText="set_profile"
      />
      <Text
        onPress={() => {
          dispatch(onBoardingOff());
        }}
        style={styles.later}>
        {_.t('set_profile_later')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width - 20,
    marginHorizontal: 10,
  },
  name: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  onBoard: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  later: {
    color: '#6DB7E8',
    fontSize: 12,
  },
});

export default OnBoarding;
