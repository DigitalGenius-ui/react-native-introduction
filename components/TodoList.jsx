import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Todo from "./Todo";
import { AntDesign } from "@expo/vector-icons";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [modal, setModal] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editInput, setEditInput] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: Math.random() * 10000, todo }]);
    setTodo("");
  };

  const getInputData = (item) => {
    if (item) {
      setEditTodo(item);
      setEditInput(item.todo);
    }
  };

  const editTodoList = () => {
    const newTodo = todos.map((item) => {
      if (item.id === editTodo.id) {
        return {
          ...item,
          todo: editInput,
        };
      } else {
        return item;
      }
    });
    setTodos(newTodo);
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Todo..."
          style={styles.input}
          placeholderTextColor="white"
          value={todo}
          onChangeText={setTodo}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo
              item={item}
              setTodos={setTodos}
              setModal={setModal}
              getInputData={getInputData}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* edit todo modal  */}
      <Modal visible={modal} animationType="slide">
        <View style={{ flex: 1, backgroundColor: "black", padding: 20 }}>
          <Text style={styles.editTitle}>Edit Todo</Text>
          <AntDesign
            onPress={() => setModal(false)}
            style={styles.closeIcon}
            name="close"
            size={24}
            color="white"
          />
          <TextInput
            placeholder="Edit Todo..."
            style={[styles.input, { marginBottom: 10 }]}
            placeholderTextColor="white"
            value={editInput}
            onChangeText={setEditInput}
          />
          <Button title="Edit Todo" onPress={editTodoList} />
        </View>
      </Modal>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingBottom: 50,
    fontSize: 20,
  },
  inputContainer: {
    gap: 10,
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
  },
  editTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 25,
    left: 20,
  },
});
