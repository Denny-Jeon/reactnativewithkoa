import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen, UpdateScreen } from "../../screens";

const navigationOptionHandler = () => ({
  headerShown: false,
});

const StackDetail = createStackNavigator();
const DetailStackNavigator = () => (
  <StackDetail.Navigator initialRouteName="Detail">
    <StackDetail.Screen name="Detail" component={DetailScreen} options={navigationOptionHandler} />
    <StackDetail.Screen name="Update" component={UpdateScreen} options={navigationOptionHandler} />
  </StackDetail.Navigator>
);

export default DetailStackNavigator;
