import { compose, withState, withHandlers } from "recompose";
import { withBlog } from "../../components";
import SearchScreenView from "./SearchScreenView";

export default compose(
  withBlog,
  withState("search", "setSearch", ""),
  withHandlers({
    searchList: (props) => async () => {
      const {
        blogPaging, blogAction, blogSearch,
      } = props;
      try {
        const params = `search=${blogSearch}&offset=${blogPaging.offset}&size=${blogPaging.size}`;
        await blogAction.searchNAppend(params);
      } catch (err) {
        console.log(err);
      }
    },
  }),
  withHandlers({
    handleChange: (props) => (text) => {
      props.setSearch(text);
    },
    handleSubmit: (props) => async () => {
      const {
        blogPaging, blogAction, navigation, searchList,
      } = props;

      const newPaging = {
        offset: 0,
        size: blogPaging.size,
      };
      await blogAction.clear();
      await blogAction.setPaging(newPaging);
      await blogAction.setSearch(props.search);
      await searchList();
      props.setSearch("");
      navigation.navigate("List");
    },
  }),
)(SearchScreenView);
