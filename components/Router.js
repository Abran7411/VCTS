import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {LinearGradient} from 'expo-linear-gradient';
import MainButton from '../components/MainButton.js'
import AccentButton from '../components/AccentButton.js';

const DATA = [
    {name: 'ECCT TRANSPORT', Vehicle: 'TN04AY2061', Vessel: 'INTERASIA CATALYST', Container: 'TCLU75896300'},
    {name: 'KERRY TRASNPORT',Vehicle: 'TN04AY2078', Vessel: 'EVERGREEN CHANT', Container: 'WHSU75896300' },
    {name: 'MURUGAN TRANSPORT',Vehicle: 'TN04AY2538', Vessel: 'HYUNDAI ASIA', Container: 'TGBU75896300'},
    {name: 'ANSAR TRANSPORT PVT.LTD',Vehicle: 'TN04M4512', Vessel: 'EVERGREEN PRISE', Container: 'SBGU75896300'}
];
 class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: true,
    };
  }

  render() {
    return (
        // <View style={styles.screen}>
<LinearGradient
          colors={['#33BBFF', '#B07EF5', '#F797D7' ]}
          style={styles.linearGradient}
        >
            <Autocomplete
              data={DATA}
              displayKey="name"
              placeholder={'Transporter Name.'}
              isMandatory={true}
              onSelect={value => console.log('name', value)}
              maxHeight={200}
            />
            <View style={{marginTop: 50}}></View>
            <Autocomplete
              data={DATA}
              displayKey="Vehicle"
              placeholder={'Vehicle No.'}
              isMandatory={true}
              onSelect={value => console.log('value', value)}
            />
            <View style={{marginTop: 50}}></View>

            <Autocomplete
              data={DATA}
              displayKey="Vessel"
              placeholder={'Vessel Name.'}
              isMandatory={true}
              onSelect={value => console.log('value', value)}
            />
            <View style={{marginTop: 50}}></View>

            <Autocomplete
              data={DATA}
              displayKey="Container"
              placeholder={'Container No.'}
              isMandatory={true}
              onSelect={value => console.log('value', value)}
            />
 
          <View style={styles.buttonContainer}>
                
          <TouchableOpacity
                  onPress={handleSubmit}
                >
                <MainButton title='Save'>Save</MainButton>
                </TouchableOpacity>
                <AccentButton title='Clear'>Clear</AccentButton>
                </View>

    {/* </View> */}
    </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
    screen:{
        paddingVertical:20
    },
    buttonContainer:{
        
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingVertical:25,
        

    },
    linearGradient: {
      flex:1,
      // alignItems: 'center',
      // justifyContent: 'space-evenly',
      paddingVertical:20
      // height: 200,
      // width: 350,
    },
});

export default Router;