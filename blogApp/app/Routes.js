import React from "react";
import {
  NativeRouter,
} from "react-router-native";
import { Header as TopHeader, ContentMain, Footer } from "./pages/Layout";

const Routes = () => (
  <NativeRouter>
    <TopHeader />
    <ContentMain />
    <Footer />
  </NativeRouter>
);

export default Routes;
