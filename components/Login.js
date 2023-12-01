// ./screens/Login.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginUser} from '../redux/slice/login';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = () => {
    dispatch(
      loginUser({
        username,
        password,
        onSuccess: () => {
          navigation.navigate('Home'); // Chuyển hướng khi đăng nhập thành công
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên người dùng </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên người dùng"
          onChangeText={value => {
            setUsername(value);
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          onChangeText={value => {
            setPassword(value);
          }}
        />
      </View>
      <View style={{marginStart: 220, marginTop: 5}}>
        <Text
          onPress={() => {
            navigation.navigate('Forgotpassword');
          }}
          style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Quên mật khẩu?
        </Text>
      </View>

      <TouchableOpacity onPress={onClickLogin} style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={{marginTop: 15}}>
        <Text
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{color: 'black', fontWeight: 'bold'}}>
          Bạn có tài khoản chưa? Đăng kí
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
    width: '100%',
  },
  label: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderRadius: 6,
    height: 50,
    marginTop: 5,
    paddingLeft: 6,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'red',
    height: 50,
    width: 100,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
