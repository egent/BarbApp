import React, {useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Select2 from '../../components/SelectTwo';
import _ from '../../services/i18n';
const {width} = Dimensions.get('window');

const SelectInput = ({data, saveData, label, value, containerStyles = {}}) => {
  const selectorRef = useRef(null);

  return (
    <>
      <View style={[styles.container, {...containerStyles}]}>
        <Text style={styles.label}>{_.t(label)}</Text>
        <TouchableOpacity onPress={() => selectorRef.current.showModal()} style={styles.field} activeOpacity={0.8}>
          <Text style={styles.value}>{value}</Text>
          <Icon name="chevron-right" size={25} color="#85C3EC" />
        </TouchableOpacity>
      </View>
      <Select2
        selectedName={value}
        ref={selectorRef}
        title={value}
        isSelectSingle
        showSearchBox={true}
        popupTitle={_.t('select_city')}
        data={data}
        buttonStyle={{borderRadius: 0}}
        onSelect={(id, selected) => {
          if (selected.length > 0) {
            saveData({
              id: selected[0]['id'],
              name: selected[0]['name'],
            });
          }
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginBottom: 20,
  },
  label: {
    paddingBottom: 5,
    color: '#7C7F84',
    fontSize: 13,
  },
  field: {
    borderWidth: 1,
    borderColor: '#D4D6DF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    paddingLeft: 5,
  },
  value: {
    color: '#7C7F84',
    fontSize: 14,
  },
});

export default SelectInput;
