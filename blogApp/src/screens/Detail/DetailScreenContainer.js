import {
  compose, lifecycle, withState, withHandlers,
} from "recompose";
import { Alert } from "react-native";
import Axios from "../../remote";
import DetailScreenView from "./DetailScreenView";
import { withBlog } from "../../components";

export default compose(
  withBlog,
  withState("loading", "setLoading", true),
  withState("selected", "setSelected", ""),
  withHandlers({
    removeContent: (props) => async () => {
      const {
        blogAction, blogSearch, blogPaging, route, navigation,
      } = props;
      try {
        const response = await Axios.delete(`/api/app/v1/blog/${route.params.id}`);
        if (response.status === 204) {
          await blogAction.deleteItem({ id: route.params.id });
          const params = `search=${blogSearch}&offset=${blogPaging.offset + blogPaging.size - 1}&size=1`;
          await blogAction.searchNAppend(params);
          navigation.navigate("List");
        }
      } catch (err) {
        navigation.navigate("List");
      }
    },
  }),
  withHandlers({
    onValueChange: (props) => (itemValue) => {
      const { navigation, blogItem, removeContent } = props;

      if (itemValue === "Update") {
        navigation.navigate("Update", { id: blogItem.id });
        return;
      } if (itemValue === "Delete") {
        Alert.alert(
          "글삭제 확인",
          `${blogItem.title}를 삭제하시겠습니까?`,
          [
            { text: "삭제", onPress: () => removeContent() },
            {
              text: "취소",
              style: "cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
          ],
          { cancelable: false },
        );
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {
        navigation, route, blogAction, setLoading,
      } = this.props;
      try {
        console.log("componentDidMount");
        await blogAction.getItem(route.params.id);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        navigation.navigate("List");
      }
    },
  }),
)(DetailScreenView);
