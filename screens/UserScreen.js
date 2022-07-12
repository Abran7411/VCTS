import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
// import DeviceInfo from 'react-native-device-info';
import * as Network from 'expo-network';
import * as Application from 'expo-application';

const UserScreen = () => {
    // const deviceJSON = DeviceInfo.getMacAddress().then((mac) => {
    //     // "E5:12:D8:E5:69:97"
    //   });

    // DeviceInfo.getMacAddress().then(mac => {
    //     console.log(mac);
    // });
    const ipAlert = async () => {
        const ip = await Network.getIpAddressAsync()
        alert(ip);
    };
 ipAlert();
 const androidid = Application.androidId
    return (
        <View style={styles.screen}>
            <Text>User Screen</Text>
            <Text>Android Id:{androidid}</Text>
        </View>
    );
};

UserScreen.navigationOptions = navData => {
    return {
        headerTitle: 'User',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item title='Menu' iconName='ios-menu' onPress={() => {
               navData.navigation.toggleDrawer();
           }}/>   
        </HeaderButtons>,
        headerStyle: {
            backgroundColor:Platform.OS === 'android' ? '#085ea0' : '',   
          },
          headerTintColor:Platform.OS === 'android' ? 'whitesmoke' : '#085ea0'
      };
    };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default UserScreen;
