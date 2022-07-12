import React, { Component } from 'react'
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator,
  View
} from "react-native"
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown"
import { Colors } from "react-native/Libraries/NewAppScreen"
import AccentButton from "../components/AccentButton"
import { LocalDataSetExample } from "../components/LocalDataSetExample"
import MainButton from "../components/MainButton"
import { RemoteDataSetExample } from "../components/RemoteDataSetExample"
import { RemoteDataSetExample2 } from "../components/RemoteDataSetExample2"
import { RemoteDataSetExample3 } from "../components/RemoteDataSetExample3"


export class APIScreen extends Component {
    constructor() {
        super();
        this.state={
            isLoading: true,
            dataSet: null,
        }
    }
    componentDidMount() {
        return fetch('http://192.168.9.119:8080/IERP1/signServices?operation=transporter&ou=24')
           .then((response) => response.json())
           .then((responseJson) => {
               this.setState({
                   isLoading:false,
                   dataSet:responseJson.Root.Tranaslist,
               })
           })
           .catch((error) => {
               console.log(error);
           });
    }
    render() {
        if(this.state.isLoading) {
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            let transporter = this.state.dataSet.map((val,key) => {
                return <View key={key}>
                    {/* <Text>{val.transporterID}</Text> */}
                    <Text>{[val.transporterName,'',val.transporterID]}</Text>
                    </View>
            })
        return (
            <ScrollView>
                {transporter}
            </ScrollView>
        )
    }
}
}

export default APIScreen
