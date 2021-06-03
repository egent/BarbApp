import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';

const PriceCategoryItem = ({id, name, activeId, setActiveId}) => {
  const active = activeId === id ? true : false;
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setActiveId(!active ? id : null)}
        style={styles.container}>
        <View
          style={styles.active}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
          <Icon
            name={active ? 'check-box' : 'check-box-outline-blank'}
            color={active ? '#6DB7E8' : '#AFAFAF'}
            size={24}
          />
        </View>
        <View
          style={[styles.titleContainer, {borderBottomWidth: active ? 0 : 1}]}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
      {active && (
        <View style={styles.form}>
          <View style={styles.radioBtn}>
            <Icon
              name={false ? 'radio-button-checked' : 'radio-button-unchecked'}
              color="#B1B1B1"
              size={24}
            />
          </View>
          <View style={styles.inputs}>
            <View style={styles.inputItem}>
              <Text style={styles.txt}>{_.t('from_price')}</Text>

              <TextInput
                style={[styles.input, {marginHorizontal: 5}]}
                underlineColorAndroid="transparent"
                // onChangeText={setPrice}
                // value={price}
                keyboardType="phone-pad"
                returnKeyType="done"
                blurOnSubmit={true}
                placeholder={_.t('price_item')}
              />

              <Text style={styles.txt}>{_.t('uah')}</Text>
            </View>
            <View style={styles.inputItem}>
              <TextInput
                style={[styles.input, {marginRight: 5}]}
                underlineColorAndroid="transparent"
                // onChangeText={setPrice}
                // value={price}
                keyboardType="phone-pad"
                returnKeyType="done"
                blurOnSubmit={true}
                placeholder={_.t('time')}
              />
              <Text style={styles.txt}>{_.t('min')}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  active: {
    flex: 0.5,
    justifyContent: 'center',
  },
  title: {
    color: '#7C7F84',
  },
  titleContainer: {
    borderColor: '#B4B4B4',
    flex: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
  },
  radioBtn: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  inputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    borderColor: '#B4B4B4',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  txt: {
    color: '#7C7F84',
    fontSize: 14,
  },
  input: {
    borderColor: '#D4D6DF',
    borderWidth: 1,
    height: 40,
    width: 100,
    padding: 5,
    marginLeft: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  inputItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PriceCategoryItem;
