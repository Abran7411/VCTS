import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

// import Colors from '../constants/colors';
const AccentButton = (props) => {
    return (
        <TouchableOpacity activeopacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button,...props.styles}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0B61A5',
        paddingVertical: 12,
        paddingHorizontal: 55,
        borderRadius: 15,
        marginHorizontal:50,
        alignItems:'center'
      },
      buttonText: {
        color: 'white',
        fontFamily: 'news-circle',
        fontSize: 25
      }
});
export default AccentButton
