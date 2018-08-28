export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPosts = () => ({ type: FETCH_POSTS });
export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    posts
  }
});
export const fetchPostsFailure = () => ({ type: FETCH_POSTS_FAILURE });
