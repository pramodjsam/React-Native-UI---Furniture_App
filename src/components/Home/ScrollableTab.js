import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const ScrollableTab = ({tablist, selectedTab, onPress}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: SIZES.padding}}
        onPress={() => onPress(item)}>
        <Text style={{color: COLORS.secondary, ...FONTS.body2}}>
          {item.name}
        </Text>
        {selectedTab.id == item.id && (
          <View style={{alignItems: 'center', marginTop: SIZES.base}}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: COLORS.blue,
              }}></View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tablist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ScrollableTab;
