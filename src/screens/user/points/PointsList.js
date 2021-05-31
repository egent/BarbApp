import React, {useState} from 'react';
import {FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PointMenuItem from '../../../components/Points/PointMenuItem';
import {workplaceDeleteRequest} from '../../../actions/user';
import Preloader from '../../../components/PreLoader';
import ModalAlert from '../../../components/modal/Alert';
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
    title: 'in_client_location',
    subTitle: 'add_client_location',
    icon: <Image source={carIcon} width={24} height={24} />,
    in_client_location: '',
    type_id: 3,
  },
];

const PointsList = ({navigation}) => {
  const {workspaces, loading} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState(false);
  const [addressId, setAddressId] = useState(null);

  const deleteAddress = (address_id) => {
    setAlertVisible(true);
    setAddressId(address_id);
  };

  const toggleAlert = () => {
    setAlertVisible(!alertVisible);
  }

  const _deleteAddress = () => {
    dispatch(workplaceDeleteRequest({address_id: addressId}));
    setAlertVisible(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
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
      <ModalAlert
        visible={alertVisible}
        toggle={toggleAlert}
        title='delete_workplace'
        onPress={_deleteAddress}
      />
    </>
  );
};

export default PointsList;
