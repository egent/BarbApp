import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/ui/Input';
import _ from '../../services/i18n';
import {setForm} from '../../actions/user';

const PhoneInputs = () => {
  const {workspace_phones, phone} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [data, setData] = useState([...workspace_phones]);

  useEffect(() => {
    if (workspace_phones.length === 0) {
      setPhone(phone, 0);
    }
  });

  const addPhoneInput = () => {
    setData((data) => [...data, '']);
  };

  const setPhone = (phone, index) => {
    let phones = [...workspace_phones];
    phones[index] = phone;

    phones = phones.filter((p) => p.length > 0);
    dispatch(setForm({payload: {workspace_phones: phones}}));
    setData([...phones]);
  };

  const deletePhone = (phone) => {
    let phones = [...data];
    const result = phones.filter((p) => {
      return p !== phone;
    });

    dispatch(setForm({payload: {workspace_phones: result}}));
    setData([...result]);
  };

  return (
    <>
      {data.map((v, i) => {
        return (
          <Input
            required={true}
            key={`phone-input-${i}`}
            label="workspace_phone"
            value={v}
            setData={(v) => {
              setPhone(v, i);
            }}
            required={true}
            showLabel={i === 0 ? true : false}
            keyboardType="phone-pad"
            mask={{
              mask: '+389999999999',
              validator: (value, settings) =>
                value.length === settings.mask.length,
            }}
            remove={i !== 0 ? true : false}
            removeCallback={() => deletePhone(v, i)}
          />
        );
      })}
      <TouchableOpacity onPress={addPhoneInput}>
        <Text style={styles.addPhone}>{_.t('phone_add')}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  addPhone: {
    color: '#6DB7E8',
    fontSize: 14,
  },
});

export default PhoneInputs;
