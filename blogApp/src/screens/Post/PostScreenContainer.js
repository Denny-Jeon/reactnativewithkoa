import { compose, withState, withHandlers } from "recompose";
import Axios from "../../remote";
import { getDescription } from "../../utils";
import { withBlog } from "../../components";
import PostScreenView from "./PostScreenView";

export default compose(
  withBlog,
  withState("editorState", "setEditorState", ""),
  withState("title", "setTitle", ""),
  withHandlers({
    handleChange: (props) => (text) => {
      props.setTitle(text);
    },
    handleSubmit: (props) => async (editorRef) => {
      const {
        blogAction, blogPaging, navigation, setEditorState, setTitle,
      } = props;

      try {
        const content = await editorRef.getContentHtml();
        const description = getDescription(content);

        const newBlog = {
          title: props.title,
          content,
          description,
        };

        const response = await Axios.post("/api/app/v1/blog", newBlog);
        if (response.status === 201) {
          await blogAction.clear();
          const params = `search=&offset=0&size=${blogPaging.size}`;
          await blogAction.searchNAppend(params);
          setEditorState("");
          setTitle("");
          editorRef.setContentHTML("");
          navigation.navigate("List");
        }
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(PostScreenView);
