import React from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabContainer from '../../components/Price/TabContainer';
import Consultation from '../../components/Price/Consultation';
import PriceList from '../../components/Price/PriceList';

const PriceScreen = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">
      <TabContainer price={true} navigation={navigation} />

      <Consultation />

      <PriceList />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default PriceScreen;
