import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/color';
import {useNavigation} from '@react-navigation/native';

const Detail = ({route}) => {
  const navigation = useNavigation(); // Lấy đối tượng navigation

  const {item} = route.params;
  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id === '1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <ScrollView>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Image
                  style={{height: 12, width: 12}}
                  source={require('../assets/images/left-chevron.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <Image
                style={{height: 12, width: 12}}
                source={require('../assets/images/star.png')}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>{item.price} VND</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Cỡ bánh</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}"
              </Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Đế bánh</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Giao hàng vào</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>

        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Thành phần</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Đặt hàng</Text>
            <Image
              style={{height: 15, width: 15, alignSelf: 'center'}}
              source={require('../assets/images/chevron.png')}></Image>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
  },
});

export default Detail;
