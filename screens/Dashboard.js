import React from "react";
import { Button,TextInput, View, Modal, Text, TouchableHighlight } from "react-native";
import { CheckBox } from 'react-native-elements'

export class Dashboard extends React.Component {
  state = {
    showModal: true
  }
  render(){
    return(
      <View style={{flex:1, justifyContent: 'center'}}>
        <TouchableHighlight><Text>+</Text></TouchableHighlight>
        <TouchableHighlight><Text>...</Text></TouchableHighlight>
        <TouchableHighlight><Text>...</Text></TouchableHighlight>
        <TouchableHighlight><Text>...</Text></TouchableHighlight>
        
        <TouchableHighlight><Text>List inkers</Text></TouchableHighlight>
        <TouchableHighlight><Text>Category A</Text></TouchableHighlight>
        <TouchableHighlight><Text>Category B</Text></TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
            <View>
              <Text>Minggu Depan</Text>
              <Text>Bulan Depan</Text>
              <Text>Tidak Sekarang</Text>
            </View>
            <Button 
              title="Skip"
              onPress={()=>{this.setState({showModal:false})}}
            />
          </View>
        </Modal>
      </View>
    )
  }
}