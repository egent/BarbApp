import React, {useState} from 'react';
import moment from 'moment';
import styled from 'styled-components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as RNLocalize from 'react-native-localize';
import _ from '../../services/i18n';

const locales = RNLocalize.getLocales();

const PromoSelect = ({active, text, onPress}) => {
  return (
    <Line onPress={onPress}>
      <Icon
        name={active ? 'radio-button-checked' : 'radio-button-unchecked'}
        color={active ? '#6DB7E8' : '#E0E0E0'}
        size={24}
      />
      <Text>{_.t(text)}</Text>
    </Line>
  );
};

const SelectDate = ({date, text, update}) => {
  const [isVisible, setVisible] = useState(false);

  const onConfirm = (d) => {
    update(moment(d).format('DD.MM.YYYY'));
    setVisible(false);
  };

  return (
    <>
      <SelectDateContainer onPress={() => setVisible(true)}>
        <DateLegendText>{_.t(text)}</DateLegendText>
        <DateText>{date.length > 0 ? date : _.t('promoDefaultDate')}</DateText>
      </SelectDateContainer>
      <DateTimePickerModal
        locale={locales[0].languageTag}
        isVisible={isVisible}
        mode="date"
        onConfirm={onConfirm}
        onCancel={() => setVisible(false)}
        headerTextIOS={_.t('select_date')}
        cancelTextIOS={_.t('cancel')}
        confirmTextIOS={_.t('select')}
        isDarkModeEnabled={false}
        display="spinner"
      />
    </>
  );
};

const PromoTimes = ({dateFrom, dateTo, update, isPromo}) => {
  const updateDateFree = (val) => {
    let payload = {isPromoDate: val};
    update(payload);
  };

  return (
    <Container>
      <PromoSelect
        onPress={() => updateDateFree(false)}
        active={!isPromo}
        text="noLimitPromo"
      />
      <PromoSelect
        onPress={() => updateDateFree(true)}
        active={isPromo}
        text="limitPromo"
      />
      {isPromo && (
        <>
          <SelectDate
            update={(date) => update({promoDateFrom: date})}
            date={dateFrom}
            text="begin"
          />
          <SelectDate
            update={(date) => update({promoDateTo: date})}
            date={dateTo}
            text="end"
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  margin-top: 10px;
`;

const Line = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: #b6b8bc;
  padding-left: 5px;
`;

const SelectDateContainer = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #e6e7ec;
  margin-top: 15px;
  padding-bottom: 5px;
  justify-content: space-between;
`;

const DateLegendText = styled.Text`
  color: #b6b8bc;
  font-size: 14px;
`;

const DateText = styled.Text`
  color: #6db7e8;
  font-size: 14px;
`;

export default PromoTimes;
