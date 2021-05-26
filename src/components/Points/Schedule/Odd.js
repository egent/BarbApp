import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '../../../services/i18n';
import {setForm} from '../../../actions/user';

const working = [
  {
    id: 1,
    title: 'working_odd',
  },
  {
    id: 1,
    title: 'working_even',
  },
];

const ScheduleOdd = () => {
  const {schedule_odd} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setSchedule = (w) => {
    dispatch(
      setForm({
        payload: {
          schedule_odd: w.title === 'working_odd' ? false : true,
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      {working.map((w) => {
        let active = false;
        if (
          (w.title === 'working_odd' &&
            (schedule_odd === false || schedule_odd === null)) ||
          (w.title === 'working_even' && schedule_odd === true)
        ) {
          active = true;
        }
        return (
          <TouchableOpacity style={styles.item} onPress={() => setSchedule(w)}>
            <Icon
              size={24}
              color="#7C7F84"
              name={active ? 'radiobox-marked' : 'radiobox-blank'}
            />
            <Text style={styles.title}>{_.t(w.title)}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    paddingLeft: 10,
    fontSize: 14,
    color: '#7C7F84',
  },
});

export default ScheduleOdd;
