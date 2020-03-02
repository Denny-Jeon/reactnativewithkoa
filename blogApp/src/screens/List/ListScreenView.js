import React from "react";
import {
  Text, View, TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { CustomHeader } from "../../components";

const ListScreenView = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="글목록" isHome navigation={navigation} />
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>List Screen!</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("DetailStack")}
      >
        <Text>글보기</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

ListScreenView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListScreenView;
