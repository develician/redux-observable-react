import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from "../actions/postActions";

const initialState = {
  posts: []
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload.posts
      };
    case FETCH_POSTS_FAILURE:
      return state;
    default:
      return state;
  }
};
