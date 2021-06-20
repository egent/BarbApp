import moment from 'moment';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as RNLocalize from 'react-native-localize';
import {setForm} from '../../../actions/user';
import _ from '../../../services/i18n';

const locales = RNLocalize.getLocales();
const today = new Date();
const DEFAULT_MINUTES = Platform.OS === 'ios' ? today.getMinutes(0) : today;

const ScheduleDays = () => {
  const dispatch = useDispatch();
  const {scheduleDays} = useSelector((state) => state.user);
  const [isTimePickerVisible, setVisibleTimePicker] = useState(false);
  const [timePickerTitle, setTimePickerTitle] = useState('');
  const [timeParams, setTimeParams] = useState(null);

  const setWorkDay = (d) => {
    const days = [...scheduleDays];
    days.map((item) => {
      if (d.id === item.id) {
        item.workday = d.workday === 'on' ? 'off' : 'on';
      }
    });
    dispatch(setForm({payload: {scheduleDays: days}}));
  };

  const setTime = (time) => {
    if (timeParams !== null) {
      const selectedTime = moment(time).format('HH:mm');
      const days = [...scheduleDays];
      days.map((item) => {
        if (timeParams.day.id === item.id) {
          if (timeParams.type === 'from') {
            item.time_from = selectedTime;
          } else {
            item.time_to = selectedTime;
          }
        }
      });
      dispatch(setForm({payload: {scheduleDays: days}}));
      setVisibleTimePicker(false);
    }
  };

  const openSelectTimeModal = (day, type) => {
    setTimeParams({
      day,
      type,
    });
    setTimePickerTitle(`${_.t(day.title)} - ${_.t(type)}`);
    setVisibleTimePicker(true);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{_.t('work_time')}</Text>
        {scheduleDays.map((day) => {
          return (
            <View key={`day-${day.id}`} style={styles.item}>
              <View style={styles.name}>
                <Text
                  style={[
                    styles.day,
                    {color: day.workday === 'on' ? '#000' : '#C6C6C6'},
                  ]}>
                  {_.t(day.title)}
                </Text>
              </View>

              <View style={styles.time}>
                {day.workday === 'on' ? (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        openSelectTimeModal(day, 'from');
                      }}>
                      <Text style={styles.timeTxt}>{day.time_from}</Text>
                    </TouchableOpacity>
                    <Text> - </Text>
                    <TouchableOpacity
                      onPress={() => {
                        openSelectTimeModal(day, 'to');
                      }}>
                      <Text style={styles.timeTxt}>{day.time_to}</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <Text style={[styles.dayOff]}>{_.t('day_off')}</Text>
                )}
              </View>

              <TouchableOpacity
                onPress={() => {
                  setWorkDay(day);
                }}
                style={styles.icon}>
                <Icon
                  size={32}
                  color={day.workday === 'on' ? '#6DB7E8' : '#BEC3C7'}
                  name={
                    day.workday === 'on'
                      ? 'toggle-switch-outline'
                      : 'toggle-switch-off-outline'
                  }
                />
              </TouchableOpacity>
            </View>
          );
        })}
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
        date={DEFAULT_MINUTES}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    color: '#B6B8BC',
    marginBottom: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    flex: 3,
    justifyContent: 'center',
  },
  day: {
    fontSize: 14,
  },
  time: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  timeTxt: {
    color: '#6DB7E8',
    alignItems: 'center',
  },
  dayOff: {
    fontSize: 14,
    color: '#B6B8BC',
  },
});

export default ScheduleDays;
