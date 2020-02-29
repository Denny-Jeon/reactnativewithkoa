import React from "react";
import {
  Text, TouchableOpacity, ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";


const CustomDrawerContent = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, marginLeft: 5 }}>
    <ScrollView>
      <TouchableOpacity style={{ margintTop: 20 }} onPress={() => navigation.navigate("MainTab")}>
        <Text>Menu Tab</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ margintTope: 20 }} onPress={() => navigation.navigate("About")}>
        <Text>About</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

CustomDrawerContent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CustomDrawerContent;
