import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS, icons, SIZES} from '../../../constants';

const Footer = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.iconContainer(2)}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.dashboard} style={styles.icon(COLORS.gray)} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer(1)}>
        <TouchableOpacity style={styles.addIconContainer}>
          <Image source={icons.plus} style={styles.icon(COLORS.white)} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer(2)}>
        <TouchableOpacity>
          <Image source={icons.user} style={styles.icon(COLORS.gray)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    position: 'absolute',
    left: SIZES.padding,
    right: SIZES.padding,
    backgroundColor: COLORS.white,
    height: 70,
    borderRadius: 35,
    bottom: '5%',
    flexDirection: 'row',
  },
  iconContainer: flexValue => ({
    flex: flexValue,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  icon: color => ({
    width: 25,
    height: 25,
    tintColor: color,
  }),
  addIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
