import {reject} from 'lodash';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PriceCategoryItem from '../../components/Price/PriceCategoryItem';
import {setForm} from '../../actions/user';

const PriceCategoryItems = ({items}) => {
  const [activeId, setActiveId] = useState(null);
  const dispatch = useDispatch();
  const {priceSelect} = useSelector((state) => state.user);
  let pSelect = JSON.parse(JSON.stringify(priceSelect));

  const updateActiveId = (val, id) => {
    setActiveId(val ? id : false);
    if (!val) {
      const payload = {
        showPriceSaveBtn: true,
        priceSelect: reject(pSelect, {cat_id: id}),
      };
      dispatch(
        setForm({
          payload,
        }),
      );
    }
  };

  return (
    <FlatList
      keyExtractor={(item) => `price-item-${item.id}`}
      data={items}
      renderItem={({item}) => {
        return (
          <PriceCategoryItem
            setActiveId={updateActiveId}
            {...item}
            activeId={activeId}
          />
        );
      }}
    />
  );
};

export default PriceCategoryItems;
