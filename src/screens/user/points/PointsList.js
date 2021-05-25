import React, {useEffect} from 'react';
import {FlatList, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import PointMenuItem from '../../../components/Points/PointMenuItem';
// import {getWorkplacesRequest} from '../../../actions/user'

import carIcon from '../../../assets/images/car.png';
import houseIcon from '../../../assets/images/house.png';
import bedIcon from '../../../assets/images/bed.png';

const menu = [
  {
    id: 1,
    title: 'in_office',
    subTitle: 'add_office_location',
    icon: <Image source={bedIcon} width={24} height={24} />,
    screenName: 'WorkspaceAdd',
  },
  {
    id: 2,
    title: 'in_house',
    subTitle: 'add_master_location',
    icon: <Image source={houseIcon} width={24} height={24} />,
    screenName: '',
  },
  {
    id: 3,
    title: 'in_office',
    subTitle: 'add_client_location',
    icon: <Image source={carIcon} width={24} height={24} />,
    in_client_location: '',
  },
];

const PointsList = ({navigation}) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getWorkplacesRequest());
  // });

  return (
    <FlatList
      data={menu}
      keyExtractor={({id}) => `points-menu-${id}`}
      renderItem={({item}) => <PointMenuItem {...item} navigation={navigation} />}
    />
  );
};

export default PointsList;
