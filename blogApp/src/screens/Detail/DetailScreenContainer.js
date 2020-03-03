import {
  compose, lifecycle, withState, withHandlers,
} from "recompose";
import Axios from "axios";
import { Alert } from "react-native";
import DetailScreenView from "./DetailScreenView";
import { RemoteHost } from "../../utils";
import { withBlog } from "../../components";

export default compose(
  withBlog,
  withState("data", "setData", {
    id: -1,
    title: "",
    content: "",
    createdAt: "",
  }),
  withState("selected", "setSelected", ""),
  withHandlers({
    removeContent: (props) => async () => {
      // const {
      //   blogAction, blogData, blogPaging, data, navigation,
      // } = props;
      // try {
      //   const response = await Axios.delete(`${RemoteHost}/api/app/v1/blog/${data.id}`);
      //   if (response.status === 204) {
      //     const newPaging = resetPaging(blogData.total, blogData.items, blogPaging);
      //     await blogAction.setPaging(newPaging);
      //     navigation.navigate("List");
      //   }
      // } catch (err) {
      //   navigation.navigate("List");
      // }
    },
    onValueChange: (props) => (itemValue) => {
      const { navigation, data } = props;

      if (itemValue === "Update") {
        navigation.navigate("Update", { id: data.id });
        return;
      } if (itemValue === "Delete") {
        Alert.alert(
          "글삭제 확인",
          `${data.title}를 삭제하시겠습니까?`,
          [
            { text: "삭제", onPress: () => console.log("OK Pressed") },
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
      const { navigation, setData, route } = this.props;
      try {
        const response = await Axios.get(`${RemoteHost}/api/app/v1/blog/${route.params.id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        navigation.navigate("List");
      }
    },
  }),
)(DetailScreenView);
