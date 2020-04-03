import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { CustomHeader } from "../../components";

const styles = StyleSheet.create({
  nav: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginHorizontal: 5,
  },
  textInputView: {
    padding: 5,
  },
  textInput: {
    height: 60,
    fontSize: 16,
    backgroundColor: "white",
    textAlign: "left",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#FCE443",
  },
});

const SearchScreenView = ({
  navigation, search, handleSubmit, handleChange,
}) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="검색" navigation={navigation} />
    <View style={styles.nav}>

      <Button title="검색" onPress={() => handleSubmit()} />
    </View>

    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange}
        value={search}
        placeholder="검색어"
      />
    </View>
  </SafeAreaView>
);

SearchScreenView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  search: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchScreenView;
