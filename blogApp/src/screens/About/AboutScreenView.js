import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { CustomHeader } from "../../components";


const AbountScreenView = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="About" navigation={navigation} />
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>About Screen!</Text>
    </View>
  </SafeAreaView>
);

AbountScreenView.propTypes = {
  navigation: PropTypes.shape({
  }).isRequired,
};

export default AbountScreenView;
