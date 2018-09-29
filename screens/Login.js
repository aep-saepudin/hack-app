import React from "react";
import { Button, View } from "react-native";

export class Login extends React.Component {
  render(){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <Button 
          title = "Login With Google"
          onPress= {()=>{}}
        />
      </View>
      
    )
  }
}