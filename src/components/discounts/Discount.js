import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import _ from '@services/i18n';
import {numberFormat} from '@services/helpers/utils';

const Discount = ({isDiscount, price, priceOld, update, discount}) => {

  const getPercent = (price1, price2) => {
    if (parseInt(price1) > 0 && parseInt(price2) > 0) {
      const discountPercent =
        (parseInt(price2) - parseInt(price1)) / (parseInt(price2) / 100);
      update({promoDiscount: numberFormat(discountPercent)});
    }
  };

  const onPressIsDiscount = () => {
    update({isDiscount: !isDiscount});
  };

  const updatePrice = (val) => {
    update({promoPrice: val});
    getPercent(val, priceOld);
  };

  const updatePriceOld = (val) => {
    update({promoPriceOld: val});
    getPercent(price, val);
  };

  return (
    <Container>
      <CheckBoxContainer onPress={onPressIsDiscount}>
        <Icon
          name={isDiscount ? 'check-box' : 'check-box-outline-blank'}
          color={isDiscount ? '#6DB7E8' : '#AFAFAF'}
          size={24}
        />
        <Legend>{_.t('discount')}</Legend>
      </CheckBoxContainer>
      {isDiscount && (
        <>
          <LegendInputs>{_.t('discountInputLegend')}</LegendInputs>
          <InputsContainers>
            <InputContainer>
              <Input
                placeholder={_.t('priceDiscount')}
                value={price}
                onChangeText={updatePrice}
                onFocus={(e) => {
                  updatePrice('');
                }}
                blurOnSubmit={true}
                keyboardType="phone-pad"
                returnKeyType="done"
                underlineColorAndroid="transparent"
              />
              <Currency>{_.t('uah')}</Currency>
            </InputContainer>
            <InputContainer>
              <Input
                placeholder={_.t('priceDiscountOld')}
                value={priceOld}
                onChangeText={updatePriceOld}
                onFocus={(e) => {
                  updatePriceOld('');
                }}
                blurOnSubmit={true}
                keyboardType="phone-pad"
                returnKeyType="done"
                underlineColorAndroid="transparent"
              />
              <Currency>{_.t('uah')}</Currency>
            </InputContainer>
          </InputsContainers>
          <DiscountPercent>
            <DiscountPercentText>
              {_.t('discount')} {discount} %
            </DiscountPercentText>
          </DiscountPercent>
        </>
      )}
    </Container>
  );
};

const Container = styled.View``;

const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Legend = styled.Text`
  color: #b6b8bc;
  font-size: 14px;
  padding-left: 3px;
`;

const LegendInputs = styled.Text`
  color: #b6b8bc;
  font-size: 14px;
  padding: 10px 0;
`;

const InputsContainers = styled.View`
  flex-direction: row;
  flex: 1;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const Currency = styled.Text`
  color: #b6b8bc;
  font-size: 14px;
  padding-left: 10px;
`;

const Input = styled.TextInput`
  border-color: #d4d6df;
  border-width: 1px;
  height: 32px;
  width: 120px;
  padding: 5px;
`;

const DiscountPercent = styled.View`
  height: 50px;
  background-color: #f5f5f5;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const DiscountPercentText = styled.Text`
  color: #928c8c;
  font-size: 14px;
`;

export default Discount;
