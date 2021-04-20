import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../../components/ui/Button';
import _ from '../../services/i18n';

const FirstScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.box} />
      <View style={styles.box}>
        <Text style={styles.logo}>Barb</Text>
        <Button btnText="create_account" onPress={() => navigation.navigate('Registration')} />
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.enterText}>
          {_.t('enter')}
        </Text>
      </View>
      <View style={styles.box} />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  logo: {
    color: '#F50263',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  enterText: {
    marginTop: 5,
    color: '#6DB7E8',
    fontSize: 16,
  },
});

export default FirstScreen;
