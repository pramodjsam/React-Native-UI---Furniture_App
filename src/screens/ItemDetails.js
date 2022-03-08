import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/';
import Footer from '../components/ItemDetails/Footer';
import Info from '../components/ItemDetails/Info';

const ItemDetails = ({route}) => {
  let {itemInfo} = route.params;

  return (
    <SafeAreaView style={styles.viewContainer}>
      {itemInfo && <Info itemInfo={itemInfo} />}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default ItemDetails;
