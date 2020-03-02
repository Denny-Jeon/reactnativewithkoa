import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailStackNavigator from "./DetailStackNavigator";
import { ListScreen } from "../../screens";

const navigationOptionHandler = () => ({
  headerShown: false,
});

const StackList = createStackNavigator();
const ListStackNavigator = () => (
  <StackList.Navigator initialRouteName="List">
    <StackList.Screen name="List" component={ListScreen} options={navigationOptionHandler} />
    <StackList.Screen name="DetailStack" component={DetailStackNavigator} options={navigationOptionHandler} />
  </StackList.Navigator>
);

export default ListStackNavigator;
