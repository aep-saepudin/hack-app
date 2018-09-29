import React from "react";
import { Button,TextInput, View } from "react-native";
import { CheckBox } from 'react-native-elements'

export class SelectInterest extends React.Component {
  render(){
    return(

      <View style={{flex:1, justifyContent: 'center'}}>
        <TextInput />
        <CheckBox
          title='Click Here'
          checked={false}
        />
        <Button 
          title = "Save"
          onPress= {()=>{}}
        />
      </View>
    )
  }
}