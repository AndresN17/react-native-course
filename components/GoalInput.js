import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.top}>
                <TextInput placeholder="Course Goal." style={styles.textInput}
                    onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonsStyle}>
                    <View style={styles.Button}>
                        <Button title="cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.Button}>
                        <Button title="add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10
    },
    buttonsStyle: {
        width: "40%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        width: "40"
    }
});

export default GoalInput;