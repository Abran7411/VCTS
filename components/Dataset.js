import React, { useCallback } from 'react'
import { View,Text,StyleSheet} from 'react-native';

const Dataset = (props) => {
     let url = ' '; 
     const getData = useCallback(async (q) => {
     const response = fetch('http://192.168.9.119:8080/IERP1/signServices?operation=transporter&ou=24');
     const items = (await response).json();

    }
    ,[])

    return (
        <View>
            {getData}
        </View>
    )
}

export default Dataset;
