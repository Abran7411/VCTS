import React, {useState,useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [{"containerNo":"MRKU7845873 (20-GP)","contSeqNo":125800},{"containerNo":"MRKU9205237 (20-GP)","contSeqNo":125803},{"containerNo":"MRSU0094773 (20-GP)","contSeqNo":125804},{"containerNo":"MSKU2930906 (20-GP)","contSeqNo":125809},{"containerNo":"MSKU4419388 (20-GP)","contSeqNo":125810},{"containerNo":"MSKU5146797 (20-GP)","contSeqNo":125811},{"containerNo":"MSKU5151068 (20-GP)","contSeqNo":125812},{"containerNo":"MSKU5187857 (20-GP)","contSeqNo":125813},{"containerNo":"MSKU5689686 (20-GP)","contSeqNo":125814},{"containerNo":"MSKU5956139 (20-GP)","contSeqNo":125815},{"containerNo":"MSKU7043524 (20-GP)","contSeqNo":125816},{"containerNo":"MSKU7237284 (20-GP)","contSeqNo":125817},{"containerNo":"MSKU7365860 (20-GP)","contSeqNo":125818},{"containerNo":"MSKU7955466 (20-GP)","contSeqNo":125819},{"containerNo":"SEGU2123934 (20-GP)","contSeqNo":125826},{"containerNo":"SUDU1449525 (20-GP)","contSeqNo":125827},{"containerNo":"SUDU1935194 (20-GP)","contSeqNo":125829},{"containerNo":"TCKU1071627 (20-GP)","contSeqNo":125831},{"containerNo":"TGHU3730123 (20-GP)","contSeqNo":125834},{"containerNo":"UETU2635126 (20-GP)","contSeqNo":125839}];



const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);
  const [suggestionsList, setSuggestionsList] = useState([])
  const getSuggestions = useCallback(async (q) => {
    console.log("getSuggestions", q)
    if (typeof q !== "string" || q.length < 0) {
      setSelected(null)
      return
    }
    setLoading(true)
    const response = await fetch('http://192.168.9.119:8080/IERP1/signServices?operation=transporterVehicleList&transId=106&ou=24')
    const items = await response.json()
    const suggestions = items.Root.vehicleList.map((item) => ({
      VehicleId: item.VehicleId.toString(),
      VehicleNo: item.VehicleNo.toString()
     
    }))
    setSelected(suggestions)
    setLoading(false)
  }, [])

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.containerNo}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="containerNo"
        valueField="containerNo"
        placeholder="Select item"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.containerNo}</Text>
              <AntDesign color="black" name="delete" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: {padding: 16},
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
