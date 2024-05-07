// sagas.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_LIST_REQUEST,
  fetchListSuccess,
  fetchListFailure,
} from "./actions";
import { fetchSampleJdData } from "../helper/api";

function* fetchListSaga(action) {
    const { limit, offset } = action.payload;
  try {
    const data = yield call(fetchSampleJdData, limit, offset);
    yield put(fetchListSuccess(data));
  } catch (error) {
    yield put(fetchListFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_LIST_REQUEST, fetchListSaga);
}
