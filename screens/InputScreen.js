import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableNativeFeedback} from 'react-native'

class InputScreen extends Component {
  constructor(){
    super();
    this.state={
      transporterName:'',
      VehicleNo:'',
      vesselName:'',
      containerNo:''
    }
  }
  updateValue(text,field){
   if(field == 'transporterName'){
     this.setState({
       transporterName:text,
     })
   } else if(field == 'VehicleNo'){
    this.setState({
      VehicleNo:text,
    })
  } else if(field == 'vesselName'){
    this.setState({
      vesselName:text,
    })
  } else if(field == 'containerNo'){
    this.setState({
      containerNo:text,
    })
  }
  }
submitHandler() {
  let collection = {}
  collection.transporterName = this.state.transporterName,
  collection.VehicleNo = this.state.VehicleNo,
  collection.vesselName = this.state.vesselName,
  collection.containerNo = this.state.containerNo
  console.warn(collection);


  

fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=saveDetailes&savedJson=${collection}&ou=24`, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(collection),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

  render() {
    return(
    <View style={styles.container}>
      <TextInput placeholder='TranporterName' onChangeText={(text) => this.updateValue(text,'transporterName')} style={styles.input}/>
      <TextInput placeholder='VehicleNo' onChangeText={(text) => this.updateValue(text,'VehicleNo')} style={styles.input}/>
      <TextInput placeholder='VesselName' onChangeText={(text) => this.updateValue(text,'vesselName')} style={styles.input}/>
      <TextInput placeholder='ContainerNo' onChangeText={(text) => this.updateValue(text,'containerNo')} style={styles.input}/>
      <TouchableNativeFeedback style={styles.btn} onPress={() => this.submitHandler()}>
        <Text>Save</Text>
      </TouchableNativeFeedback>
    </View>
    );
  }
}
const styles = StyleSheet.create({
container:{
  backgroundColor:'#F5FCFF',
  flex:1,
  justifyContent:'center',
},
btn:{
  backgroundColor:'steelblue',
  height:40,
  color:'whitesmoke',
  justifyContent:'center',
  alignItems:'center',
}
});


export default InputScreen;
