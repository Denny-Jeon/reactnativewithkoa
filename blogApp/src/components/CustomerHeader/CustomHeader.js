import * as React from "react";
import {
  Header, Left, Body, Right, Button, Icon, Title,
} from "native-base";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  header: { backgroundColor: "#00cc00" },
  left: { flex: 1 },
  body: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  right: { flex: 1 },
});

const CustomHeader = ({ navigation, title, isHome }) => (
  <Header style={styles.header}>
    <Left style={styles.left}>
      {isHome ? (
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      ) : (
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      )}
    </Left>
    <Body style={styles.body}>
      {/*  */}
      <Title>{title}</Title>
    </Body>
    <Right style={styles.right}>
      {isHome && (
        <Button
          transparent
          onPress={() => navigation.navigate("Search")}
        >
          <Icon name="search" />
        </Button>
      )}
    </Right>
  </Header>
);

CustomHeader.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  isHome: PropTypes.bool,
};

CustomHeader.defaultProps = {
  isHome: false,
};

export default CustomHeader;
