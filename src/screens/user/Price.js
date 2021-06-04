import React from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TabContainer from '../../components/Price/TabContainer';
import Consultation from '../../components/Price/Consultation';
import PriceList from '../../components/Price/PriceList';
import PromoCode from '../../components/Price/PromoCode';

const PriceScreen = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">
      <TabContainer price={true} navigation={navigation} />

      <Consultation />

      <PriceList />

      <PromoCode />

      <View style={{marginVertical: 50}} />

    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default PriceScreen;
