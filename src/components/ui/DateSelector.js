import moment from 'moment';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as RNLocalize from 'react-native-localize';
import ModalAlert from '../../components/modal/Alert';
import _ from '../../services/i18n';

const locales = RNLocalize.getLocales();

const DateSelector = ({title, value, setDate, formatYearsAgo = false, removeDateTitle, headerTextIOS = 'select_date'}) => {

  const [isDatePickerVisible, setVisibleDatePicker] = useState(false);
  const [deleteAlertVisible, setDeleteAlertVisible] = useState(false);
  const [formatDate, setFormatDate] = useState(!formatYearsAgo ? value : moment(value, 'DD.MM.YYYY').fromNow());

  const toggleDeleteAlert = () => {
    setDeleteAlertVisible(!deleteAlertVisible);
  };

  const onChangeDate = (date) => {
    const dateFormat  = !formatYearsAgo ? moment(date).format('DD.MM.YYYY') : moment(date, 'DD.MM.YYYY').fromNow();
    setFormatDate(dateFormat)
    setDate(moment(date).format('DD.MM.YYYY'));
    setVisibleDatePicker(false);
  };

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
            {value !== null ? formatDate : _.t('choose_date')}
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
      <DateTimePickerModal
        locale={locales[0].languageTag}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={onChangeDate}
        onCancel={() => setVisibleDatePicker(false)}
        isDarkModeEnabled={false}
        headerTextIOS={_.t(headerTextIOS)}
        cancelTextIOS={_.t('cancel')}
        confirmTextIOS={_.t('select')}
        isDarkModeEnabled={false}
        display="spinner"
      />
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

export default DateSelector;
