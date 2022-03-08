import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const Title = ({title}) => {
  return (
    <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
      <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>
        Collection of
      </Text>
      <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>{title}</Text>
    </View>
  );
};

export default Title;
