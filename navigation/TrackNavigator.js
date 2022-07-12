import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ImportScreen from '../screens/ImportScreen';
import ExportScreen from '../screens/ExportScreen';
import MappingScreen from '../screens/MappingScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import DashBoardScreen from '../screens/DashBoardScreen';
import { Ionicons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import VctsScreen from '../screens/VctsScreen';
import RegisterForm from '../components/RegisterForm';
import ReportScreen from '../screens/ReportScreen';
import UserScreen from '../screens/UserScreen';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { FontAwesome5 } from '@expo/vector-icons';
import Router from '../components/Router'
import CommonScreen from '../screens/CommonScreen';
import LoginScreens from '../screens/LoginScreens'
import DataScreen from '../screens/DataScreen';
import DropDown from '../screens/MultiSelectExample'
import MultiSelectExample from '../screens/MultiSelectExample';
import InputScreen from '../screens/InputScreen';
import APIScreen from '../screens/APIScreen';
import Styles from '../screens/Styles'
import RemoteDataSetExample from '../components/RemoteDataSetExample';
import DropScreen from '../screens/DropScreen';
import DropAuto from '../screens/DropAuto';
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#085ea0' : ''
    },
    headerTitleStyle: {
        fontFamily: 'news-circle',
        fontSize: 35,
    },
    headerTintColor: Platform.OS === 'android' ? 'whitesmoke' : '#085ea0',
    // headerTitle: 'DashBoard',
}
const TrackNavigator = createStackNavigator({
    Import: {
        screen: ImportScreen,
    },
    Export: {
        screen: ExportScreen,
    },
    Map: {
        screen: MappingScreen,
    }
}, {

    defaultNavigationOptions: defaultStackNavOptions
});

// const TrackObserver = createMaterialTopTabNavigator({
//     Import: {
//         screen: ImportScreen,
//     },
//     Export: {
//         screen: ExportScreen,
//     },
//     Map: {
//         screen: MappingScreen,
//     }
// },{
//     contentOptions: {
//         labelStyle: {
//             paddingVertical: 60,
//             fontSize: 16,
//         }
//     }
// })
const VctsNavigator = createStackNavigator({
    VCTS: {
        screen: VctsScreen,
    },
    Import: {
        screen: Styles,
    },
    Export: {
        screen: ExportScreen,
    },
    Vehicle: {
        screen: MappingScreen,
    },
}, {

    defaultNavigationOptions: defaultStackNavOptions
});


const DashBoardNavigator = createStackNavigator({
    Dashboard: {
        screen: DashBoardScreen,
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
});


const ReportNavigator = createStackNavigator({
    Report: {
        screen: ReportScreen,
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const UserNavigator = createStackNavigator({
    User: {
        screen: UserScreen,
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions,
});


const tabScreenConfig = {
    VCTS: {
        screen: VctsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = "home-sharp"
                size = { 25 }
                color = "#D0D3D4" />
            },

            tabBarColor: "#085ea0",
        }
    },
    Dashboard: {
        screen: DashBoardNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = "cube"
                size = { 25 }
                color = "#D0D3D4" />
            },
            tabBarColor: "#085ea0"
        }
    },
    Report: {
        screen: ReportNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'documents'
                size = { 25 }
                color = '#D0D3D4' />
            },
            tabBarColor: '#085ea0',
        }
    },
    User: {
        screen: UserNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome name = "user"
                size = { 24 }
                color = "#D0D3D4" />
            },
            tabBarColor: '#085ea0',
        }
    }
}

const TrackerNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: '#C21C1C',
        shifting: true,
    }) : createBottomTabNavigator(
        tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: '#DA900D',
            }
        }
    );
const MainNavigator = createDrawerNavigator({
    Home: {
        screen: TrackerNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => ( <
                Ionicons name = 'home'
                size = { 25 }
                color = '#A21C0C' />
            ),
            labelStyle: {
                paddingVertical: 25
            }
        },
    },
    User: {
        screen: UserNavigator,
        navigationOptions: {
            drawerLabel: 'User',
            drawerIcon: () => ( <
                FontAwesome5 name = 'user-tie'
                size = { 25 }
                color = '#A21C0C' />
            ),
        },
    },
}, {
    contentOptions: {
        activeTintColor: '#A21C0C',
        labelStyle: {
            paddingVertical: 20,
            fontSize: 16,
        }
    }
});


export default createAppContainer(MainNavigator);