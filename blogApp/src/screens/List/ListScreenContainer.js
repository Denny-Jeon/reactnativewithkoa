// ListContainer.js 컴포넌트
import {
  compose, lifecycle, withHandlers,
} from "recompose";
//   import { withRouter } from "react-router-dom";
import ListScreenView from "./ListScreenView";
import { withBlog } from "../../components";

export default compose(
  // withRouter,
  withBlog,
  withHandlers({
    clearList: (props) => async () => {
      const {
        blogAction,
      } = props;
      try {
        await blogAction.clear();
      } catch (err) {
        console.log(err);
      }
    },
    searchList: (props) => async () => {
      const {
        blogPaging, blogAction, blogSearch,
      } = props;
      try {
        const params = `search=${blogSearch}&offset=${blogPaging.offset}&size=${blogPaging.size}`;
        console.log(params);
        await blogAction.searchNAppend(params);
      } catch (err) {
        console.log(err);
      }
    },
  }),
  withHandlers({
    actionList: (props) => async (offset, size) => {
      const { blogAction, searchList } = props;

      const newPaging = {
        offset,
        size,
      };
      await blogAction.setPaging(newPaging);
      await searchList();
    },
  }),
  withHandlers({
    handlePagingByOffset: (props) => async () => {
      const { blogPaging, actionList } = props;
      await actionList(blogPaging.offset + blogPaging.size, blogPaging.size);
    },
    handlePaging: (props) => async (selectedPage) => {
      const { blogPaging, actionList } = props;
      await actionList((selectedPage - 1) * blogPaging.size, blogPaging.size);
    },
    setPagingSize: (props) => async (e) => {
      const { blogPaging, actionList } = props;
      if (e.target.value === blogPaging.size) return;
      await actionList(0, parseInt(e.target.value, 10));
    },
    refreshContent: (props) => async () => {
      const { blogPaging, clearList, actionList } = props;
      await clearList();
      await actionList(0, blogPaging.size);
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { searchList } = this.props;
      await searchList();
    },
    async componentDidUpdate(prevProps) {
      const { blogSearch, searchList } = this.props;
      if (blogSearch !== prevProps.blogSearch) {
        await searchList();
        return true;
      }

      return false;
    },
  }),
)(ListScreenView);
