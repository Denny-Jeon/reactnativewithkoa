import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabNavigator from "../tab";
// import { AboutScreen } from "../../screens";
import { AboutScreen, SearchScreen } from "../../screens";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="MainTab"
    drawerContent={(props) => CustomDrawerContent(props)}
  >
    <Drawer.Screen name="MainTab" component={MainTabNavigator} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Search" component={SearchScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
