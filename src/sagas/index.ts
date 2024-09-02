import { all } from "redux-saga/effects";
import { postsSagaWatcher } from "./PostsSaga";

//root saga
export default function* rootSaga() {
    yield all([
        postsSagaWatcher(),
    ]);
}
