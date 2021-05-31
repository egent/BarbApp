import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '../../services/i18n';

const PointMenuItem = ({
  id,
  title,
  subTitle,
  icon,
  screenName,
  navigation,
  type_id,
  workspaces,
  remove,
}) => {
  const places = workspaces[type_id].data;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {icon}
        <Text style={styles.title}>{_.t(title)}</Text>
      </View>
      {places.map((p, index) => {
        return (
          <View key={`place-${p.id}`} style={[styles.placeContainer, {marginTop: index === 0 ? 10 : 0}]}>
            <View style={styles.info}>
              {type_id === 2 && <Text style={styles.name}>{p.salon_name}</Text>}
              {type_id !== 3 ? (<Text style={styles.street}>{p.street}</Text>) : (<Text style={styles.street}>{Object.values(p.districts).join(', ')}</Text>)}
              {p.phones !== null && (
                <Text style={styles.phones}>{p.phones.join(', ')}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {remove(p.id)}}
              hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
              <Icon size={24} color="#373737" name="close" />
            </TouchableOpacity>
          </View>
        );
      })}
      {
        (type_id !== 3 || (type_id === 3 && places.length < 2)) && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WorkspaceAdd', {type_id});
            }}>
            <Text style={styles.subTitle}>{_.t(subTitle)}</Text>
          </TouchableOpacity>
        )
      }
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
  placeContainer: {
    // marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#F4F4F5',
    borderColor: '#D7DBE4',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#161414',
    fontSize: 14,
  },
  info: {
    paddingLeft: 25,
  },
  street: {
    fontSize: 16,
    color: '#6DB7E8',
    paddingVertical: 5,
  },
  phones: {
    color: '#CFCFCF',
    fontSize: 12,
  },
});

export default PointMenuItem;
