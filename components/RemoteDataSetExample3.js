import React, { memo, useCallback, useRef, useState } from "react"
import { Button, Dimensions, Text, View, Platform } from "react-native"
import { AutocompleteContainerDropdown } from "container-dropdown"

import Feather from "react-native-vector-icons/Feather"
Feather.loadFont()

export const RemoteDataSetExample3 = memo((props) => {
  const [loading, setLoading] = useState(true)
  const [suggestionsList, setSuggestionsList] = useState([])
  const [selectedContainer, setSelectedContainer] = useState(null)
  const dropdownController = useRef(null)

  const searchRef = useRef(null)

  const getSuggestions = useCallback(async (q) => {
    console.log("getSuggestions", q)
    if (typeof q !== "string" || q.length < 0) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await fetch('http://192.168.9.119:8080/IERP1/signServices?operation=secondContainer&vesselId=554&conId=125&ou=24')
    const items = await response.json()
    const suggestions = items.root.secondContainerList.map((item) => ({
      contSeqNo: item.contSeqNo.toString(),
      containerNo: item.containerNo.toString()
     
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
        <AutocompleteContainerDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller
          }}
          // initialValue={'1'}
          direction={Platform.select({ ios: "down" })}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          onSelectItem={(item,id) => {
            item && setSelectedContainer(item.contSeqNo.toString())
            item && setSelectedContainer(item.containerNo.toString())
          }}
          debounce={600}
          suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
          onClear={onClearPress}
          //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          onOpenSuggestionsList={onOpenSuggestionsList}
          loading={loading}
          useFilter={false} // prevent rerender twice
          textInputProps={{
            placeholder: "Select Container No.",
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
            <Text style={{ color: "#fff", padding: 15 }}>{item.containerNo.toString()}</Text>
          )}
          ChevronIconComponent={
            <Feather name="x-circle" size={18} color="#fff" />
          }
          ClearIconComponent={
            <Feather name="chevron-down" size={20} color="#fff" />
          }
          inputHeight={60}
          showChevron={false}
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
        Selected item id: {JSON.stringify(selectedContainer)}
      </Text>

      
    </>
  )
})

export default RemoteDataSetExample3;