import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import RootNavigator from "./src/navigator";
import { loadAssets } from "./src/utils";

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
      <RootNavigator />
    )
  );
};

export default App;
