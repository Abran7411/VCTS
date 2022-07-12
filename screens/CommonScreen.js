import React, { Node } from "react"
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native"

import AccentButton from "../components/AccentButton"
import { LocalDataSetExample } from "../components/LocalDataSetExample"
import MainButton from "../components/MainButton"
import { RemoteDataSetExample } from "../components/RemoteDataSetExample"
import { RemoteDataSetExample2 } from "../components/RemoteDataSetExample2"
import { RemoteDataSetExample3 } from "../components/RemoteDataSetExample3"

const CommonScreen = (props) => {
  const isDarkMode = useColorScheme() === "dark"

  // const submitAction = (props) => {
  //   Alert.alert(
  //     "Import Data Added Successfully!",
  //     "Import data:" + JSON.stringify()
  //   );
  // }

  const submitClear = (props) => {
    Alert.alert("Function Not Added yet",
    "Working on that?");
  }
 
  // const submitHandler = () => {
  //   let collection = {}
  //   collection.transporterName = transporterName,
  //   collection.VehicleNo = VehicleNo,
  //   collection.vesselName = vesselName,
  //   collection.containerNo = containerNo
  //   console.warn(collection);

  //   fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=saveDetailes&savedJson=${collection}&ou=24`, {
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify(collection),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:',data)
  //   })
  //   .catch((error) => {
  //     console.error('Error',error)
  //   });
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollContainer}
      >
        <View style={[styles.container]}>
          
          <View style={[styles.section, Platform.select({ ios: { zIndex: 100 } })]}>
            <Text style={styles.sectionTitle}>Transporter Name.</Text>
            <RemoteDataSetExample2/>
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 99 } })]}
          >
            <Text style={styles.sectionTitle}>Vehicle No.</Text>
            <RemoteDataSetExample />
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 98 } })]}
          >
            <Text style={styles.sectionTitle}>Vessel Name.</Text>
            <LocalDataSetExample />
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 97 } })]}
          >
            <Text style={styles.sectionTitle}>Container No.</Text>
            <RemoteDataSetExample3 />
          </View>
          <View style={styles.buttonContainer}>
            <AccentButton >Save</AccentButton>
            <MainButton onPress={submitClear}>Reset</MainButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    padding: 15
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 50
  },
  section: {
    marginBottom: 5
  },
  sectionTitle: {
    marginBottom: 3,
    fontSize:30,
    fontFamily:'news-circle',
    color:'#BA4A00'
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
  }
});

export default CommonScreen;
