import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal,setEnteredGoal]=useState('');

    const goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
      };

    return (
        <View style={styles.top}>
            <TextInput placeholder="Course Goal." style={styles.textInput}
                onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="add" onPress={props.onAddGoal.bind(this,enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1
    }
});

export default GoalInput;