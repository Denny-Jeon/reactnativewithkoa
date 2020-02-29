import * as React from "react";
import {
  Text, View, Image, TouchableOpacity,
} from "react-native";


const CustomHeader = ({ navigation, title, isHome = false }) => (
  <View style={{
    flexDirection: "row",
    height: 50,
  }}
  >
    <View style={{
      flex: 1,
      justifyContent: "center",
    }}
    >
      {isHome ? (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
            }}
            source={require("../../assets/menu.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              marginLeft: 5,
            }}
            source={require("../../assets/back.png")}
            resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>
      )}
    </View>


    <View style={{
      flex: 1.5,
      justifyContent: "center",
    }}
    >
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </View>
    <View style={{
      flex: 1,
    }}
    />
  </View>
);

export default CustomHeader;
