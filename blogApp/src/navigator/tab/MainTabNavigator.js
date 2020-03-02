import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ListStackNavigator from "../stack";
import { PostScreen } from "../../screens";

const navigationOptionHandler = () => ({
  headerShown: false,
});

const TabMain = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "List") {
      iconName = focused ? "ios-list-box" : "ios-list";
    } else if (route.name === "Post") {
      iconName = focused ? "ios-create" : "ios-create";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  activeTintColor: "#00cc00",
  inactiveTintColor: "gray",
};

const MainTabNavigator = () => (

  <TabMain.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <TabMain.Screen
      name="List"
      component={ListStackNavigator}
    />
    <TabMain.Screen name="Post" component={PostScreen} options={navigationOptionHandler} />
  </TabMain.Navigator>
);

export default MainTabNavigator;
