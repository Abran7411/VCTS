import React, { memo, useCallback, useRef, useState,useEffect } from "react"
import {  
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native"
import { Button, Dimensions, Text, View, Platform, Alert } from "react-native"
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown"
import { AutocompleteVehicleDropdown } from "react-native-vehicle-dropdown"
import { AutocompleteVesselDropdown } from "vessel-dropdown"
import { AutocompleteContainerDropdown } from "container-dropdown"
import { Colors } from "react-native/Libraries/NewAppScreen"
import AccentButton from "../components/AccentButton"
import MainButton from "../components/MainButton"
import Feather from "react-native-vector-icons/Feather"
import axios from "axios"
Feather.loadFont()

useEffect(async () => {
 axios(`http://192.168.9.119:8080/IERP1/signServices?operation=transporter&ou=24`)
 .then((response) => {
     setData(response.data)})
 .catch((error) => {
     console.error(error)
 })    
},[])
const NewScreen = () => {
    <>
    <View
      style={[
        { flex: 1, flexDirection: "row", alignItems: "center" },
        Platform.select({ ios: { zIndex: 1 } })
      ]}
    >
      <AutocompleteVehicleDropdown
        ref={searchRef}
        controller={(controller) => {
          dropdownController.current = controller
        }}
        // initialValue={'1'}
        direction={Platform.select({ ios: "down" })}
        dataSet={suggestionsList}
        onChangeText={getSuggestions}
        onSelectItem={(item,id) => {
          item && setSelectedVehicle(item.VehicleId.toString())
          item && setSelectedVehicle(item.VehicleNo.toString())
        }}
        debounce={600}
        suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
        onClear={onClearPress}
        //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
        onOpenSuggestionsList={onOpenSuggestionsList}
        loading={loading}
        useFilter={false} // prevent rerender twice
        textInputProps={{
          placeholder: "Select Vehicle No.",
          autoCorrect: false,
          autoCapitalize: "none",
          style: {
            borderRadius: 15,
            backgroundColor: "#383b42",
            color: "#fff",
            paddingLeft: 18
          }
        }}
        rightButtonsContainerStyle={{
          borderRadius: 25,
          right: 8,
          height: 30,
          top: 10,
          alignSelfs: "center",
          backgroundColor: "#383b42"
        }}
        inputContainerStyle={{
          backgroundColor: "transparent"
        }}
        suggestionsListContainerStyle={{
          backgroundColor: "#383b42"
        }}
        containerStyle={{ flexGrow: 1, flexShrink: 1 }}
        renderItem={(item, text) => (
          <Text style={{ color: "#fff", padding: 15 }}>{item.VehicleNo.toString()}</Text>
        )}
        ClearIconComponent={
          <Feather name="x-circle" size={18} color="#fff" />
        }
        ChevronIconComponent={
          <Feather name="chevron-down" size={20} color="#fff" />
        }
        inputHeight={60}
        showChevron={true}
         showClear={true}
      />
      <View style={{ width: 10 }}></View>
      <Button
        style={{ flexGrow: 0 }}
        title="Clear"
        onPress={submitAction}
      ></Button>
    </View>
    <Text style={{ color: "#668", fontSize: 13 }}>
      Selected item id: {JSON.stringify(selectedVehicle)}
    </Text>

    
  </>
}




const styles = StyleSheet.create({
    buttonContainer: {

    }
})
export default NewScreen;
