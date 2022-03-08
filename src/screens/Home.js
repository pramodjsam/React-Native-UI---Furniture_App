import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {products} from '../../assets/data/products';
import {COLORS, SIZES} from '../../constants/';
import Header from '../components/Header';
import PromotionCard from '../components/Home/PromotionCard';
import ScrollableCard from '../components/Home/ScrollableCard';
import ScrollableTab from '../components/Home/ScrollableTab';
import Title from '../components/Home/Title';

const Home = ({navigation}) => {
  const [tabList, setTabList] = useState(products);

  const [selectedTab, setSelectedTab] = useState(products[0]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Title title={selectedTab.title} />

      <ScrollableTab
        tablist={tabList}
        selectedTab={selectedTab}
        onPress={item => setSelectedTab(item)}
      />

      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      <View
        style={{
          height: '10%',
          justifyContent: 'flex-end',
          marginBottom: SIZES.radius,
        }}>
        <PromotionCard />
      </View>
    </SafeAreaView>
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

export default Home;
