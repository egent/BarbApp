import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import _ from "../../services/i18n"

const FirstScreen = ({ navigation}) => {
  return (
    <>
      <View style={styles.box} />
      <View style={styles.box}>
        <Text style={styles.logo}>Barb</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.btnText}>{_.t('create_account')}</Text>
        </TouchableOpacity>
        <Text onPress={()=>{navigation.navigate('Login')}} style={styles.enterText}>{_.t('enter')}</Text>
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
  btn: {
    width: '100%',
    backgroundColor: '#F50263',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  enterText: {
    marginTop: 25,
    color: '#6DB7E8',
    fontSize: 16,
  },
});

export default FirstScreen;
