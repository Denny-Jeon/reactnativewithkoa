import { Asset } from "expo-asset";
import { Image } from "react-native";
import * as Font from "expo-font";

const cacheImage = (images) => images.map((image) => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  }
  return Asset.fromModule(image).downloadAsync();
});
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadAssets = async () => {
  const imageAssets = cacheImage([
    // "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    // eslint-disable-next-line global-require
    // require("../../assets/splash2.png"),
    // Images.logo,
  ]);

  const fontAssets = cacheFonts([{
    // eslint-disable-next-line global-require
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    // eslint-disable-next-line global-require
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    // eslint-disable-next-line global-require
    Ionicons: require("native-base/Fonts/Ionicons.ttf"),
  }]);
  await Promise.all([...imageAssets, ...fontAssets]);
  console.log("loaded...");
};

export default loadAssets;
