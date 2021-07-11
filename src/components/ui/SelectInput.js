import React, {useRef, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {find} from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Select2 from '../../components/SelectTwo';
import _ from '../../services/i18n';
const {width} = Dimensions.get('window');

const SelectInput = ({
  data,
  saveData,
  label,
  value,
  containerStyles = {},
  isSelectSingle = true,
  colorArrow = '#B4B4B4',
  popupTitle = 'select_city',
  selectedItems = [],
}) => {
  const selectorRef = useRef(null);

  const list = [...data];

  useEffect(() => {
    setDefault();
  }, []);

  const setDefault = () => {
    list.map((item) => {
      item.checked = false;
      if (isSelectSingle) {
        if (item.id === selectedItems?.id) {
          item.checked = true;
        }
      } else {
        if (find(selectedItems, {id: item.id})) {
          item.checked = true;
        }
      }
    });
  };

  return (
    <>
      <View style={[styles.container, {...containerStyles}]}>
        <Text style={styles.label}>{_.t(label)}</Text>
        <TouchableOpacity
          onPress={() => selectorRef.current.showModal()}
          style={styles.field}
          activeOpacity={0.8}>
          <Text style={styles.value}>{value}</Text>
          <Icon name="chevron-right" size={25} color={colorArrow} />
        </TouchableOpacity>
      </View>
      <Select2
        selectedItems={selectedItems}
        selectedName={value}
        ref={selectorRef}
        title={value}
        isSelectSingle={isSelectSingle}
        showSearchBox={true}
        popupTitle={_.t(popupTitle)}
        data={data}
        buttonStyle={{borderRadius: 0}}
        onSelect={(id, selected) => {
          if (selected.length > 0) {
            if (isSelectSingle) {
              saveData({
                id: selected[0]['id'],
                name: selected[0]['name'],
              });
            } else {
              saveData(selected);
            }
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
    minHeight: 48,
    paddingLeft: 5,
    paddingVertical: 5,
  },
  value: {
    color: '#7C7F84',
    fontSize: 14,
    flexShrink: 1,
    // flex: 1,
  },
});

export default SelectInput;
