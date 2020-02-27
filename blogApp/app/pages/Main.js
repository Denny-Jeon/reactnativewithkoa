import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container, Header, Title, Button, Icon, Right, Body,
} from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainHeader = () => (
  <Container>
    <Text>adfdafsd</Text>
  </Container>
);

const Main = () => (
  // <View style={styles.container}>
  //   <Text>Main Screen</Text>
  //   <MainHeader />
  // </View>
  <MainHeader />
);

export default Main;
