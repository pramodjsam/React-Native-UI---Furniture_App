import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {COLORS, icons, SIZES} from '../../../constants';

const Header = () => {
  return (
    <View
      style={{marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
          onPress={() => console.log('menu clicked')}>
          <Image
            source={icons.menu}
            style={{width: 25, height: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
          onPress={() => console.log('search clicked')}>
          <Image
            source={icons.search}
            style={{width: 25, height: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
