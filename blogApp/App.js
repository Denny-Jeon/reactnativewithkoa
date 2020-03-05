import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { compose, withState, lifecycle } from "recompose";
import RootNavigator from "./src/navigator";
import { loadAssets } from "./src/utils";
import store from "./src/store";


const App = ({ assetLoaded }) => (
  // const [assetLoaded, setAssetLoaded] = useState(false);

  // useEffect(() => {
  //   const fetchAssets = async () => {
  //     await loadAssets();
  //     setAssetLoaded(true);
  //   };

  //   fetchAssets();
  // }, []);

  // return (
  !assetLoaded ? (
    <AppLoading />
  ) : (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  )
);
//   );
// };


const AppContainer = compose(
  withState("assetLoaded", "setAssetLoaded", false),
  lifecycle({
    async componentDidMount() {
      try {
        const { setAssetLoaded } = this.props;
        await loadAssets();
        setAssetLoaded(true);
      } catch (e) {
      }
    },
  }),

)(App);

export default AppContainer;
