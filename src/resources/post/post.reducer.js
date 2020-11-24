export const GET_POSTS = "GET_POSTS"
export const GET_TAGS = "GET_TAGS"
export const GET_POSTS_BY_TAG = "GET_POSTS_BY_TAG"
export const ADD_FAVORIT = "ADD_FAVORIT"

export const initState = {
  posts: {},
  tags: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case GET_POSTS_BY_TAG:
      return {
        ...state,
        posts: action.payload
      };

    case GET_TAGS:
      return {
        ...state,
        tags: action.payload
      };

    case ADD_FAVORIT:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};
