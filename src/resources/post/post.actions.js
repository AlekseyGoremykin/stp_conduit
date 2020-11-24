import * as api from "./post.api";
import { GET_POSTS, GET_POSTS_BY_TAG, GET_TAGS, ADD_FAVORIT } from "./post.reducer";

export const getPosts = (url) => async (dispatch) => {
  const posts = await api.getPosts(url);
  dispatch({ type: GET_POSTS, payload: posts });
};

export const getPostsByTag = (url) => async (dispatch) => {
  const posts = await api.getPosts(url);
  dispatch({ type: GET_POSTS_BY_TAG, payload: posts });
};

export const getTags = (url) => async (dispatch) => {
  const tags = await api.getTags(url);
  dispatch({ type: GET_TAGS, payload: tags });
};

export const isFavorit = (url) => async (dispatch) => {
  const posts = await api.isFavorit(url);
  dispatch({ type: ADD_FAVORIT, payload: posts });
};
