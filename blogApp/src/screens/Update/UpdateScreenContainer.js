import {
  compose, withHandlers, withStateHandlers,
} from "recompose";
import Axios from "../../remote";
import { getDescription } from "../../utils";
import { withBlog } from "../../components";
import UpdateScreenView from "./UpdateScreenView";

export default compose(
  withBlog,
  withStateHandlers(({ blogItem }) => ({
    title: blogItem.title,
  }),
  {
    handleChange: () => (title) => ({
      title,
    }),
  }),
  withHandlers({
    handleSubmit: (props) => async (editorRef) => {
      const {
        blogAction, navigation, route,
      } = props;

      try {
        const content = await editorRef.getContentHtml();
        const description = getDescription(content);

        const newBlog = {
          title: props.title,
          content,
          description,
        };

        const response = await Axios.put(`/api/app/v1/blog/${route.params.id}`, newBlog);
        if (response.status === 200) {
          blogAction.updateItem({
            ...newBlog,
            id: route.params.id,
          });
          navigation.navigate("Detail", {
            id: route.params.id,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(UpdateScreenView);
