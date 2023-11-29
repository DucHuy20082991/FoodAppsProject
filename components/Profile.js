import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchDataForCurrentUser();
  }, []);

  const fetchDataForCurrentUser = async () => {
    try {
      // Lấy thông tin người dùng đã lưu từ AsyncStorage sau khi đăng nhập
      const user = await AsyncStorage.getItem('currentUser');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontSize: 30}}>User Info:</Text>
        {userData ? (
          <View>
            <Text>Username: {userData.username}</Text>
            {/* Hiển thị thông tin cá nhân khác của người dùng */}
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
