import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import data from '../data/data.json'

function MultiSelectExample() {
  const [selectedVehicleNo, setSelectedVehicleNo] = useState([]);
  const [selectedTransID, setSelectedTransID] = useState([]);
  console.log(selectedTransID);
  const prods = data.Root.Tranaslist.map((item, index) => {
    const keywords = item.VehicleList.map((cur) => {
      return (
        <Picker.Item label={cur.VehicleNo} value={cur.VehicleNo} />
      );
    });
  return (
    <View style={styles.container} key={index}>
      <Picker
        selectedTransID={selectedTransID}
        style={{ height: 75, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedTransID(itemValue)}
      >
        
            <Picker.Item label={item.transporterName} value={item.transporterID.toString()} />
        
      </Picker>
      <Picker
        selectedVehicleNo={selectedVehicleNo}
        style={{ height: 75, width: 200 }}
        onValueChange={(item, index) =>
          setSelectedVehicleNo(item)
        }>
        
        {keywords}
      
        
      </Picker>
    </View>
  );
      })
      console.log(prods);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default MultiSelectExample;
