import React from "react";
import {
  Text, View,
  // Image, TouchableOpacity, ScrollView, Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { CustomHeader } from "../../navigator";

const ListScreenView = () => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <CustomHeader title="Home" isHome navigation={navigation} /> */}
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>List Screen!</Text>
      {/* <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("HomeDetail")}
      >
        <Text>Go Home Detail</Text>
      </TouchableOpacity> */}
    </View>
  </SafeAreaView>
);

export default ListScreenView;
