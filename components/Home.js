import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
;
import { SafeAreaView } from 'react-native-safe-area-context';

Feather.loadFont();


export default Home = () => {
    return (
        <View style = {styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style = {styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style = {styles.profileImage}
                    />
                   <Image style={{height:24, width: 24}} source={require('../assets/images/menu.png')}></Image>
                </View>
            </SafeAreaView>

            <View style = {styles.titlesWrapper}>
                <Text style = {styles.titlesSubtitle}>Food</Text>
                <Text style = {styles.titlesSubtitle}>Delivery</Text>
            </View>
              {/* Search */}
        <View style={styles.searchWrapper}>
        <Image style={{height:24, width: 24}} source={require('../assets/images/search.png')}></Image>
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        </View>
    )
}
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
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
      },
      searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
      },
})