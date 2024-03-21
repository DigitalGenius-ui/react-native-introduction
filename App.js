import { View } from "react-native";
import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
};

export default App;
