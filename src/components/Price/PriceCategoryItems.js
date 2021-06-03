import React, {useState} from 'react';
import {FlatList} from 'react-native';
import PriceCategoryItem from '../../components/Price/PriceCategoryItem';

const PriceCategoryItems = ({items}) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <FlatList
      keyExtractor={(item) => `price-item-${item.id}`}
      data={items}
      renderItem={({item}) => (
        <PriceCategoryItem
          setActiveId={setActiveId}
          {...item}
          activeId={activeId}
        />
      )}
    />
  );
};

export default PriceCategoryItems;
