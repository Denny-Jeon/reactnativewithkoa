import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BlogNavigator from "./drawer";

const RootNavigator = () => (
  <NavigationContainer>
    <BlogNavigator />
  </NavigationContainer>
);

export default RootNavigator;
