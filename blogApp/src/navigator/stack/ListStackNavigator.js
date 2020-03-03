import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import DetailStackNavigator from "./DetailStackNavigator";
import { ListScreen, DetailScreen, UpdateScreen } from "../../screens";

const navigationOptionHandler = () => ({
  headerShown: false,
});

const StackList = createStackNavigator();
const ListStackNavigator = () => (
  <StackList.Navigator initialRouteName="List">
    <StackList.Screen name="List" component={ListScreen} options={navigationOptionHandler} />
    {/* <StackList.Screen name="DetailStack" component={DetailStackNavigator} options={navigationOptionHandler} /> */}
    <StackList.Screen name="Detail" component={DetailScreen} options={navigationOptionHandler} />
    <StackList.Screen name="Update" component={UpdateScreen} options={navigationOptionHandler} />
  </StackList.Navigator>
);

export default ListStackNavigator;
