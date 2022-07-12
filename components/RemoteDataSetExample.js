import React, { memo, useCallback, useRef, useState } from "react"
import { Button, Dimensions, Text, View, Platform,Alert } from "react-native"
import { AutocompleteVehicleDropdown } from "react-native-vehicle-dropdown"

import Feather from "react-native-vector-icons/Feather"
Feather.loadFont()

 const RemoteDataSetExample = memo((props) => {
  const [loading, setLoading] = useState(true)
  const [suggestionsList, setSuggestionsList] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const dropdownController = useRef(null)

  const searchRef = useRef(null)
// let collection = selectedTransporter;
  const getSuggestions = useCallback(async (q) => {
    console.log("getSuggestions", q)
    if (typeof q !== "string" || q.length < 0) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await fetch('http://192.168.9.110:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=106')
    const items = await response.json()
    const suggestions = items.Root.vehicleList.map((item) => ({
      VehicleId: item.VehicleId.toString(),
      VehicleNo: item.VehicleNo.toString()
     
    }))
    setSuggestionsList(suggestions)
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSuggestionsList(null)
  }, [])

  const onOpenSuggestionsList = useCallback((isOpened) => {}, [])
  
  const submitAction = (props) => {
    Alert.alert(
      "Import Data Added Successfully!",
      "Import data:" + JSON.stringify(selectedVehicle)
    );
  }

  return (
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
          onSelectItem={(item,VehicleId) => {
            item && setSelectedVehicle(item.VehicleId.toString())
            // item && setSelectedVehicle(item.VehicleNo.toString())
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
          //  showClear={true}
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
  )
})

export default RemoteDataSetExample;