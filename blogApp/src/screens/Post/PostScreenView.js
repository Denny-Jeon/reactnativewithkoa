import React from "react";
import {
  Text, View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { CustomHeader } from "../../components";

const PostScreenView = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="글쓰기" isHome navigation={navigation} />
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>Post Screen!</Text>
    </View>
  </SafeAreaView>
);

PostScreenView.propTypes = {
  navigation: PropTypes.shape({
  }).isRequired,
};

export default PostScreenView;
