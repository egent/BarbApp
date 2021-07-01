import moment from 'moment';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as RNLocalize from 'react-native-localize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import _ from '../../services/i18n';
import {setForm} from '../../actions/user';

const locales = RNLocalize.getLocales();

const WorkTime = () => {
  const dispatch = useDispatch();
  const {schedule_odd_time} = useSelector((state) => state.user);

  const [timeParams, setTimeParams] = useState(null);
  const [defaultDate, setDefaultDate] = useState(new Date());
  const [timePickerTitle, setTimePickerTitle] = useState('');
  const [isTimePickerVisible, setVisibleTimePicker] = useState(false);
  const [timeFrom, setTimeFrom] = useState(schedule_odd_time.time_from || '--');
  const [timeTo, setTimeTo] = useState(schedule_odd_time.time_to || '--');

  const setTime = (time) => {
    if (timeParams !== null) {
      const selectedTime = moment(time).format('HH:mm');
      let time_from = null;
      let time_to = null;
      if (timeParams === 'time_from') {
        time_from = selectedTime;
        time_to = timeTo !== '--' ? timeTo : null;
        setTimeFrom(selectedTime);
      } else {
        time_from = timeFrom !== '--' ? timeFrom : null;
        time_to = selectedTime;
        setTimeTo(selectedTime);
      }

      dispatch(setForm({payload: {schedule_odd_time: {time_from, time_to}}}));
      setVisibleTimePicker(false);
    }
  };

  const openSelectTimeModal = (type) => {
    setTimeParams(type);

    setDefaultDate(
      type === 'time_from'
        ? new Date(new Date().setHours(9, 0, 0, 0))
        : new Date(new Date().setHours(20, 0, 0, 0)),
    );

    setTimePickerTitle(`${_.t(type === 'time_from' ? 'from' : 'to')}`);
    setVisibleTimePicker(true);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>{_.t('work_time')}</Text>
        <View
          style={{flexDirection: 'row', paddingVertical: 10, paddingLeft: 2}}>
          <TouchableOpacity
            onPress={() => {
              openSelectTimeModal('time_from');
            }}>
            <Text style={styles.timeTxt}>{timeFrom}</Text>
          </TouchableOpacity>
          <Text style={{paddingHorizontal: 10, color: '#6DB7E8'}}> - </Text>
          <TouchableOpacity
            onPress={() => {
              openSelectTimeModal('time_to');
            }}>
            <Text style={styles.timeTxt}>{timeTo}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        locale={locales[0].languageTag}
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={setTime}
        onCancel={() => setVisibleTimePicker(false)}
        isDarkModeEnabled={false}
        headerTextIOS={timePickerTitle}
        cancelTextIOS={_.t('cancel')}
        confirmTextIOS={_.t('select')}
        display="spinner"
        date={defaultDate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  timeTxt: {
    color: '#6DB7E8',
    alignItems: 'center',
  },
});

export default WorkTime;
