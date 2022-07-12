import React, { Component,useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown'

class DashBody extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    refresh = () => {
        // re-renders the component
        this.setState({});
      };
    
    fetchData() {
        fetch(`http://192.168.9.110:8080/IERP1/signServices?operation=transporter&ou=24`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    data: data
                });
            });
    }
    // fetchData() {
    //     fetch('http://127.0.0.1:8000/tripsheet/')
    //         .then(response => response.json())
    //         .then((dataset) => {
    //             this.setState({
    //                 data: dataset
    //             });
    //         });
    // }

    componentDidMount() {
        this.fetchData();
        this.setState({});
        this.forceUpdate();
    }
    componentWillReceiveProps(props) {
        const { refresh } = this.props;
        if (props.refresh !== refresh) {
          this.fetchdata()
            .then(this.setState)
        }
      }
  
    render() {
         const cargodata=this.state.data;
        //  const fontdata=this.state.data;
       return(
         <View>
            {
                    cargodata.Root.Tranaslist.map((transport,id) => {
                      return (
                        <Text>{transport.transporterName}</Text>
                      )
                    })}
         </View>
       )
      }}


export default DashBody;
