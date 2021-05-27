import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '../../services/i18n';
import {breaksDelete} from '../../actions/user';

const days = [
  {
    id: 1,
    title: 'monday_short',
  },
  {
    id: 2,
    title: 'tuesday_short',
  },
  {
    id: 3,
    title: 'wednesday_short',
  },
  {
    id: 4,
    title: 'thursday_short',
  },
  {
    id: 5,
    title: 'friday_short',
  },
  {
    id: 6,
    title: 'saturday_short',
  },
  {
    id: 7,
    title: 'sunday_short',
  },
];

const WorkspaceBreaks = () => {
  const dispatch = useDispatch();
  const {workspace_breaks} = useSelector((state) => state.user);

  const getBreakDays = () => {
    const breakDays = [];
    days.map((d) => {
      if (workspace_breaks[0].days[d.id] === 'on') {
        breakDays.push(_.t(d.title));
      }
    });
    return breakDays.join(', ');

  };

  const breakDaysStr = getBreakDays();
  if (breakDaysStr.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{breakDaysStr}</Text>
        <Text style={styles.time}>
          {workspace_breaks[0].start} - {workspace_breaks[0].end}
        </Text>
        <Text style={styles.dinner}>{_.t('dinner')}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(breaksDelete());
        }}
        hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
        <Icon size={24} color="#373737" name="close" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F4F4F5',
    borderColor: '#D7DBE4',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#3A3636',
    fontSize: 14,
  },
  time: {
    color: '#6DB7E8',
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 10,
  },
  dinner: {
    color: '#C1C1C1',
    fontSize: 12,
  },
});

export default WorkspaceBreaks;
