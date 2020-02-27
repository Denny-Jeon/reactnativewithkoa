import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { Container } from "native-base";
import Routes from "./app/Routes";
import store from "./app/store";
import { loadAssets } from "./app/utils";

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
      <Container>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Container>
    )
  );
};

export default App;
