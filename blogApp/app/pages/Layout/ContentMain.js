import React from "react";
import { Text, View } from "react-native";
import { Switch, Route } from "react-router-native";
import Main from "../Main";
import Settings from "../Settings";

const ContentMain = () => (
  <View>
    <Text>흠...</Text>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </View>
);

export default ContentMain;
