import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slice/register"; // Correct import path
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    const userData = {
      name: name,
      username: username,
      password: password,
    };

    dispatch(registerUser(userData));
  };
  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            onChangeText={(value) => {
              if (value != null) {
                setName(value);
              } else {
                Alert("Vui lòng nhập họ tên")
              }
              
            }}
            style={styles.input}
            placeholder="Nhập họ và tên"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tên người dùng</Text>
          <TextInput
            onChangeText={(value) => {
              if (value != null) {
                setUsername(value);
              } else {
                Alert("Vui lòng nhập tên người dùng")
              }
            }}
            style={styles.input}
            placeholder="Nhập tên người dùng"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            onChangeText={(value) => {
              if (value != null) {
              setPassword(value);
              } else {
                Alert("Vui lòng nhập mật khẩu")
              }
            }}
            style={styles.input}
            placeholder="Nhập mật khẩu"
          />
        </View>

        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Login")
        }} style={styles.button}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        
      </View>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
    width: "100%",
  },
  label: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
    borderRadius: 6,
    height: 50,
    marginTop: 5,
    paddingLeft: 6,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "red",
    height: 50,
    width: 100,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Register;