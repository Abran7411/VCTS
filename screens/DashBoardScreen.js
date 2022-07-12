import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const DashBoardScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>DashBoard Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default DashBoardScreen;
