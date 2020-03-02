import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import {
  Container, Content, List, ListItem,
} from "native-base";

const routes = [
  { path: "List", name: "메인메뉴" },
  { path: "About", name: "About" },
];

const styles = StyleSheet.create({
  backgroundImage: {
    height: 120,
    width: "100%",
    position: "absolute",
    alignSelf: "stretch",
  },
  mainImage: {
    height: 80,
    width: 70,
    position: "absolute",
    alignSelf: "center",
    top: 20,
  },
  list: {
    marginTop: 120,
  },
});

const CustomDrawerContent = ({ navigation }) => (
  <Container>
    <Content>
      <Image
        source={{ uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png" }}
        style={styles.backgroundImage}
      />
      <Image
        square
        source={{ uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png" }}
        style={styles.mainImage}
      />
      <List
        dataArray={routes}
        contentContainerStyle={styles.list}
        keyExtractor={(data) => data.path}
        renderRow={(data) => (
          <ListItem button onPress={() => navigation.navigate(data.path)}>
            <Text>{data.name}</Text>
          </ListItem>
        )}
      />
    </Content>
  </Container>
);

CustomDrawerContent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CustomDrawerContent;
