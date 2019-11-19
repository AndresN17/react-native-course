import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId)
    });
    console.log("Eliminaste una meta!");
  };

  const cancelGoalAddition=()=>{
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddition} />
      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value} />)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
