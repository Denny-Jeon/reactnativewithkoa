import React from "react";
import {
  StyleSheet, View, ScrollView, SafeAreaView, Button, TextInput,
} from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { SafeAreaConsumer } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { CustomHeader } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  nav: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginHorizontal: 5,
  },
  textInputView: {
    padding: 5,
  },
  textInput: {
    height: 60,
    fontSize: 16,
    backgroundColor: "white",
    textAlign: "left",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#FCE443",
  },
  rich: {
    minHeight: 200,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: "#F5FCFF",
  },
  scroll: {
    backgroundColor: "#ffffff",
  },
  richToobarButtonStyle: { backgroundColor: "transparent" },
});


let editorRef = React.createRef();

const UpdateEditor = ({
  navigation, insets, title, blogItem, handleSubmit, handleChange,
}) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#F5FCFF",
      paddingTop: insets.top,
    }}
  >
    <CustomHeader title="글수정" navigation={navigation} />
    <View style={styles.nav}>

      <Button title="수정" onPress={() => handleSubmit(editorRef)} />
    </View>

    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange}
        value={title}
        placeholder="제목"
      />
    </View>

    <ScrollView style={styles.scroll}>
      <RichEditor
        // eslint-disable-next-line no-return-assign
        ref={(rf) => editorRef = rf}
        initialContentHTML={blogItem.content}
        style={styles.rich}
      />
    </ScrollView>

    <RichToolbar
      style={styles.richBar}
      getEditor={() => editorRef}
      iconTint="#000033"
      selectedIconTint="#2095F2"
      selectedButtonStyle={styles.richToobarButtonStyle}
    />
  </SafeAreaView>
);

UpdateEditor.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  insets: PropTypes.shape({
    top: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  blogItem: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};


const UpdateScreenView = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SafeAreaConsumer>{(insets) => <UpdateEditor insets={insets} {...props} />}</SafeAreaConsumer>
);

export default UpdateScreenView;
