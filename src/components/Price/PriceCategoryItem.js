import {find, reject} from 'lodash';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';
import {setForm} from '../../actions/user';

const PriceCategoryItem = ({id, name, activeId, setActiveId, active}) => {
  const dispatch = useDispatch();
  const {priceSelect} = useSelector((state) => state.user);
  const [activeItem, setActiveItem] = useState(activeId === id ? true : (active ? true : false))

  let pSelect = JSON.parse(JSON.stringify(priceSelect));
  let priceItem = find(pSelect, {cat_id: id});
  pSelect = reject(pSelect, {cat_id: id});

  let from = priceItem !== undefined ? priceItem.from : false;
  let priceFrom =
    priceItem !== undefined && priceItem !== null ? priceItem.cost : 0;
  let priceTime =
    priceItem !== undefined && priceItem !== null ? priceItem.time : 0;

  const setPrice = (value) => {
    if (priceItem !== undefined) {
      priceItem.cost = value;
    } else {
      priceItem = {cat_id: id, from: false, cost: value, time: 0};
    }
    save(priceItem);
  };

  const setMin = (value) => {
    if (priceItem !== undefined) {
      priceItem.time = value;
    } else {
      priceItem = {cat_id: id, from: false, cost: 0, time: value};
    }
    save(priceItem);
  };

  const setFrom = () => {
    if (priceItem !== undefined) {
      priceItem.from = !from;
    } else {
      priceItem = {cat_id: id, from: !from, cost: 0, time: 0};
    }
    save(priceItem);
  };

  const save = (price) => {
    pSelect.push(price);
    const payload = {showPriceSaveBtn: true, priceSelect: pSelect};
    dispatch(
      setForm({
        payload,
      }),
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setActiveId(!activeItem ? true : false, id);
          setActiveItem(!activeItem);
        }}
        style={styles.container}>
        <View
          style={styles.active}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
          <Icon
            name={activeItem ? 'check-box' : 'check-box-outline-blank'}
            color={activeItem ? '#6DB7E8' : '#AFAFAF'}
            size={24}
          />
        </View>
        <View
          style={[
            styles.titleContainer,
            {borderBottomWidth: activeItem ? 0 : 1},
          ]}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
      {activeItem && (
        <View style={styles.form}>
          <TouchableOpacity onPress={setFrom} style={styles.radioBtn}>
            <Icon
              name={from ? 'radio-button-checked' : 'radio-button-unchecked'}
              color="#B1B1B1"
              size={24}
            />
          </TouchableOpacity>
          <View style={styles.inputs}>
            <View style={styles.inputItem}>
              <Text style={styles.txt}>{_.t('from_price')}</Text>
              <TextInput
                style={[styles.input, {marginHorizontal: 5}]}
                underlineColorAndroid="transparent"
                onChangeText={setPrice}
                value={priceFrom.toString()}
                keyboardType="phone-pad"
                returnKeyType="done"
                blurOnSubmit={true}
                placeholder={_.t('price_item')}
                onFocus={(e) => {
                  setPrice('');
                }}
              />

              <Text style={styles.txt}>{_.t('uah')}</Text>
            </View>
            <View style={styles.inputItem}>
              <TextInput
                style={[styles.input, {marginRight: 5}]}
                underlineColorAndroid="transparent"
                onChangeText={setMin}
                value={priceTime.toString()}
                keyboardType="phone-pad"
                // returnKeyType="done"
                blurOnSubmit={true}
                placeholder={_.t('time')}
                onFocus={(e) => {
                  setMin('');
                }}
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
  },
  inputItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PriceCategoryItem;
