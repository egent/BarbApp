import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '../../services/i18n';
import {breaksDelete} from '../../actions/user';

const days = [
  {
    id: 0,
    title: 'monday_short',
  },
  {
    id: 1,
    title: 'tuesday_short',
  },
  {
    id: 2,
    title: 'wednesday_short',
  },
  {
    id: 3,
    title: 'thursday_short',
  },
  {
    id: 4,
    title: 'friday_short',
  },
  {
    id: 5,
    title: 'saturday_short',
  },
  {
    id: 6,
    title: 'sunday_short',
  },
];

const WorkspaceBreaks = () => {
  const dispatch = useDispatch();
  const {breaks_done} = useSelector((state) => state.user);

  const getBreakDays = (b) => {
    const breakDays = [];
    try {
      days.map((d) => {
        if (b.days[d.id] === 'on') {
          breakDays.push(_.t(d.title));
        }
      });
    } catch (e) {}
    return breakDays.length > 0 ? breakDays.join(', ') : '';
  };

  return (
    <>
      {breaks_done.map((item, index) => {
        return (
          <View style={styles.container} key={`break-${index}`}>
            <View>
              <Text style={styles.title}>{getBreakDays(item)}</Text>
              <Text style={styles.time}>
                {item.start} - {item.end}
              </Text>
              {item.comment !== undefined && item.comment.length > 0 && (
                <Text style={styles.dinner}>{item.comment}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(breaksDelete({index}));
              }}
              hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
              <Icon size={24} color="#373737" name="close" />
            </TouchableOpacity>
          </View>
        );
      })}
    </>
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
