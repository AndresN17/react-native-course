import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button,Text,ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);

  const goalInputHandler=(enteredText)=>{
    setEnteredGoal(enteredText);
  };

  const addGoalHandler=()=>{
    setCourseGoals(currentGoals => [...courseGoals,enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <TextInput placeholder="Course Goal." style={styles.textInput} 
        onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="add" onPress={addGoalHandler}/>
      </View>
      <ScrollView>
        {courseGoals.map((goal)=>
        <View style={styles.listItem} key={goal}>
          <Text>{goal}</Text>
        </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:30,
  },
  top:{
    flexDirection: "row", 
    justifyContent:"space-between", 
    alignItems: "center"
  },
  textInput:{
    width: "80%" ,
    borderColor:"black",
    borderWidth:1
  },
  listItem:{
    padding: 10,
    marginVertical:10,
    backgroundColor: "#ccc",
    borderColor:"black",
    borderWidth:1
  }
  
});
