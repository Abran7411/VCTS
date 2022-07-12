import React from 'react'
import {View, Button, Platform,StyleSheet, Share} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useEffect, useState} from "react";
import axios from "axios";
import DatePicker from 'react-native-date-picker'
import MainButton from '../components/MainButton';



const ReportScreen = (props) => {
    const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get(url).then(res => {
          setCountries(res.data.countries);
        })
      }, []);
      
    //   const render = countries.map((c) => <Text key={c._id}>{c.countries}</Text>);
    //   console.log(render);
    // return countries.map((element) => {
        
    //     return (
    //        <View>
    //           {/* <ScrollView key={element}> */}
    //            <Text>{element}</Text>
               
    //            {/* </ScrollView> */}
    //        </View>
    // // <FlatList renderItem={element}/>
    //     );
    // });  
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
      
    };

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'Share your report status in any medias',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
           
          } else {
          
          }
        } else if (result.action === Share.dismissedAction) {
         
        }
      } catch (error) {
        alert(error.message);
      }
    };
    
    return (
        <View style={styles.screen}>
            {/* <DatePicker
    date={date}
    onDateChange={setDate}
    mode="datetime"
/> */}
          <View style={styles.item}>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
            />
          )}
          <View style={styles.shareForm}>
         <MainButton onPress={onShare}>Share</MainButton>
         </View>

        </View>
      );
};

const styles= StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        

    },
    item: {
        
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      shareForm:{
        paddingTop:25
      }
})

export default ReportScreen;
