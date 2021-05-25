import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ScheduleDays from './Days';
import ScheduleOdd from './Odd';
import _ from '../../../services/i18n';
import {setForm} from '../../../actions/user';

const menu = [
  {
    id: 1,
    title: 'schedule_day',
  },
  {
    id: 2,
    title: 'schedule_odd',
  },
  {
    id: 3,
    title: 'schedule_no',
  },
];

const Schedule = () => {
  const dispatch = useDispatch();
  const {scheduleMenuActive} = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{_.t('schedule')}</Text>
      <View style={styles.btnGroup}>
        {menu.map((m) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                dispatch(setForm({payload: {scheduleMenuActive: m.id}}))
              }
              style={[
                styles.btn,
                {
                  backgroundColor:
                    m.id === scheduleMenuActive ? '#D9D9D9' : '#F3F3F3',
                },
              ]}
              key={`schedule-menu-${m.id}`}>
              <Text style={styles.btnText}>{_.t(m.title)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {scheduleMenuActive === 1 && (
        <ScheduleDays />
      )}

      {scheduleMenuActive === 2 && (
        <ScheduleOdd />
      )}

      {scheduleMenuActive === 3 && (
        <Text style={{marginTop: 10, marginBottom: 20}}>
          {_.t('schedule_default')}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 14,
    color: '#B6B8BC',
  },
  btnGroup: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  btn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CEC8C8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  btnText: {
    color: '#000',
    fontSize: 12,
  },
});

export default Schedule;
