import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()
  useEffect(() => {
    // Đoạn mã sau đây mô phỏng việc chuyển màn hình sau 2 giây (có thể thay đổi thời gian tùy ý)
    const timer = setTimeout(() => {
      // Chuyển màn hình sau khi hiển thị Splash Screen
      navigation.replace('Home'); // Thay 'MainScreen' bằng tên màn hình muốn chuyển đến sau khi Splash Screen
    }, 3000); // Thời gian hiển thị Splash Screen, ở đây là 2000ms (2 giây)

    return () => clearTimeout(timer); // Hủy timer khi component unmount để tránh lỗi memory leak
  }, []);

  return (
    <ImageBackground style={{flex: 1}} source={require('../assets/images/background.png')}>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Màu nền của Splash Screen
  },
  logo: {
    width: 150, // Độ rộng của hình ảnh/logo
    height: 150, // Chiều cao của hình ảnh/logo
    resizeMode: 'contain', // Cách hiển thị hình ảnh (có thể thay đổi tùy thuộc vào hình ảnh của bạn)
  },
  text: {
    marginTop: 20, // Khoảng cách từ hình ảnh/logo đến text
    fontSize: 18, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm của chữ
    color: '#333333', // Màu chữ
  },
});

export default SplashScreen;
