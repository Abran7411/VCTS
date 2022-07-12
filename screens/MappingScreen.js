/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   TouchableHighlight,
   ScrollView,
 } from 'react-native';
 import { StatusBar } from 'expo-status-bar';
 
 // import ModalDropdown from 'react-native-modal-dropdown';
 import ModalDropdown from './ModalDropDown';

 
 const DEMO_OPTIONS_2 = [{"transporterID":1779,"transporterName":"ANJANEYAA TRANSPORT - CHENNAI"},{"transporterID":101,"transporterName":"APN LOGISTICS APN - CHENNAI"},{"transporterID":1753,"transporterName":"APPLE LOGISTICS - CHENNAI"},{"transporterID":102,"transporterName":"B.P. TRANS - CHENNAI"},{"transporterID":1702,"transporterName":"B.S.V . SHIPPING AGENCIES  PRIVATE LIMITED - BANGALORE"},{"transporterID":103,"transporterName":"BALU & CO - CHENNAI"},{"transporterID":1776,"transporterName":"BEST CARRIERS - CHENNAI"},{"transporterID":104,"transporterName":"C&S AGENCIES - CHENNAI"},{"transporterID":1769,"transporterName":"C.M.S TRANSPORT - CHENNAI"},{"transporterID":1735,"transporterName":"DJR TRANSPORT - CHENNAI"},{"transporterID":106,"transporterName":"ECCT TRANSPORT - CHENNAI"},{"transporterID":108,"transporterName":"G K TRANSPORT - CHENNAI"},{"transporterID":786,"transporterName":"G M TRANSPORT - CHENNAI"},{"transporterID":1840,"transporterName":"GENID SHIPPING & LOGISTICS PVT LTD - CHENNAI"},{"transporterID":1746,"transporterName":"GOKUL TRANSPORT - TAMIL NADU"},{"transporterID":1733,"transporterName":"J M R TRANSPORT - CHENNAI"},{"transporterID":115,"transporterName":"JAYALAKSHMI ROADLINES - CHENNAI"},{"transporterID":689,"transporterName":"JEEVAN TRANSPORT - CHENNAI"},{"transporterID":116,"transporterName":"JTS TRANS - CHENNAI"},{"transporterID":118,"transporterName":"K. DHARANI - CHENNAI"},{"transporterID":692,"transporterName":"KALYANI ROADWAYS - CHENNAI"},{"transporterID":119,"transporterName":"KEPPEL TRANSPORT - CHENNAI"},{"transporterID":1262,"transporterName":"KERRY INDEV LOGISTICS PRIVATE LIMITED - CHENNAI"},{"transporterID":1722,"transporterName":"KERRY INDEV LOGISTICS PRIVATE LIMITED - IRR ICD"},{"transporterID":120,"transporterName":"L.K TRANSPORT - CHENNAI"},{"transporterID":774,"transporterName":"LEO TRANSPORTS PRIVATE LIMITED - CHENNAI"},{"transporterID":1770,"transporterName":"M.K.G. TRANSPORT - CHENNAI"},{"transporterID":121,"transporterName":"MADHUVANTHY TRANSPORT - CHENNAI"},{"transporterID":1494,"transporterName":"MAHAVISHNU MOVERS - CHENNAI"},{"transporterID":1740,"transporterName":"MCP TRANSPORT - CHENNAI"},{"transporterID":122,"transporterName":"MEGATHAMMAN TRANSPORT - CHENNAI"},{"transporterID":1286,"transporterName":"NTC LOGISTICS INDIA PRIVATE LIMITED - CHENNAI"},{"transporterID":126,"transporterName":"PERIAPALAYATHAMMAN TPT - CHENNAI"},{"transporterID":685,"transporterName":"PERIYA PALAYATHAMMAN TRANS - CHENNAI"},{"transporterID":1798,"transporterName":"R.A. LOGISTICS - CHENNAI"},{"transporterID":1756,"transporterName":"RAINBOW LOGISTICS - TAMIL NADU"},{"transporterID":128,"transporterName":"ROYAL TRANSPORT - CHENNAI"},{"transporterID":129,"transporterName":"RSP ENTERPRISES - CHENNAI"},{"transporterID":787,"transporterName":"S K TRANSPORT(GIRIWALAM)) - CHENNAI"},{"transporterID":789,"transporterName":"S.R LOGISTICS - CHENNAI"},{"transporterID":1747,"transporterName":"S.R. TRANS - TAMIL NADU"},{"transporterID":797,"transporterName":"S.R.LOGISTICS A/C - CHENNAI"},{"transporterID":657,"transporterName":"S.R.T.S TRANS - CHENNAI"},{"transporterID":1742,"transporterName":"S.V.B. TRANSPORT - TAMIL NADU"},{"transporterID":1639,"transporterName":"SAI TRANSPORTS - TAMIL NADU"},{"transporterID":687,"transporterName":"SANKAR TRANSPORT - CHENNAI"},{"transporterID":326,"transporterName":"SATHISHKUMAR TRANSPORT - CHENNAI"},{"transporterID":1031,"transporterName":"SEASHELL MARINE SERVICES PRIVATE LIMITED - CHENNAI"},{"transporterID":1778,"transporterName":"SREE VEL  TRANSPORT - CHENNAI"},{"transporterID":135,"transporterName":"SREEMATHI TRANSPORT - CHENNAI"},{"transporterID":134,"transporterName":"SRI BAGAWAN TRANSPORT - CHENNAI"},{"transporterID":684,"transporterName":"SRI BHAVANI AMMAN TRANSPORT - CHENNAI"},{"transporterID":688,"transporterName":"SRI GANAPATHY TRANSPORT - CHENNAI"},{"transporterID":1773,"transporterName":"SRI HARIHARAN TRANSPORTE - CHENNAI"},{"transporterID":137,"transporterName":"SRI JAI TRANSPORT - CHENNAI"},{"transporterID":1800,"transporterName":"SRI KANDASAMY TRANSPORT - CHENNAI"},{"transporterID":648,"transporterName":"SRI KANNABIRAN TRANSPORT - CHENNAI"},{"transporterID":690,"transporterName":"SRI LAKSHMI AMMAL TRANSPORT - CHENNAI"},{"transporterID":1775,"transporterName":"SRI MAALALAMMAN ROADWAYS - CHENNAI"},{"transporterID":1883,"transporterName":"SRI RAGHAVENDRA TRANSPORT - CHENNAI"},{"transporterID":1803,"transporterName":"SRI RAJAMBAL  TRANSPORT - CHENNAI"},{"transporterID":1743,"transporterName":"SRI SHAKTHI LOGISTICS - TAMIL NADU"},{"transporterID":1734,"transporterName":"SRI SOWDAMBIKAI TRANS - CHENNAI"},{"transporterID":1777,"transporterName":"SRI VALLALAR TRANSPORT - CHENNAI"},{"transporterID":794,"transporterName":"SRTS TRANSPORT - CHENNAI"},{"transporterID":143,"transporterName":"SUDHIR TRANSPORT - CHENNAI"},{"transporterID":1780,"transporterName":"TANU SHREE TRANSPORT - CHENNAI"},{"transporterID":145,"transporterName":"THIRUVENKATAM CARGO CARRIERS - CHENNAI"},{"transporterID":1781,"transporterName":"THIRUVUDAI AMMAN TRANSPORT - CHENNAI"},{"transporterID":647,"transporterName":"V2L TRANSPORTS - CHENNAI"},{"transporterID":1688,"transporterName":"VADIVUDAI AMMAN TRANSPORT - TAMIL NADU"},{"transporterID":1752,"transporterName":"VASANTHAM TRAANS AND LOGISTIICX PRIVATE LIMITED - CHENNAI"},{"transporterID":1748,"transporterName":"VETRI TRANS - CHENNAI"},{"transporterID":785,"transporterName":"VIDHYASHRI TRANSPORT - CHENNAI"},{"transporterID":1741,"transporterName":"XLLENT MARINE LINE PVT LTD - TAMIL NADU"}
];
const data = [{"containerNo":"MRKU7845873 (20-GP)","contSeqNo":125800},{"containerNo":"MRKU9205237 (20-GP)","contSeqNo":125803},{"containerNo":"MRSU0094773 (20-GP)","contSeqNo":125804},{"containerNo":"MSKU2930906 (20-GP)","contSeqNo":125809},{"containerNo":"MSKU4419388 (20-GP)","contSeqNo":125810},{"containerNo":"MSKU5146797 (20-GP)","contSeqNo":125811},{"containerNo":"MSKU5151068 (20-GP)","contSeqNo":125812},{"containerNo":"MSKU5187857 (20-GP)","contSeqNo":125813},{"containerNo":"MSKU5689686 (20-GP)","contSeqNo":125814},{"containerNo":"MSKU5956139 (20-GP)","contSeqNo":125815},{"containerNo":"MSKU7043524 (20-GP)","contSeqNo":125816},{"containerNo":"MSKU7237284 (20-GP)","contSeqNo":125817},{"containerNo":"MSKU7365860 (20-GP)","contSeqNo":125818},{"containerNo":"MSKU7955466 (20-GP)","contSeqNo":125819},{"containerNo":"SEGU2123934 (20-GP)","contSeqNo":125826},{"containerNo":"SUDU1449525 (20-GP)","contSeqNo":125827},{"containerNo":"SUDU1935194 (20-GP)","contSeqNo":125829},{"containerNo":"TCKU1071627 (20-GP)","contSeqNo":125831},{"containerNo":"TGHU3730123 (20-GP)","contSeqNo":125834},{"containerNo":"UETU2635126 (20-GP)","contSeqNo":125839}];
 
 class MappingScreen extends Component {
   constructor(props) {
     super(props);
 
     this.state = {
       dropdown_4_options: [],
       dropdown_4_defaultValue: 'loading...',
       dropdown_6_icon_heart: true,
     };
   }
 
   render() {
     return (
       <View style={styles.container}>
         <StatusBar style="auto" />
         <View style={styles.row}>
           <View style={styles.cell}>
             <ModalDropdown ref="dropdown_2"
                            style={styles.dropdown_2}
                            textStyle={styles.dropdown_2_text}
                            dropdownStyle={styles.dropdown_2_dropdown}
                            options={DEMO_OPTIONS_2}
                            renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                            renderRow={this._dropdown_2_renderRow.bind(this)}
                            renderRowComponent={TouchableHighlight}
                            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
             />
             <TouchableOpacity onPress={() => {
               this.refs.dropdown_2.select(10);
             }}>
               <Text style={styles.textButton}>
                 Select ECCT
               </Text>
             </TouchableOpacity>
           </View>

           {/* <View style={styles.cell}>
             <ModalDropdown ref="dropdown_2"
                            style={styles.dropdown_2}
                            textStyle={styles.dropdown_2_text}
                            dropdownStyle={styles.dropdown_2_dropdown}
                            options={data}
                            renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                            renderRow={this._dropdown_2_renderRow.bind(this)}
                            renderRowComponent={TouchableHighlight}
                            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
             />
             <TouchableOpacity onPress={() => {
               this.refs.dropdown_2.select(10);
             }}>
               <Text style={styles.textButton}>
                 Select ECCT
               </Text>
             </TouchableOpacity>
           </View> */}
         </View>
        
         
       </View>
     );
   }
 
   _dropdown_2_renderButtonText(rowData) {
     const {transporterName, transporterID} = rowData;
     return `${transporterName} - ${transporterID}`;
   }
 
   _dropdown_2_renderRow(rowData, rowID, highlighted) {
     let icon = highlighted ? require('../assets/heart.png') : require('../assets/flower.png');
     let evenRow = rowID % 2;
     return (
       <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? '#AED6F1' : 'white'}]}>
         {/* <Image style={styles.dropdown_2_image}
                 mode='stretch'
                 source={icon}
         /> */}
         <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
           {`${rowData.transporterName} (${rowData.transporterID})`}
         </Text>
       </View>
     );
   }
 
   _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
     if (rowID == DEMO_OPTIONS_2.length - 1) return;
     let key = `spr_${rowID}`;
     return (<View style={styles.dropdown_2_separator}
                   key={key}
     />);
   }
 
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   row: {
     flex: 1,
     flexDirection: 'column',
   },
   cell: {
     flex: 1,
     borderWidth: StyleSheet.hairlineWidth,
   },
   scrollView: {
     flex: 1,
   },
   contentContainer: {
     height: 500,
     paddingVertical: 100,
     paddingLeft: 20,
   },
   textButton: {
     color: 'steelblue',
     borderWidth: 2,
     borderColor: 'black',
     margin: 35,
     alignSelf: 'center',
     fontSize:22
   },
 
   dropdown_1: {
     flex: 1,
     top: 32,
     left: 8,
   },
   dropdown_2: {
     alignSelf: 'center',
     width: 250,
     marginTop: 32,
     right: 8,
     borderWidth: 0,
     borderRadius: 3,
     backgroundColor: 'steelblue',
   },
   dropdown_2_text: {
     marginVertical: 10,
     marginHorizontal: 6,
     fontSize: 18,
     color: 'white',
     textAlign: 'center',
     textAlignVertical: 'center',
   },
   dropdown_2_dropdown: {
     width: 300,
     height: 300,
     borderColor: 'steelblue',
     borderWidth: 2,
     borderRadius: 3,
   },
   dropdown_2_row: {
     flexDirection: 'row',
     height: 30,
     alignItems: 'center',
   },
   dropdown_2_image: {
     marginLeft: 4,
     width: 30,
     height: 30,
   },
   dropdown_2_row_text: {
     marginHorizontal: 4,
     fontSize: 16,
     color: 'navy',
     textAlignVertical: 'center',
   },
   dropdown_2_separator: {
     height: 1,
     backgroundColor: 'steelblue',
   },
   dropdown_3: {
     width: 150,
     borderColor: 'lightgray',
     borderWidth: 1,
     borderRadius: 1,
   },
   dropdown_3_dropdownTextStyle: {
     backgroundColor: '#000',
     color: '#fff'
   },
   dropdown_3_dropdownTextHighlightStyle: {
     backgroundColor: '#fff',
     color: '#000'
   },
   dropdown_4: {
     margin: 8,
     borderColor: 'steelblue',
     borderWidth: 1,
     borderRadius: 1,
     backgroundColor:'steelblue'
   },
   dropdown_4_dropdown: {
     width: 100,
   },
   dropdown_5: {
     margin: 8,
     borderColor: 'lightgray',
     borderWidth: 1,
     borderRadius: 1,
   },
   dropdown_6: {
     flex: 1,
     left: 8,
   },
   dropdown_6_image: {
     width: 40,
     height: 40,
   },
 });
 
 export default MappingScreen;