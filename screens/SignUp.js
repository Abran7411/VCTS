import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
const image = {uri: 'https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'};
export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="light" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>VCTS</Text>
          
        </View>

        <View style={styles.form}>

        <FontAwesome name="user-circle-o" size={30} color="black" style={styles.iconLock}/>
          <TextInput
            style={styles.inputPassword}
            keyboardType="email-address"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Enter Password"
            placeholderTextColor="#929292"
          />
          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}

          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Enter Password"
            placeholderTextColor="#929292"
          />

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>Sign-Up</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText} numberOfLines={1} adjustsFontSizeToFit>MarketPlace</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const TEXT = {
  color: "whitesmoke",
  textAlign: "center",
  fontWeight:'bold',
  fontFamily:'news-circle'
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
  container: {
    flex: 1,
    backgroundColor: "#34495E",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 15,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent: "center",
    marginTop: 15,

  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
