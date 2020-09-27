import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, Input, Button } from "react-native-elements";

import cover from "../assets/Cover.jpg";

export default function Login({ navigation }) {
  const [isSignup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSignup = () => {};
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ImageBackground source={cover} style={styles.imageCover}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.overLayContainer}>
            <View style={styles.headerContainer}>
              <Text h1 style={styles.header}>
                {isSignup ? "Sign Up" : "Login"}
              </Text>
            </View>
            <View style={styles.formContainer}>
              {isSignup && (
                <Input
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                  label="Your First Name"
                  placeholder="First Name"
                  inputStyle={{ marginLeft: 5, color: "white" }}
                  leftIcon={<Icon name="user" size={24} color="white" />}
                />
              )}
              <Input
                value={email}
                onChangeText={(value) => setEmail(value)}
                label="Your Email Address"
                placeholder="Email@address.com"
                inputStyle={{ marginLeft: 5, color: "white" }}
                leftIcon={<Icon name="envelope" size={24} color="white" />}
              />
              <Input
                value={password}
                onChangeText={(value) => setPassword(value)}
                label="Password"
                secureTextEntry={true}
                placeholder="Password"
                inputStyle={{ marginLeft: 5, color: "white" }}
                leftIcon={<Icon name="lock" size={24} color="white" />}
              />
              <Button
                title={isSignup ? "Sign Up" : "Login"}
                titleStyle={{ fontSize: 24 }}
                buttonStyle={{
                  width: 300,
                  textAlign: "center",
                  padding: 10,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
                onPress={handleLoginSignup}
              />
              <Text
                h4
                h4Style={{
                  color: "#90cdf4",
                  textDecorationLine: "underline",
                  fontSize: 24,
                }}
                onPress={() => setSignup(!isSignup)}
              >
                {isSignup ? "Login" : "Sign up?"}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageCover: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "center",
  },
  overLayContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  headerContainer: {
    height: "25%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  header: {
    color: "#fff",
  },
  formContainer: {
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
