import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import _ from '@services/i18n';
import imgClose from '@assets/images/close-blue.png';
import * as S from './styled';

const photoTxtDesc = _.t('select_photo');

const MediaPiker = ({
  styles,
  photos,
  handleDelete,
  addPhoto,
  legend,
  limit = 100,
}) => {

  const options = {
    title: photoTxtDesc,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    includeBase64: true,
    cancelButtonTitle: _.t('cancel'),
    takePhotoButtonTitle: _.t('take_photo'),
    chooseFromLibraryButtonTitle: _.t('open_gallery'),
    options: {
      selectionLimit: limit === 1 ? limit : 0,
      allowMultiple: true,
    },
  };

  const handleAdd = () => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        addPhoto(response.assets);

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
      <S.Legend>{_.t(legend)}</S.Legend>
      <S.PhotosContainer>
        {photos && photos.length < limit && (
          <S.MediaAdd activeOpacity={0.8} onPress={handleAdd}>
            <S.Icons name="plus" color="#6DB7E8" size={24} />
            <S.Text>{_.t('photo_add')}</S.Text>
          </S.MediaAdd>
        )}

        {photos &&
          photos.map((photo, index) => {
            return (
              <S.PhotoContainer>
                <S.Photo
                  resizeMode="cover"
                  key={`${photo.uri}`}
                  source={{uri: photo.uri ? photo.uri : photo.src}}
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
