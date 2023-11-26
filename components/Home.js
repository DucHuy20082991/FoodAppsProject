import * as React from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import categoriesData from '../assets/data/categoriesData';
Feather.loadFont();

export default Home = () => {

  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? '#F5CA48': "white",
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? "white" :'#F5CA48',
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? "black" : "white"}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Image
            style={{height: 24, width: 24}}
            source={require('../assets/images/menu.png')}></Image>
        </View>
      </SafeAreaView>

      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesSubtitle}>Delivery</Text>
      </View>
      {/* Search */}
      <View style={styles.searchWrapper}>
        <Image
          style={{height: 24, width: 24}}
          source={require('../assets/images/search.png')}></Image>
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,

    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 5,
    color: '#CDCDCD',
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
});
