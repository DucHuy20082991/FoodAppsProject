// ./screens/Forgotpassword.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../redux/slice/forgotpassword";
import { useNavigation} from '@react-navigation/native'
const Forgotpassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickForgotPassword = () => {
    dispatch(updatePassword({ username, password, onSuccess: () => {
        navigation.navigate("Login"); // Chuyển hướng khi đăng nhập thành công
      }, }));
  };

  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Quên mật khẩu</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tên người dùng</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên người dùng"
            onChangeText={(value) => {
              setUsername(value);
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={onClickForgotPassword}>
          <Text style={styles.buttonText}>Nhấn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Login")
        }}>
          <Text style={styles.buttonText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
   
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1, backgroundColor:'orange',
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

export default Forgotpassword;