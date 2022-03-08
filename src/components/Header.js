import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {icons, SIZES} from '../../constants';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.padding,
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('menu on clicked')}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end'}}
          onPress={() => console.log('cart on clicked')}>
          <Image
            source={icons.cart}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
