import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigator";
import { loadAssets } from "./src/utils";
import store from "./src/store";

const App = () => {
  const [assetLoaded, setAssetLoaded] = useState(false);

  useEffect(() => {
    const fetchAssets = async () => {
      await loadAssets();
      setAssetLoaded(true);
    };

    fetchAssets();
  }, []);

  return (
    !assetLoaded ? (
      <AppLoading />
    ) : (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  );
};

export default App;
