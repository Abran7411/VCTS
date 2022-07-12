import React, { memo, useCallback, useRef, useState,useEffect } from "react"
import { Button, Dimensions, Text, View, Platform, Alert } from "react-native"
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown"

import Feather from "react-native-vector-icons/Feather"
Feather.loadFont()

const RemoteDataSetExample2 = memo((props) => {
  // getInitialState() {
  //   return {
  //     transporterName: this.props.transporterName,
  //     transporterID: this.props.transporterID,
  //     obj: []
  //   };
  // };
  const submitAction = (props) => {
    Alert.alert(
      "Import Data Added Successfully!",
      "transporterID:" + JSON.stringify(selectedTransporter)
    );
  }

  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(null);
  const [selectedTransporter, setSelectedTransporter] = useState(null);
  // const [enteredUser, setEnteredUser] = useState('')
  const dropdownController = useRef(null);

  const searchRef = useRef(null);

  const getSuggestions = useCallback(async (q) => {
    console.log("getSuggestions", q)
    if (typeof q !== "string" || q.length < 0) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await fetch('http://192.168.9.119:8080/IERP1/signServices?operation=transporter&ou=24')
    const items = await response.json();
    const suggestions = items.Root.Tranaslist.map((item,id) => ({
      transporterID: item.transporterID.toString(),
      transporterName: item.transporterName.toString(),
    }));
    
    setSuggestionsList(suggestions)
    setLoading(false)
    // setEnteredUser('');
  }, []);

//  const placehold = useEffect(() => {
//     if (selectedItem) {
//       setSearchText(selectedItem.transporterName ?? '')
//     } else {
//       setSearchText('')
//     }

//     if (typeof props.onSelectItem === 'function') {
//       props.onSelectItem(selectedItem)
//     }
//   }, [selectedItem]);

// const onChangeText = useCallback((text) => {
//   setSearchText(text)
// }, []);

// const textInputHandler = (enterUser) => {
//   setEnteredUser(enterUser);
// }
  const onClearPress = useCallback(() => {
    setSuggestionsList(null);
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
        <AutocompleteDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller
          }}
         
          // onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          direction={Platform.select({ ios: "down" })}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          // onChangeText={searchText => setSearchText(searchText)}
          onSelectItem={(item,id) => {
            item && setSelectedTransporter(item.transporterID.toString())
            // item && setSelectedTransporter(item.transporterName.toString())
          }}
          // onSelectItem={selectedItem}
          debounce={600}
          suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
          onClear={onClearPress}
          //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          onOpenSuggestionsList={onOpenSuggestionsList}
          loading={loading}
          // value={searchText}
          useFilter={false} // prevent rerender twice
          textInputProps={{
            placeholder: 'Select Transport',
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
          renderItem={(item, searchText) => (
            <Text style={{ color: "#ccc", padding: 15 }} key={item}>{item.transporterName.toString()}</Text>
          )}

          ChevronIconComponent={
            <Feather name="chevron-down" size={20} color="#fff" />
          }
          ClearIconComponent={
            <Feather name="x-circle" size={20} color="#fff" />
          }
         
          inputHeight={60}
          showChevron={true}
          //  showClear={false}
        />
        <View style={{ width: 10 }}></View>
        <Button
          style={{ flexGrow: 0 }}
          title="Clear"
          onPress={submitAction}
          color='steelblue'
        ></Button>
      </View>
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected Transporter: {JSON.stringify(selectedTransporter)}
      </Text>

      
    </>
  )
})

export default RemoteDataSetExample2;