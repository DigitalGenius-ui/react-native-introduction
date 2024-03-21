import {
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  Modal,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useCallback, useState } from "react";

// Text, View;
// StatusBar;
// Image;
// ImageBackground;
// Button;
// Pressable;
// TouchableOpacity;
// Switch;
// Modal;
// TextInput;
// FlatList;
// ScrollView;
// ActivityIndicator;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const App = () => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <Text>Hello World</Text>
      <Image
        style={{ width: 100, height: 50 }}
        source={require("./assets/icon.png")}
      />
      {/* <Button title="Open Modal" onPress={() => setModal(true)} />
      <Modal visible={modal} animationType="slide" transparent={false}>
        <View>
          <Text>This is a modal</Text>
          <Button title="Close Modal" onPress={() => setModal(false)} />
        </View>
      </Modal> */}
      {/* <TextInput
        placeholder="Write here..."
        style={{
          borderWidth: 2,
          borderColor: "red",
          width: "100%",
          padding: 10,
        }}
        value={text}
        onChangeText={setText}
      />
      <Text>{text}</Text> */}
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          marginTop: 30,
        }}
      /> */}
      <ScrollView>
        {DATA.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ScrollView>
      <ActivityIndicator size="large" color="black" />
    </SafeAreaView>
  );
};

export default App;

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 300,
    padding: 20,
    backgroundColor: "blue",
    marginVertical: 10,
  },
  text: {
    color: "white",
  },
});
