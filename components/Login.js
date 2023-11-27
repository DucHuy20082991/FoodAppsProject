// ./screens/Login.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/login";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?size=626&ext=jpg&ga=GA1.1.525741919.1700970963&semt=ais",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Input username"
            onChangeText={(value) => {
              setUsername(value);
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Input password"
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
        </View>
        <View style={{ marginStart: 220, marginTop: 5 }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
            Forgot password
          </Text>
        </View>

        <TouchableOpacity onPress={onClickLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            You don't have an account? Register
          </Text>
        </View>
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

export default Login;