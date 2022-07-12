import React from 'react'
import {View, StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native'


const Card = (props) => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={{...styles.card, ...props.style}}>
            <TouchableCmp>
            {props.children}
            </TouchableCmp>
        </View>
    );
};
const styles = StyleSheet.create({
    card:{      
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        elevation:5,
        backgroundColor:'#E5E8E8',
        padding:30,
        fontFamily:'sans-serif',
        borderRadius:5,
        marginVertical:10,
        width:'90%'
      },
});


export default Card;
