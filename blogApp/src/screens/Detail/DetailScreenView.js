import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { CustomHeader } from "../../components";


const DetailScreenView = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="상세보기" navigation={navigation} />
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>Detail Screen!</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Update")}
      >
        <Text>글수정</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

DetailScreenView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailScreenView;
