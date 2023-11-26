import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
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
                    <Feather name = "menu" size = {24} color = {colors.textDark} />
                </View>
            </SafeAreaView>

            <View style = {styles.titlesWrapper}>
                <Text style = {styles.titlesSubtitle}>Food</Text>
                <Text style = {styles.titlesSubtitle}>Delivery</Text>
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
      color: colors.textDark,
    },
    titlesTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      color: colors.textDark,
      marginTop: 5,
    }
})