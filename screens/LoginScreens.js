import React, { useState } from "react";
import { View, StatusBar, Image, Text } from "react-native";
import LoginScreen from "react-native-login-screen";
import MainButton from "../components/MainButton";

const backgroundImage = {
  uri:
    "https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

const LoginScreens = () => {
  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);

  const renderLogo = () => (
    <View
      style={{
        bottom: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("../assets/VCTS-logos_transparent.png")}
        style={{ height: 250, width: 250 }}
      />
      {/* <Text
        style={{
          top: 52,
          color: "#F2D7D5",
          fontFamily: "news-circle",
          fontSize: 60,
          shadowRadius: 3,
          shadowOpacity: 0.7,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        VCTS
      </Text> */}
    </View>
  );
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <LoginScreen
        source={backgroundImage}
        spinnerEnable
        spinnerVisibility={spinnerVisibility}
        logoComponent={renderLogo()}
        labelTextStyle={{
          color: "#adadad",
          fontFamily: 'Now-Bold',
        }}
        logoTextStyle={{
          fontSize: 27,
          color: "#fdfdfd",
          fontFamily: "Now-Black",
        }}
        loginButtonTextStyle={{
          color: "#fdfdfd",
          fontFamily: "Now-Bold",
        }}
        textStyle={{
          color: "#757575",
          fontFamily: "Now-Regular",
        }}
        signupStyle={{
          color: "#fdfdfd",
          fontSize: 12,
          fontFamily: "Now-Bold",
        }}
        usernameOnChangeText={(username) =>
          console.log("Username: ", username)
        }
        onPressSettings={() => alert("Settings Button is not assigned yet")}
        passwordOnChangeText={(password) =>
          console.log("Password: ", password)
        }
        onPressLogin={() => {
          setSpinnerVisibility(true);
          setTimeout(() => {
            setSpinnerVisibility(false);
          }, 2000);
        }}
        onPressSignup={() => {
          console.log("onPressSignUp is not assigned yet");
        }}
      />
    </View>
  );
};

export default LoginScreens;