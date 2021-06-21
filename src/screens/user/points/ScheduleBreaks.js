import moment from 'moment';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as RNLocalize from 'react-native-localize';
import _ from '../../../services/i18n';
import {setForm} from '../../../actions/user';

const locales = RNLocalize.getLocales();

const days = [
  {
    id: 1,
    title: 'monday',
  },
  {
    id: 2,
    title: 'tuesday',
  },
  {
    id: 3,
    title: 'wednesday',
  },
  {
    id: 4,
    title: 'thursday',
  },
  {
    id: 5,
    title: 'friday',
  },
  {
    id: 6,
    title: 'saturday',
  },
  {
    id: 7,
    title: 'sunday',
  },
];

const ScheduleBreaks = () => {
  const {workspace_breaks} = useSelector((state) => state.user);
  const [isTimePickerVisible, setVisibleTimePicker] = useState(false);
  const [timePickerTitle, setTimePickerTitle] = useState('');
  const [timeParams, setTimeParams] = useState(null);
  const [defaultDate, setDefaultDate] = useState(new Date());
  const dispatch = useDispatch();

  const openSelectTimeModal = (type) => {
    setTimeParams({type});

    setDefaultDate(
      type === 'from'
        ? new Date(new Date().setHours(12, 0, 0, 0))
        : new Date(new Date().setHours(13, 0, 0, 0)),
    );

    setTimePickerTitle(`${_.t('break')} - ${_.t(type)}`);
    setVisibleTimePicker(true);
  };

  const setTime = (time) => {
    const {type} = timeParams;
    if (timeParams !== null) {
      const selectedTime = moment(time).format('HH:mm');
      const breaks = JSON.parse(JSON.stringify(workspace_breaks));

      if (type === 'from') {
        breaks.start = selectedTime;
        breaks.end = moment(time).add(1, 'hours').format('HH:mm');
      } else {
        breaks.end = selectedTime;
      }

      dispatch(setForm({payload: {workspace_breaks: breaks}}));
      setVisibleTimePicker(false);
    }
  };

  const setDay = (id, active) => {
    const breaks = JSON.parse(JSON.stringify(workspace_breaks));

    breaks[0].days[id] = active ? 'off' : 'on';
    dispatch(setForm({payload: {workspace_breaks: breaks}}));
  };

  const setBreakComment = (comment) => {
    const breaks = JSON.parse(JSON.stringify(workspace_breaks));
    breaks[0].comment = comment;
    dispatch(setForm({payload: {workspace_breaks: breaks}}));
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <Text style={styles.title}>{_.t('break_long')}</Text>
      <View style={styles.time}>
        <TouchableOpacity
          onPress={() => {
            openSelectTimeModal('from');
          }}>
          <Text style={styles.timeTxt}>{workspace_breaks[0].start}</Text>
        </TouchableOpacity>
        <Text style={styles.title}> - </Text>
        <TouchableOpacity
          onPress={() => {
            openSelectTimeModal('to');
          }}>
          <Text style={styles.timeTxt}>{workspace_breaks[0].end}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.daysTitle}>{_.t('break_days_active')}</Text>
      <View style={styles.daysContainer}>
        {days.map((day) => {
          const active =
            workspace_breaks[0].days[day.id] === 'on' ? true : false;
          return (
            <TouchableOpacity
              style={styles.day}
              onPress={() => setDay(day.id, active)}>
              <Icon
                size={23}
                color={active ? '#6DB7E8' : '#484444'}
                name={active ? 'checkbox-marked' : 'checkbox-blank-outline'}
              />
              <Text style={styles.dayTitle}>{_.t(day.title)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        <Text style={styles.commentTitle}>{_.t('breaks_comment')}</Text>
        <TextInput
          style={styles.comment}
          multiline={true}
          underlineColorAndroid="transparent"
          numberOfLines={5}
          onChangeText={setBreakComment}
          value={workspace_breaks[0].comment}
          keyboardType="default"
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <Text style={styles.commentHint}>{_.t('breaks_example_comment')}</Text>
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
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  time: {
    flexDirection: 'row',
    marginTop: 5,
  },
  title: {
    color: '#B6B8BC',
    fontSize: 14,
  },
  timeTxt: {
    color: '#6DB7E8',
    fontSize: 14,
  },
  day: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayTitle: {
    fontSize: 14,
    color: '#000',
    paddingLeft: 10,
  },
  daysContainer: {
    marginVertical: 10,
  },
  daysTitle: {
    marginTop: 25,
    color: '#B6B8BC',
    fontSize: 14,
  },
  comment: {
    borderColor: '#D4D6DF',
    borderWidth: 1,
    height: 60,
    marginVertical: 10,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  commentTitle: {
    fontSize: 14,
    color: '#B6B8BC',
  },
  commentHint: {
    fontSize: 12,
    color: '#D4D4D4',
  },
});

export default ScheduleBreaks;
