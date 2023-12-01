import React, { useState, useEffect } from 'react';
import { View, Text, Image, AsyncStorage, StyleSheet } from 'react-native';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('currentUser');
      if (user) {
        const parsedUser = JSON.parse(user);

        // Lấy thông tin người dùng từ API bằng ID của người dùng hiện tại
        const api_url = `https://6562cdc5ee04015769a693bb.mockapi.io/users/${parsedUser.id}`;
        const response = await fetch(api_url);
        const userDataFromApi = await response.json();

        // Cập nhật thông tin người dùng từ API vào state
        setUserData(userDataFromApi);
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red'}}>User Info:</Text>
        {userData ? (
          <View>
            <Text>Username: {userData.username}</Text>
            {/* Hiển thị thông tin cá nhân khác của người dùng */}
            {/* Hiển thị email */}
            {/* Các thông tin khác có thể được hiển thị tại đây */}
          </View>
        ) : (
          <Text>No user logged in</Text>
        )}
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 80,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 50, width: 50, marginRight: 10}}
            source={require('../assets/images/cart.png')}></Image>
          <Text>Đơn hàng </Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
          <Image
            style={{height: 50, width: 50, marginRight: 10}}
            source={require('../assets/images/cart.png')}></Image>
          <Text style={{alignContent: 'center'}}>Giỏ hàng </Text>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 25, alignItems: 'center'}}>
          <Image
            style={{height: 50, width: 50, marginRight: 10}}
            source={require('../assets/images/follow.png')}></Image>
          <Text>Đang theo dỗi </Text>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 25, alignItems: 'center'}}>
          <Image
            style={{height: 50, width: 50, marginRight: 10}}
            source={require('../assets/images/chat.png')}></Image>
          <Text>Chat </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            alignItems: 'center',
          }}>
          <Image
            style={{height: 50, width: 50, marginRight: 10}}
            source={require('../assets/images/setting.png')}></Image>
          <Text>Cài đặt </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
