import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import _ from '../../services/i18n';

const PointMenuItem = ({id, title, subTitle, icon, screenName, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {icon}
        <Text style={styles.title}>{_.t(title)}</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('WorkspaceAdd')}}>
        <Text style={styles.subTitle}>{_.t(subTitle)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#B4B4B4',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    paddingLeft: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#6DB7E8',
    paddingLeft: 34,
  },
});

export default PointMenuItem;
