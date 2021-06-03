import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {priceRequest} from '../../actions/user';
// import Preloader from '../../components/PreLoader';
import TabContainer from '../../components/Price/TabContainer';
import Consultation from '../../components/Price/Consultation';

const PriceScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, priceInfo} = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(priceRequest());
  // }, []);

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">

      <TabContainer price={true} navigation={navigation} />

      <Consultation />



    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default PriceScreen;
