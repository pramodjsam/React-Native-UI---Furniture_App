import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import Header from './Header';

const Info = ({itemInfo}) => {
  return (
    <ImageBackground
      source={itemInfo.image}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Header />

      <View
        style={{
          position: 'absolute',
          top: '45%',
          left: '15%',
          height: 40,
          width: 40,
          borderRadius: 80,
          backgroundColor: COLORS.transparentLightGray1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 20,
            backgroundColor: COLORS.blue,
          }}></View>
      </View>

      <View
        style={{
          position: 'absolute',
          top: '43%',
          left: '30%',
          flexDirection: 'row',
          padding: SIZES.radius * 1.5,
          backgroundColor: COLORS.transparentLightGray1,
          width: '50%',
          borderRadius: 10,
        }}>
        <View style={{flex: 2}}>
          <Text style={{color: COLORS.darkGray, ...FONTS.h3}}>
            {itemInfo.productName}
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Text style={{color: COLORS.darkGreen, ...FONTS.h3}}>
            $ {itemInfo.price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: '20%',
          left: SIZES.padding,
          right: SIZES.padding,
        }}>
        <Text style={{color: COLORS.lightGray2, ...FONTS.body2}}>
          Furniture
        </Text>
        <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1}}>
          {itemInfo.productName}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Info;
