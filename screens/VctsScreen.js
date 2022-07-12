import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableNativeFeedback} from 'react-native'
import Card from '../components/Card';
import CategoryGrid from '../components/CategoryGrid';
import RegisterForm from '../components/RegisterForm';
import { CATEGORIES } from '../data/sample-data';
import TrackItem from '../components/TrackItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import {LinearGradient} from 'expo-linear-gradient';
const VctsScreen = (props) => {
    const renderGridItem = (itemData) => {
        // if (routeName === 'Import'){
            
        // }
        return (
            <TrackItem 
               title={itemData.item.title} 
               image={itemData.item.imageUrl}
               onSelectTrack={() => {
                   props.navigation.navigate({
                       routeName: itemData.item.route,
                params:{
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                }})
               }}/>
        );
    }
    return (
        <TouchableNativeFeedback>
        <FlatList keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={1}/>
        </TouchableNativeFeedback>
    );
};

VctsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'ECCT-CFS',
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
    cardscreen:{
        marginTop: 20,
        alignItems:'center',
        paddingBottom:15
    },
    inputContainer:{      
        alignItems: 'center',
        width:'100%',
        minWidth:300,
        maxWidth:'95%',
        marginTop:20,
        marginHorizontal:10,
      },
});

export default VctsScreen;
