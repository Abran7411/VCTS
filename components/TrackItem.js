import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import DefaultText from './DefaultText';

const TrackItem = (props) => {
    return (
        <View style={styles.trackitem}>
        <TouchableOpacity onPress={props.onSelectTrack}>
        
             <View style={{...styles.Trackrow, ...styles.TrackHeader}}>
                 <ImageBackground source={{uri : props.image}} style={styles.bgimage}>
                 <View style={styles.titleContainer}>
                     <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                 </View>
                 </ImageBackground>
             </View>
        
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    trackitem:{
        height:180,
        width:'90%',
        // backgroundColor:'#F9DDDA',
        marginHorizontal:18,
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden',
    },
    Trackrow:{
      flexDirection: 'row',
    },
    TrackHeader:{
        height: '100%',
    },
    mealDetail:{
      paddingHorizontal:10,
      justifyContent: 'space-between',
      alignItems:'center'
    },
    bgimage:{
       width:'100%',
       height:'100%', 
       justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:12,
        paddingHorizontal:12,
    },
    title:{
        fontFamily:'news-circle',
        fontSize:25,
        color:'whitesmoke',
        textAlign:'center',
        
    },

});

export default TrackItem;
