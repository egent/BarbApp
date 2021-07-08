import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TabContainer from '../../components/Price/TabContainer';
import Consultation from '../../components/Price/Consultation';
import PriceList from '../../components/Price/PriceList';
import PromoCode from '../../components/Price/PromoCode';
import BottomBtn from '../../components/ui/BottomBtn';
import ModalAlert from '../../components/modal/Alert';
import PreLoader from '../../components/PreLoader';
import {priceClear} from '../../actions/user';

const PriceScreen = ({navigation}) => {
  const {showPriceSaveBtn, loading} = useSelector((state) => state.user);
  const [showAlert, setShowAlert] = useState(false);
  const [eventNav, setEventNav] = useState(null);
  const dispatch = useDispatch();

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const exit = () => {
    setShowAlert(false);
    dispatch(priceClear());
    if (eventNav !== null) {
      navigation.dispatch(eventNav.data.action);
    } else {
      navigation.navigate('Services');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!showPriceSaveBtn) {
        return;
      }
      e.preventDefault();
      setShowAlert(true);
      setEventNav(e);
    });
    return unsubscribe;
  }, [navigation, showPriceSaveBtn]);

  const checkSave = () => {
    setShowAlert(true);
  };

  if (loading) {
    return <PreLoader />;
  }

  return (
    <>
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={25}
        keyboardShouldPersistTaps="always">
        <TabContainer
          price={true}
          navigation={navigation}
          checkSave={checkSave}
        />

        <Consultation />

        <PriceList />

        <PromoCode />

        <View style={styles.separator} />
      </KeyboardAwareScrollView>
      <BottomBtn show={showPriceSaveBtn} />

      <ModalAlert
        visible={showAlert}
        toggle={toggleAlert}
        title="without_save_alert"
        onPress={exit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  separator: {marginVertical: 50},
});

export default PriceScreen;
