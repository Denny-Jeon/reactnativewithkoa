import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import * as BlogApi from "../../remote";

const SET_PAGING_BLOG = "blog/SET_PAGING";
const SET_SEARCH_BLOG = "blog/SET_SEARCH";
const SEARCH_BLOG = "blog/SEARCH";
const SEARCHNAPPEND_BLOG = "blog/SEARCHNAPPEND";
const CLEAR_BLOG = "blog/CLEAR_BLOG";
const GET_ITEM_BLOG = "blog/GET_ITEM";
const UPDATE_ITEM_BLOG = "blog/UPDATE_ITEM";
const DELETE_ITEM_BLOG = "blog/DELETE_ITEM";

export const setPaging = createAction(SET_PAGING_BLOG);
export const setSearch = createAction(SET_SEARCH_BLOG);
export const search = createAction(SEARCH_BLOG, BlogApi.search);
export const searchNAppend = createAction(SEARCHNAPPEND_BLOG, BlogApi.search);
export const clear = createAction(CLEAR_BLOG);
export const getItem = createAction(GET_ITEM_BLOG, BlogApi.get);
export const updateItem = createAction(UPDATE_ITEM_BLOG);
export const deleteItem = createAction(DELETE_ITEM_BLOG);


const initialState = fromJS({
  data: Map({
    total: 0,
    items: List([]),
  }),
  paging: Map({
    offset: 0,
    size: 5,
  }),
  search: "",
  item: Map({
    id: -1,
    title: "",
    description: "",
    content: "",
    createdAt: "",
  }),
});

export default handleActions(
  {
    [SET_PAGING_BLOG]: (state, action) => state.set("paging", fromJS(action.payload)),
    [SET_SEARCH_BLOG]: (state, action) => state.set("search", action.payload),
    ...pender({
      type: SEARCH_BLOG,
      onSuccess(state, action) {
        return state.set("data", fromJS(action.payload.data));
      },
    }),
    [CLEAR_BLOG]: () => initialState,
    ...pender({
      type: SEARCHNAPPEND_BLOG,
      onSuccess(state, action) {
        const data = state.get("data").toJS();
        if (action.payload.data) {
          data.total = action.payload.data.total;
          data.items = data.items.concat(action.payload.data.items);
        }

        return state.set("data", fromJS(data));
      },
    }),
    ...pender({
      type: GET_ITEM_BLOG,
      onSuccess(state, action) {
        return state.set("item", fromJS(action.payload.data));
      },
    }),
    [UPDATE_ITEM_BLOG]: (state, action) => {
      const items = state.getIn(["data", "items"]).toJS();
      const item = state.get("item").toJS();
      const updatedItems = items.map((im) => (action.payload.id !== im.id ? im : {
        ...im,
        content: action.payload.content,
        description: action.payload.description,
        title: action.payload.title,
      }));
      const newItem = {
        ...item,
        content: action.payload.content,
        description: action.payload.description,
        title: action.payload.title,
      };

      return state.setIn(["data", "items"], fromJS(updatedItems)).set("item", fromJS(newItem));
    },
    [DELETE_ITEM_BLOG]: (state, action) => {
      const data = state.get("data").toJS();

      const deletedItems = data.items.filter((im) => action.payload.id !== im.id);
      const newData = {
        total: data.total - 1,
        items: deletedItems,
      };
      return state.set("data", fromJS(newData))
        .set("item", fromJS({
          id: -1,
          title: "",
          description: "",
          content: "",
          createdAt: "",
        }));
    },
  },
  initialState,
);


// const data = state.get("data").toJS();
// const paging = state.get("paging").toJS();
// let index = 0;

// const deletedItems = data.items.filter((im, idx) => {
//   if (action.payload.id === im.id) index = idx;
//   return action.payload.id !== im.id;
// });
// const newData = {
//   total: data.total - 1,
//   items: deletedItems,
// };
// const newPaging = {
//   ...paging,
//   offset: ((index % paging.size) === paging.size - 1) ? paging.offset - 1 : paging.offset,
// };

// return state.set("data", fromJS(newData))
//   .set("item", fromJS({
//     id: -1,
//     title: "",
//     description: "",
//     content: "",
//     createdAt: "",
//   }))
//   .set("paging", fromJS(newPaging));
