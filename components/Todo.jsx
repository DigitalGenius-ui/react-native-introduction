import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";

const Todo = ({ item, setTodos, setModal, getInputData }) => {
  const removeTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.todo !== item.todo));
  };

  const openModel = () => {
    setModal(true);
    getInputData(item);
  };
  return (
    <View style={styles.todo}>
      <Text style={{ color: "white", fontSize: 15 }}>{item.todo}</Text>
      <View style={styles.icons}>
        <EvilIcons onPress={removeTodo} name="trash" size={32} color="red" />
        <Feather
          onPress={openModel}
          name="edit"
          size={24}
          color="green"
          style={{ marginTop: 3 }}
        />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
    borderRadius: 5,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
