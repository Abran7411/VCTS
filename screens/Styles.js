import React, { memo, useCallback, useRef, useState,useEffect, useContext } from "react"

import {  
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Button, Dimensions, Text, View, Platform, Alert } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { AutocompleteVehicleDropdown } from "react-native-vehicle-dropdown"
import { AutocompleteVesselDropdown } from "vessel-dropdown"
import { AutocompleteContainerDropdown } from "container-dropdown"
import { Colors } from "react-native/Libraries/NewAppScreen"
import AccentButton from "../components/AccentButton"
import MainButton from "../components/MainButton"
import Feather from "react-native-vector-icons/Feather"
import axios from 'axios'
import data from '../components/JSON/data.json'
import cloneDeep from 'lodash/cloneDeep';
Feather.loadFont()

const Styles = memo((props) => {
  const isDarkMode = useColorScheme() === "dark"

  // const submitAction = (props) => {
  //   Alert.alert(
  //     "Import Data Added Successfully!",
  //     "Import data:" + JSON.stringify()
  //   );
  // }

  const submitClear = (props) => {
    setSelectedTransporter([]);
    setSelectedVehicle([]);
    setSelectedVessel([]);
    setSelectedContainer([]);
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  const submitHandler = () => {
    let collection = {};
    collection.transporterID = selectedTransporter,
    collection.VehicleId = selectedVehicle,
    collection.vesselId = selectedVessel,
    collection.contSeqNo = selectedContainer
    console.warn(collection);
      
    fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=saveDetailes&savedJson=${collection}&ou=24`, {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(collection),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:',data)
    })
    .catch((error) => {
      console.error('Error',error)
    });
    Alert.alert(
      "Import Data Added Successfully!",
      "Import Data:"+JSON.stringify(collection))
  }

  
  const submitAction = (props) => {
    Alert.alert(
      "Import Data Added Successfully!",
      "transporterID:" + JSON.stringify(selectedTransporter)
    );
  }

  const submitVehicle = (props) => {
    Alert.alert(
      "Import Data Added Successfully!",
      "VehicleID:" + JSON.stringify(selectedVehicle)
    );
  }
  
  const submitVessel = (props) => {
    Alert.alert(
      "Import Data Added Successfully!",
      "vesselID:" + JSON.stringify(selectedVessel)
    )
  }

  const submitContainer = (props) => {
    Alert.alert(
      "Import Data Added Successfully!",
      "contSeqNo:" + JSON.stringify(selectedContainer)
    )
  }

  
//  const nullableentry = {
//    transporterID:""
//  }
const initialState = {
  channel: null,
  order: {},
  fetching:true,
  menu: [],
  categories: [],
  subcategories: [],
  currentCategoryId: 1,
  currentSubcategoryId: 5,
  currentMenu: [],
  transporterID:'',
 };
  const [loading, setLoading] = useState(false);
  const [transporterList, setTransporterList] = useState(null);
  const [selectedTransporter, setSelectedTransporter] = useState(null);
  const [vehicleList, setVehicleList] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vesselList, setVesselList] = useState(null);
  const [selectedVessel, setSelectedVessel] = useState(null);
  const [containerList, setContainerList] = useState(null);
  const [selectedContainer, setSelectedContainer] = useState(null);
  // const [url, setUrl] = useState(selectedTransporter); 

  const [transporterid, setTransporterid] = useState(''); //useState to get selectedDropdownValue
  const [selectVesselId, setSelectVesselId] = useState('');

const vessel = (vesid) => {
  setSelectVesselId(vesid);
}

const transId = (id) => {
   setTransporterid(id);

} //Updating state here in this arrow function.

console.log("New Transporter:"+transporterid);//updated state is printed in this console.

//when its called inside this function, state shows the initialvalue as null, state is not updated inside.
const world = async () => {
  setLoading(true);
  console.log("@ the time of API Call"+transporterid);

  let response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=`);
  let items = await response.json()
  let suggestions = items.Root.vehicleList.filter(item => item.TransId == transporterid).map((item,VehicleId) => ({
    VehicleId: item.VehicleId.toString(),
    VehicleNo: item.VehicleNo.toString()
  }))
  console.log("vehicleList:"+suggestions);
  
  setVehicleList(suggestions);
  setLoading(false);

}
// const newid = cloneDeep(transporterid);
// console.log("Lodash value is:"+newid)
  // const trasnoprt = getTransporter(selectedTransporter);
  // const [enteredUser, setEnteredUser] = useState('');
  const dropdownController = useRef(null);

  const searchRef = useRef(null);
 
//   const getTransporter = () => {
//   let first=data.Root.transList.map((transporterName) => ({
//     transName:transporterName.transName,
//     transID:transporterName.transID
    
//   }))
//   setTransporterList(first);
// }
  const getTransporter = useCallback(async (q) => {
    console.log("getTransporter", q)
    if (typeof q !== "string" || q.length < 0) {
      setTransporterList(null)
      return
    }
    
    setLoading(true)
    const response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=transporter&ou=24`)
    const items = await response.json();
    const suggestions = items.Root.Tranaslist.map((item,transporterID) => ({
      transporterID: item.transporterID.toString(),
      transporterName: item.transporterName.toString(),
    }));
    // setSelectedTransporter(selectedTransporter);
    setTransporterList(suggestions);
    setLoading(false);
    
    // setEnteredUser('');
  }, []);


  const tranfun = async () => {
    setLoading(true);
    let response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=`);
    let items = await response.json()
    let suggestions = items.Root.vehicleList.filter(it => it.TransId  == transporterid).map((item,VehicleId) => ({
      VehicleId: item.VehicleId.toString(),
      VehicleNo: item.VehicleNo.toString()
    }))
    setVehicleList(suggestions);
    setLoading(false);
    // console.warn(suggestions);
    console.log("New Transporter:"+transporterid);
  }

  const containerfun = async () => {
    setLoading(true);
    let response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=firstContainer&vesselId=19&secConId=125&ou=24`);
    let items = await response.json()
    let suggestions = items.Root.firstContainerList.filter(it => it.VesselId  == selectVesselId).map((item,VehicleId) => ({
      contSeqNO: item.contSeqNO.toString(),
      containerNo: item.containerNo.toString()
    }))
    setContainerList(suggestions);
    setLoading(false);
    // console.warn(suggestions);
    console.log("New Vessel:"+selectVesselId);
  }

  // let collection = selectedTransporter;
  // console.log("This:" + collection);
  // let transporter = useRef(null);
  // useEffect(() => {
  //   transporter = collection;
  // })
  // console.log(selectedTransporter);
  
  // const transId = useRef(collection);
  // if(collection='1722'){
  //   collection = 1722;
  // }else if(collection = '106'){
  //   collection = 106;
  // }

  // const res = axios.get(`http://192.168.9.119:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=`+collection);
  // console.log(res)
  // const collect = transport => {
  //   console.log("new:"+selectedTransporter);
  //   setSelectedTransporter({
  //     collect_selectedTransporter:transport
  //   })
  // }
// let collection = selectedTransporter;
// console.log("new:"+selectedTransporter); 
//   useEffect(() => {
//     setSelectedTransporter(collection);
//   },[collection])

// let collection = 1840;
// let respond = fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=`+selectedTransporter)
// fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=`+selectedTransporter, {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          console.log(responseJson);
//         //  setVehicleList({
//         //     data: responseJson
//         //  })
//         setVehicleList(responseJson);
//       //   setData({
//       //     data: responseJson
//       //  })
//       })
//       .catch((error) => {
//          console.error(error);
//       });

// console.log("RESULT:"+selectedTransporter);
// let collection = selectedTransporter;
// console.log("collection call:"+collection);
//   useEffect(() => {
    
//       setSelectedTransporter(collection);
    
//   },[collection])

  const getVehicle = useCallback(async (q) => {
    // let transid = props.selectedTransporter;
    // const transport = getTransporter();
    // let chosenNumber = selectedTransporter;
    // console.log("getVehicle", q)
    // if (typeof q !== "string" || q.length < 0) {
    //   setVehicleList(null)
    //   return
    // }
    // selectedTransporter = 106;
    
    //  setSelectedTransporter(selectedTransporter+106);
    //   setSelectedTransporter({...selectedTransporter,transport});
    // transport[id] = newValue;
  
    // let selectedTransporter = 106
    // let transporterid = 1840; 
    setSelectedTransporter((prevSelectedTransporter) => [prevSelectedTransporter]);
  
    setLoading(true);
    console.log("@ the time of API Call:" + selectedTransporter);
    // setSelectedTransporter(q.target.value);
    // console.log("Id:"+collection);
    let response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=transporterVehicleList&ou=24&transId=`);
    let items = await response.json()
    let suggestions = items.Root.vehicleList.map((item,VehicleId) => ({
      VehicleId: item.VehicleId.toString(),
      VehicleNo: item.VehicleNo.toString()
    }))
    console.log("vehicleList:"+suggestions);
    // setSelectedTransporter(choenNumber);
    setVehicleList(suggestions);
    setLoading(false);


    // console.log(collection);
    // console.log(setVehicleList);
  }, []);

// const getVehicleDtl = React.useEffect(() => {
//   fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=transporterVehicleList&transId=1840&ou=24`)
//   .then((response) => response.data)
// }
// ,[])
  // const getVehicle = React.useEffect(() => {
    
  //    fetch(`http://192.168.9.119:8080/IERP1/signServices?operation=transporterVehicleList&transId=${selectedTransporter}&ou=24`)
  //    .then((response) => {
  //     return response.json();
  //   })
  //   .then((suggestions) => {
  //     setVehicleList(suggestions);
  //   });
    
  //  },[selectedTransporter])

  const getVessel = useCallback(async (q) => {
    console.log("getVessel", q)
    if (typeof q !== "string" || q.length < 0) {
      setVesselList(null)
      return
    }
    setLoading(true)
    const response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=vessel&ou=24`)
    const items = await response.json()
    const suggestions = items.Root.vesselList.map((item,vesselId) => ({
      vesselId: item.vesselId.toString(),
      vesselName: item.vesselName.toString()
     
    }))
    setVesselList(suggestions)
    setLoading(false)
  }, [])
  
  const getContainer = useCallback(async (q) => {
    console.log("getContainer", q)
    if (typeof q !== "string" || q.length < 0) {
      setContainerList(null)
      return
    }
    setLoading(true)
    const response = await fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=firstContainer&vesselId=19&secConId=125&ou=24`)
    const items = await response.json()
    const suggestions = items.root.firstContainerList.map((item,id) => ({
      contSeqNO: item.contSeqNO.toString(),
      containerNo: item.containerNo.toString()
    }))
    setContainerList(suggestions)
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSelectedTransporter('');
    setSelectedVehicle('');
    setSelectedVessel('');
    setSelectedContainer('');
  }, [])

  const onOpenSuggestionsList = useCallback((isOpened) => {}, [])
   
  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <ScrollView
        nestedScrollEnabled
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollContainer}
      >
        <View style={[styles.container]}>
          
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 100 } })]}
          >
            <Text style={styles.sectionTitle}>Transporter Name.</Text>
            <View
        style={[
          { flex: 1, flexDirection: "row", alignItems: "center" },
          Platform.select({ ios: { zIndex: 1 } })
        ]}>
        <AutocompleteDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller
          }}
         
          // onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          direction={Platform.select({ ios: "down" })}
          dataSet={transporterList}
          onChangeText={getTransporter}
          // onChangeText={searchText => setSearchText(searchText)}
          onSelectItem={(item,transporterID) => {
            item && setSelectedTransporter(item.transporterID.toString())
            item && transId(item.transporterID.toString())
            // item && setSelectedTransporter(item.transporterName.toString())
          }}
          // onSelectItem={selectedItem}
          debounce={600}
          suggestionsListMaxHeight={Dimensions.get("window").height * 0.6}
          onClear={onClearPress}
          //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          onOpenSuggestionsList={onOpenSuggestionsList}
          loading={loading}
          // value={searchText}
          useFilter={false} // prevent rerender twice
          textInputProps={{
            placeholder: 'Select Transport',
            autoCorrect: false,
            autoCapitalize:"none",
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
            <Text style={{ color: "whitesmoke", padding: 15, fontSize:20 }} key={item}>{item.transporterName.toString()}</Text>
          )}

          ChevronIconComponent={
            <Feather name="chevron-down" size={30} color="#fff" />
          }
          ClearIconComponent={
            <Feather name="x-circle" size={20} color="#fff" />
          }
         
          inputHeight={60}
          showChevron={false}
          //  showClear={false}
        />
        {/* <View style={{ width: 10 }}></View>
        <Button
          style={{ flexGrow: 0 }}
          title="Clear"
          onPress={submitAction}
          color='steelblue'
        ></Button> */}
      </View>
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected Transporter: {JSON.stringify(selectedTransporter)}
      </Text>
      {/* <Text>{collection}</Text> */}
          </View>
          
          <View style={[styles.section, Platform.select({ ios: { zIndex: 99 } })]}>
            <Text style={styles.sectionTitle}>Vehicle No.</Text>
            
            <View
        style={[
          { flex: 1, flexDirection: "row", alignItems: "center" },
          Platform.select({ ios: { zIndex: 1 } })
        ]}
      >
        {/* <Text>Render Item:{}</Text> */}
        {/* {vehicleList.map((word) => {
          return <Text>{word}</Text>
        })} */}

        <AutocompleteVehicleDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller
          }}
          // initialValue={'1'}
          direction={Platform.select({ ios: "down" })}
          dataSet={vehicleList}
          onChangeText={tranfun}
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
            autoCapitalize:"none",
            style: {
              borderRadius: 15,
              backgroundColor: "#383b42",
              color: "#fff",
              paddingLeft: 18,
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
            <Text style={{ color: "whitesmoke", padding: 15, fontSize: 20}} key={item}>{item.VehicleNo.toString()}</Text>
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
          title="Load"
          onPress={tranfun}
        ></Button>
      </View>
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected Vehicle id: {JSON.stringify(selectedVehicle)}
      </Text>
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 98 } })]}
          >
            <Text style={styles.sectionTitle}>Vessel Name.</Text>
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
          dataSet={vesselList}
          onChangeText={getVessel}
          onSelectItem={(item,id) => {
            item && setSelectedVessel(item.vesselId.toString())
            item && vessel(item.vesselId.toString())
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
            <Text style={{ color: "whitesmoke", padding: 15, fontSize: 20}}>{item.vesselName.toString()}</Text>
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
          onPress={submitVessel}
        ></Button> */}
      </View>
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected item id: {JSON.stringify(selectedVessel)}
      </Text>
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 97 } })]}
          >
            <Text style={styles.sectionTitle}>Container No.</Text>
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
          dataSet={containerList}
          onChangeText={containerfun}
          onSelectItem={(item,contSeqNo) => {
            item && setSelectedContainer(item.contSeqNO.toString())
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
            <Text style={{ color: "whitesmoke", padding: 15, fontSize: 20}}>{item.containerNo.toString()}</Text>
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
          title="Load"
          onPress={containerfun}
        ></Button>
      </View>
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected Container id: {JSON.stringify(selectedContainer)}
      </Text>
          </View>
          <View style={styles.buttonContainer}>
            <AccentButton onPress={submitHandler}>Save</AccentButton>
            <MainButton onPress={onClearPress}>Reset</MainButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
)
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
})

export default Styles;
