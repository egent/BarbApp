import React from 'react';
import {FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PointMenuItem from '../../../components/Points/PointMenuItem';
import {workplaceDeleteRequest} from '../../../actions/user'
import Preloader from '../../../components/PreLoader';

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
    type_id: 2,
  },
  {
    id: 2,
    title: 'in_house',
    subTitle: 'add_master_location',
    icon: <Image source={houseIcon} width={24} height={24} />,
    screenName: '',
    type_id: 1,
  },
  {
    id: 3,
    title: 'in_office',
    subTitle: 'add_client_location',
    icon: <Image source={carIcon} width={24} height={24} />,
    in_client_location: '',
    type_id: 3,
  },
];

const PointsList = ({navigation}) => {
  const {workspaces, loading} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getWorkplacesRequest());
  // });

  const deleteAddress = (address_id) => {
    dispatch(workplaceDeleteRequest({address_id}))
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <FlatList
      data={menu}
      keyExtractor={({id}) => `points-menu-${id}`}
      renderItem={({item}) => (
        <PointMenuItem
          {...item}
          workspaces={workspaces}
          navigation={navigation}
          remove={deleteAddress}
        />
      )}
    />
  );
};

export default PointsList;
