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
  FETCH_USER,
  // FETCH_USER_CANCEL,
  fetchUserFulfilled
  // fetchUserError
} from "../actions/userActions";

export const fetchUserEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_USER),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      ajax
        .getJSON(`http://jsonplaceholder.typicode.com/users/${action.id}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );
