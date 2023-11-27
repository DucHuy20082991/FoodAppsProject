import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()
  useEffect(() => {
    // Đoạn mã sau đây mô phỏng việc chuyển màn hình sau 2 giây (có thể thay đổi thời gian tùy ý)
    const timer = setTimeout(() => {
      // Chuyển màn hình sau khi hiển thị Splash Screen
      navigation.replace('Login'); // Thay 'MainScreen' bằng tên màn hình muốn chuyển đến sau khi Splash Screen
    }, 3000); // Thời gian hiển thị Splash Screen, ở đây là 2000ms (2 giây)

    return () => clearTimeout(timer); // Hủy timer khi component unmount để tránh lỗi memory leak
  }, []);

  return (
    <ImageBackground style={{flex: 1}} source={require('../assets/images/back.jpg')}>
    </ImageBackground>
  );
};



export default SplashScreen;
