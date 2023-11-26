import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../assets/colors/color';


const Detail = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
            <Image
                        style={{height: 12, width: 12}}
                        source={require('../assets/images/left-chevron.png')}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
          <Image
                        style={{height: 12, width: 12}}
                        source={require('../assets/images/star.png')}></Image>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = new StyleSheet.create({
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
})
 
    
   
export default Detail;
