import React ,{useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
// import CategoryGrid from '../components/CategoryGrid';
import Select from 'react-select';
import MainButton from '../components/MainButton.js'
import AccentButton from '../components/AccentButton.js';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';

const transporter = [
  { value: 'ECCT TRANSPORT', label: 'ECCT TRANSPORT' },
  { value: 'KERRY TRASNPORT', label: 'KERRY TRASNPORT' },
  { value: 'MURUGAN TRANSPORT', label: 'MURUGAN TRANSPORT'},
  { value: 'ANSAR TRANSPORT PVT.LTD', label: 'ANSAR TRANSPORT PVT.LTD'}
];

const ImportScreen = (props) => {
    const [scrollOption, setScrollOption] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);

    // const
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Transporter Name.</Text>
                {/* <TextInput style={styles.input}/> */}
                <Select defaultValue={selectedOption} onChange={setSelectedOption} options={transporter}/>
            </View>
            <View>
                <Text style={styles.text}>Vehicle No.</Text>
                <TextInput style={styles.input}/>
                {/* <Select options={transporter} /> */}
            </View>
            <View>
                <Text style={styles.text}>Vessel Name</Text>
                <TextInput style={styles.input}/>
                {/* <Select options={transporter} /> */}
            </View>
            <View>
                <Text style={styles.text}>Container No.</Text>
                <TextInput style={styles.input}/>
                {/* <Select options={transporter} /> */}
            </View>
            <View style={styles.buttonContainer}>
                
            
            <MainButton title='Save'>Save</MainButton>
            <AccentButton title='Clear'>Clear</AccentButton>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        // flex:1,
        // paddingVertical:30,
        justifyContent:'center',
        padding:15
        
    },
    text:{
        fontFamily:'news-circle',
        fontSize:22,
        color:'#085ea0'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#085ea0'
      },
});

export default ImportScreen;
