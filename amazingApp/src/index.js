import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter } from "react-router-native";
import AppRoot from "./root";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <AppRoot />
    </View>
  </NativeRouter>
);


export default App;
