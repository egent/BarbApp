import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import _ from '../../services/i18n';

import businessCenter from '../../assets/images/menu/business_center.png';
import iconProfile from '../../assets/images/menu/profile.png';
import iconMarker from '../../assets/images/menu/marker.png';
import iconPrice from '../../assets/images/menu/price.png';
import iconSales from '../../assets/images/menu/sales.png';
import iconPhoto from '../../assets/images/menu/photo.png';
import iconEmail from '../../assets/images/menu/email.png';
import iconTariff from '../../assets/images/menu/tariff.png';

const menu = [
  {
    id: 1,
    title: 'specialty',
    subTitle: 'Бровист. Визажист. Лешмейкер',
    showIos: true,
    check: true,
    counter: null,
    icon: <Image source={businessCenter} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 2,
    title: 'profile_photo_description_experience',
    showIos: true,
    check: true,
    counter: null,
    icon: <Image source={iconProfile} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 3,
    title: 'reception_locations_opening_hours',
    showIos: true,
    check: true,
    counter: null,
    icon: <Image source={iconMarker} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 4,
    title: 'services_prices',
    showIos: true,
    check: true,
    counter: 14,
    icon: <Image source={iconPrice} width={24} height={24} />,
  },
  {
    id: 5,
    title: 'promotions',
    showIos: true,
    check: true,
    counter: 5,
    icon: <Image source={iconSales} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 6,
    title: 'portfolio',
    showIos: true,
    check: true,
    counter: 31,
    icon: <Image source={iconPhoto} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 7,
    title: 'social_media',
    showIos: true,
    check: true,
    counter: null,
    icon: <Image source={iconEmail} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 8,
    title: 'tarif',
    showIos: false,
    check: true,
    counter: null,
    icon: <Image source={iconTariff} width={24} height={24} />,
    screenName: '',
  },
];

const Profile = ({navigation}) => {
  const {info} = useSelector((state) => state.user);
  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <View style={styles.box}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                paddingLeft: 10,
              }}
              hitSlop={{top: 40, bottom: 40, left: 10, right: 40}}
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialIcons name="chevron-left" color="#fff" size={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="person" color="#F50263" size={45} />
            </View>
            <View style={styles.info}>
              <Text style={styles.fio}>{info?.name}</Text>
              <Text style={styles.city}>{info?.city?.name}</Text>
            </View>
          </View>
          <View style={styles.box} />
        </View>
      }
      keyExtractor={({id}) => `menu-${id}`}
      data={menu}
      renderItem={({item: {title, icon, subTitle, counter, showIos}}) => {
        if (Platform.OS === 'ios' && showIos === false) {
          return null;
        }
        return (
          <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
            <View style={styles.iconListContainer}>{icon}</View>

            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.title}>{_.t(title)}</Text>
                {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
              </View>
              {counter && <Text style={styles.counter}>{counter}</Text>}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#F50263',
    marginBottom: 30,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    paddingTop: 10,
  },
  content: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  info: {
    paddingTop: 5,
  },
  fio: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  city: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconListContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flex: 6,
    borderBottomWidth: 1,
    borderColor: '#B4B4B4',
    paddingBottom: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 14,
    color: '#B1B7BC',
    paddingTop: 5,
  },
  counter: {
    fontSize: 22,
    color: '#A9B0B4',
  },
});

export default Profile;
