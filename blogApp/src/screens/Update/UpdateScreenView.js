import React from "react";
import {
  Text, View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { CustomHeader } from "../../navigator";

const UpdateScreenView = () => (
  // const DetailScreenView = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <CustomHeader title="Home Detail" navigation={navigation} /> */}
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>Update Screen!</Text>
    </View>
  </SafeAreaView>
);

export default UpdateScreenView;