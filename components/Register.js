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
import { registerUser } from "../redux/slice/register"; // Correct import path

const Register = () => {
  const dispatch = useDispatch();

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
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?size=626&ext=jpg&ga=GA1.1.525741919.1700970963&semt=ais",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            onChangeText={(value) => {
              setName(value);
            }}
            style={styles.input}
            placeholder="Nhập họ và tên"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tên người dùng</Text>
          <TextInput
            onChangeText={(value) => {
              setUsername(value);
            }}
            style={styles.input}
            placeholder="Nhập tên người dùng"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            onChangeText={(value) => {
              setPassword(value);
            }}
            style={styles.input}
            placeholder="Nhập mật khẩu"
          />
        </View>

        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
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