import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../../../constants';

const PromotionCard = () => {
  return (
    <View
      style={[
        styles.shadow,
        {
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          padding: SIZES.radius,
          height: 110,
          borderRadius: 20,
          backgroundColor: COLORS.white,
        },
      ]}>
      <View
        style={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray2,
          borderRadius: 20,
        }}>
        <Image
          source={images.sofa}
          resizeMode="contain"
          style={{width: '60%', height: '60%'}}
        />
      </View>

      <View
        style={{marginLeft: SIZES.radius, justifyContent: 'center', flex: 1}}>
        <Text style={{...FONTS.h2}}>Special Offer</Text>
        <Text style={{...FONTS.body3}}>Adding to your cart</Text>
      </View>

      <View
        style={{
          marginRight: SIZES.radius,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: '70%',
            width: 40,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => console.log('Promo on click')}>
          <Image
            source={icons.chevron}
            style={{
              width: '50%',
              height: '50%',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default PromotionCard;
