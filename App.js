import React from 'react';
import { StyleSheet, TextInput, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:30}}>
      <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
        <TextInput placeholder="Course Goal." 
        style={{ width: "80%" ,borderColor:"black", borderWidth:1}}/>
        <Button title="add"/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
