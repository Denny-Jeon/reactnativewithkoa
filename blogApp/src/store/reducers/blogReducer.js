import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import * as BlogApi from "../../remote";

const SET_PAGING_BLOG = "blog/SET_PAGING";
const SET_SEARCH_BLOG = "blog/SET_SEARCH";
const SEARCH_BLOG = "blog/SEARCH";
const SEARCHNAPPEND_BLOG = "blog/SEARCHNAPPEND";
const CLEAR_BLOG = "blog/CLEAR_BLOG";

export const setPaging = createAction(SET_PAGING_BLOG);
export const setSearch = createAction(SET_SEARCH_BLOG);
export const search = createAction(SEARCH_BLOG, BlogApi.search);
export const searchNAppend = createAction(SEARCHNAPPEND_BLOG, BlogApi.search);
export const clear = createAction(CLEAR_BLOG);


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
          data.total = action.payload.data;
          data.items = data.items.concat(action.payload.data.items);
        }
        return state.set("data", fromJS(data));
      },
    }),
  },
  initialState,
);
