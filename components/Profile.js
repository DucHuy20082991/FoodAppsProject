import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://6562cdc5ee04015769a693bb.mockapi.io/users',
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontSize: 30}}>Usernames:</Text>
        {userData.map(user => (
          <Text key={user.id} style={styles.username}>
            {user.username}
          </Text>
        ))}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../assets/images/cart.png')}></Image>
        <Text>Đơn hàng </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../assets/images/cart.png')}></Image>
        <Text>Giởi hàng </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../assets/images/follow.png')}></Image>
        <Text>Đang theo dỗi </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../assets/images/chat.png')}></Image>
        <Text>Chat </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../assets/images/setting.png')}></Image>
        <Text>Cài đặt </Text>
      </View>
    </View>
  );
};

export default Profile;
