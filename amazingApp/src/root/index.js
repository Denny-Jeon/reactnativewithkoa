import React from "react";
import { Switch, Route } from "react-router-native";
import { Container } from "native-base";
import Home from "../pages/Home";
import MainHeader from "../pages/Header";

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="1">
      <Container>
        <MainHeader />
      </Container>
    </Route>
  </Switch>
);


export default Root;
