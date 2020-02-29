import React from "react";
import {
  Text, View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { CustomHeader } from "../../navigator";

const PostScreenView = () => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <CustomHeader title="Setting" isHome navigation={navigation} /> */}
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>Post Screen!</Text>

      {/* <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("SettingDetail")}
      >
        <Text>Go Setting Detail</Text>
      </TouchableOpacity> */}
    </View>
  </SafeAreaView>
);

export default PostScreenView;
