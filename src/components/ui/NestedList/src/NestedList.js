import React, {useState} from 'react';
import {View, YellowBox} from 'react-native';
import NestedListView from './NestedListView';

YellowBox.ignoreWarnings(['Require cycle:']);

export default function NestedList({
  listItems,
  listWrapperStyle,
  childrenPath = 'children',
  itemContent,
  opacity,
  onItemPressed = (item) => {},
  onLastItemPressed = (item) => {},
  itemKey,
  keyboardShouldPersistTaps = 'never',
  activeItems,
}) {
  const [activeSections, setActiveSections] = useState(activeItems);

  const updateActiveSection = (item) => {
    if (!item[childrenPath] || item[childrenPath].length < 1) {
      onLastItemPressed(item);
    } else {
      let newSelections = [...activeSections];
      const activeElement = isNodeActive(item);
      if (activeElement) {
        newSelections = [
          ...searchForChildrenToRemove(newSelections, activeElement),
        ];
      } else {
        newSelections.push(item);
      }
      setActiveSections(newSelections);
    }
    onItemPressed(item);
  };

  function searchForChildrenToRemove(newSelections, elementToRemove) {
    var index = newSelections.indexOf(elementToRemove);
    if (index !== -1) {
      newSelections.splice(index, 1);
      if (newSelections.length && elementToRemove[childrenPath]) {
        elementToRemove[childrenPath].forEach((child) => {
          if (isNodeActive(child)) {
            searchForChildrenToRemove(newSelections, child);
          }
        });
      }
    }
    return newSelections;
  }

  function isNodeActive(item) {
    return activeSections.find((element) => element.id === item.id);
  }

  return (
    <>
      {listItems && (
        <View style={listWrapperStyle}>
          <NestedListView
            items={listItems}
            updateActiveSection={updateActiveSection}
            isNodeActive={isNodeActive}
            childrenPath={childrenPath}
            itemContent={itemContent}
            opacity={opacity}
            itemKey={itemKey}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          />
        </View>
      )}
    </>
  );
}
