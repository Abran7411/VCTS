import React, { memo, useCallback, useRef, useState } from "react"
import { Button, Dimensions, Text, View, Platform } from "react-native"
import { AutocompleteVesselDropdown } from "vessel-dropdown"

import Feather from "react-native-vector-icons/Feather"
Feather.loadFont()

const LocalDataSetExample = memo((props) => {
  const [loading, setLoading] = useState(true)
  const [suggestionsList, setSuggestionsList] = useState([])
  const [selectedVessel, setSelectedVessel] = useState(null)
  const dropdownController = useRef(null)

  const searchRef = useRef(null)

  const getSuggestions = useCallback(async (q) => {
    console.log("getSuggestions", q)
    if (typeof q !== "string" || q.length < 0) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await fetch('http://192.168.9.119:8080/IERP1/signServices?operation=vessel&ou=24')
    const items = await response.json()
    const suggestions = items.Root.vesselList.map((item) => ({
      vesselId: item.vesselId.toString(),
      vesselName: item.vesselName.toString()
     
    }))
    setSuggestionsList(suggestions)
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSuggestionsList(null)
  }, [])

  const onOpenSuggestionsList = useCallback((isOpened) => {}, [])

  return (
    <>
      <View
        style={[
          { flex: 1, flexDirection: "row", alignItems: "center" },
          Platform.select({ ios: { zIndex: 1 } })
        ]}
      >
        <AutocompleteVesselDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller
          }}
          // initialValue={'1'}
          direction={Platform.select({ ios: "down" })}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          onSelectItem={(item,id) => {
            item && setSelectedVessel(item.vesselId.toString())
            // item && setSelectedVessel(item.vesselName.toString())
          }}
          debounce={600}
          suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
          onClear={onClearPress}
          //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          onOpenSuggestionsList={onOpenSuggestionsList}
          loading={loading}
          useFilter={false} // prevent rerender twice
          textInputProps={{
            placeholder: "Select Vessel Name.",
            autoCorrect: false,
            autoCapitalize:'none',
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
            <Text style={{ color: "#fff", padding: 15 }}>{item.vesselName.toString()}</Text>
          )}
          ClearIconComponent={
            <Feather name="x-circle" size={20} color="#fff" />
          }
          ChevronIconComponent={
            <Feather name="chevron-down" size={20} color="#fff" />
          }
          inputHeight={60}
          showChevron={true}
          //  showClear={false}
        />
        {/* <View style={{ width: 10 }}></View>
        <Button
          style={{ flexGrow: 0 }}
          title="Clear"
          onPress={() => dropdownController.current.toggle()}
        ></Button> */}
      </View>
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected item id: {JSON.stringify(selectedVessel)}
      </Text>
 
      
    </>
  )
})

export default LocalDataSetExample;