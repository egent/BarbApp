import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/ui/Input';
import _ from '../../services/i18n';
import {setForm} from '../../actions/user';

const PhoneInputs = () => {
  const {workspace_phones} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [data, setData] = useState([...workspace_phones]);

  const addPhoneInput = () => {
    setData((data) => [...data, data.length]);
  };

  const setPhone = (phone, index) => {
    const phones = [...workspace_phones];
    phones[index] = phone;
    dispatch(setForm({payload: {workspace_phones: phones}}));
  };

  return (
    <>
      {data.map((v, i) => {
        return (
          <Input
            label="workspace_phone"
            value={v}
            setData={(v) => {
              setPhone(v, i);
            }}
            required={true}
            showLabel={i === 0 ? true : false}
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
