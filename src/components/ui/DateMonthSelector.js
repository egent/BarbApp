import moment from 'moment';
import React, {useState, useCallback} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MonthPicker from 'react-native-month-year-picker';

import * as RNLocalize from 'react-native-localize';
import ModalAlert from '../../components/modal/Alert';
import _ from '../../services/i18n';

const locales = RNLocalize.getLocales();

const DateMonthSelector = ({
  title,
  value,
  setDate,
  formatYearsAgo = false,
  removeDateTitle,
  setDateTitle,
}) => {
  const [isDatePickerVisible, setVisibleDatePicker] = useState(false);
  const [deleteAlertVisible, setDeleteAlertVisible] = useState(false);
  const [formatDate, setFormatDate] = useState(
    !formatYearsAgo ? value : moment(value, 'DD.MM.YYYY').fromNow(),
  );

  const toggleDeleteAlert = () => {
    setDeleteAlertVisible(!deleteAlertVisible);
  };


  const onChangeDate = useCallback(
    (event, newDate) => {
          const dateFormat = !formatYearsAgo
      ? moment(newDate).format('DD.MM.YYYY')
      : moment(newDate, 'DD.MM.YYYY').fromNow();
    setFormatDate(dateFormat);
    setDate(moment(newDate).format('DD.MM.YYYY'));

      setVisibleDatePicker(false);


    },
    [formatDate, setVisibleDatePicker],
  );

  const removeDateResponse = () => {
    setDeleteAlertVisible(true);
  };

  const removeDate = () => {
    setDate(null);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setVisibleDatePicker(true);
        }}
        style={styles.container}>
        <View>
          <Text style={styles.title}>{_.t(title)}</Text>
          <Text style={styles.value}>
            {value !== null ? formatDate : _.t(setDateTitle)}
          </Text>
        </View>
        {value !== null && (
          <TouchableOpacity
            onPress={() => {
              removeDateResponse();
            }}
            style={styles.icon}>
            <Icon size={24} color="#333" name="close" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {isDatePickerVisible && (
        <MonthPicker
          onChange={onChangeDate}
          value={new Date()}
          enableAutoDarkMode={false}
          outputFormat='DD.MM.YYYY'
          okButton={_.t('selectButtonText')}
          cancelButton={_.t('cancelButtonText')}
          locale={locales[0].languageTag}
        />
      )}

      <ModalAlert
        visible={deleteAlertVisible}
        toggle={toggleDeleteAlert}
        title={removeDateTitle}
        onPress={removeDate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#B4B4B4',
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: '#B6B8BC',
    marginTop: 10,
  },
  value: {
    paddingTop: 10,
    fontSize: 14,
    color: '#6DB7E8',
  },
  icon: {
    marginTop: 10,
  },
});

export default DateMonthSelector;
