import React from 'react';
import ImagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';
import _ from '@services/i18n';
import {
  servicesCategoryPhotos,
  servicesCategoryPhotoRemove,
} from '@actions/services';
import imgClose from '@assets/images/close-blue.png';
import * as S from './styled';

const photoTxtDesc = _.t('select_photo');
const options = {
  title: photoTxtDesc,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  cancelButtonTitle: _.t('cancel'),
  takePhotoButtonTitle: _.t('take_photo'),
  chooseFromLibraryButtonTitle: _.t('open_gallery'),
};

const MediaPiker = ({styles}) => {
  const dispatch = useDispatch();
  const {serviceCategoryPhotos} = useSelector((state) => state.services);
  const handleDelete = (photo) => {
    dispatch(servicesCategoryPhotoRemove(photo));
  };

  const handleAdd = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response);
        dispatch(servicesCategoryPhotos(response));
        // height: 3024
        // origURL: "assets-library://asset/asset.HEIC?id=CC95F08C-88C3-4012-9D6D-64A413D254B3&ext=HEIC"
        // fileName: null
        // data: "/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAA"
        // width: 4032
        // type: "image/jpeg"
        // fileSize: 13727237
        // isVertical: false
        // url
        //     image: 'data:image/jpeg;base64,' + response.data,
      }
    });
  };

  return (
    <S.Container style={{...styles}}>
      <S.Legend>{_.t('service_photo')}</S.Legend>
      <S.PhotosContainer>
        <S.MediaAdd activeOpacity={0.8} onPress={handleAdd}>
          <S.Icons name="plus" color="#6DB7E8" size={24} />
          <S.Text>{_.t('photo_add')}</S.Text>
        </S.MediaAdd>

        {serviceCategoryPhotos.map((photo, index) => {
          return (
            <S.PhotoContainer>
              <S.Photo
                resizeMode="cover"
                key={`${photo.uri}`}
                source={{uri: photo.uri}}
              />
              <S.CloseBtn
                activeOpacity={0.8}
                onPress={() => handleDelete(photo)}>
                <S.CloseIcon source={imgClose} />
              </S.CloseBtn>
            </S.PhotoContainer>
          );
        })}
      </S.PhotosContainer>
    </S.Container>
  );
};

export default MediaPiker;
