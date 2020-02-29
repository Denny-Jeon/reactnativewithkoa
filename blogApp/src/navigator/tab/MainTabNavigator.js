import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListStackNavigator from "../stack";
import { PostScreen } from "../../screens";

const navigationOptionHandler = () => ({
  headerShown: false,
});

const TabMain = createBottomTabNavigator();

const MainTabNavigator = () => (
  // screenOptions={({ route }) => ({
  //   tabBarIcon: ({ focused, color, size }) => {
  //     let iconName;

  //     if (route.name === "Home") {
  //       iconName = focused
  //         ? require("../../assets/home.png")
  //         : require("../../assets/home-black.png");
  //     } else if (route.name === "Settings") {
  //       iconName = focused
  //         ? require("../../assets/setting.png")
  //         : require("../../assets/setting-black.png");
  //     }

  // You can return any component that you like here!
  // return <Ionicons name={iconName} size={size} color={color} />;
  //     return (
  //       <Image
  //         source={iconName}
  //         style={{
  //           width: 20,
  //           height: 20,
  //         }}
  //         resizeMode="contain"
  //       />
  //     );
  //   },
  // })}
  // tabBarOptions={{
  //   activeTintColor: "red",
  //   inactiveTintColor: "black",
  // }}
  <TabMain.Navigator>
    <TabMain.Screen name="List" component={ListStackNavigator} />
    <TabMain.Screen name="Post" component={PostScreen} options={navigationOptionHandler} />
  </TabMain.Navigator>
);

export default MainTabNavigator;
