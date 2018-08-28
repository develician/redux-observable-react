import { ajax } from "rxjs/observable/dom/ajax";
// import { Observable } from "rxjs/Observable";
import {
  map,
  mergeMap,
  // switchMap,
  // catchError,
  // tap,
  withLatestFrom
} from "rxjs/operators";
import { ofType } from "redux-observable";

import {
  FETCH_POSTS,
  // FETCH_USER_CANCEL,
  fetchPostsSuccess
  // fetchUserError
} from "../actions/postActions";

export const fetchPostEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_POSTS),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      ajax.get(`/api/post`).pipe(map(response => fetchPostsSuccess(response)))
    )
  );
