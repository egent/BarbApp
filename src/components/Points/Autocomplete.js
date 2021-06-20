import React from 'react';
import {Text, StyleSheet, TouchableOpacity, FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {beautyRoomsCopy} from '../../actions/user';

const Autocomplete = () => {
  const {beauty_data} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (beauty_data === null || beauty_data.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {beauty_data.map((item) => {
        return (
          <TouchableOpacity
            key={`place-autocomplete-${item.address.id}`}
            onPress={() => dispatch(beautyRoomsCopy({place: item}))}
            style={styles.item}>
            <Text style={styles.name}>{item.salon_name}</Text>
            <Text style={styles.address}> - {item.address.street}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  // return (
  //   <FlatList
  //     nestedScrollEnabled
  //     style={styles.container}
  //     persistentScrollbar={true}
  //     showsVerticalScrollIndicator={true}
  //     keyExtractor={(item) => `place-autocomplete-${item.address.id}`}
  //     data={beauty_data}
  //     renderItem={({item}) => {
  //       return (
  //         <TouchableOpacity
  //           onPress={() => dispatch(beautyRoomsCopy({place: item}))}
  //           style={styles.item}>
  //           <Text style={styles.name}>{item.salon_name}</Text>
  //           <Text style={styles.address}> - {item.address.street}</Text>
  //         </TouchableOpacity>
  //       );
  //     }}
  //   />
  // );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    marginTop: -20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 20,
    maxHeight: 170,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  name: {
    fontSize: 14,
    color: '#706F6F',
  },
  address: {
    fontSize: 14,
    color: '#AFAFAF',
  },
});

export default Autocomplete;
